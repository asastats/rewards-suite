"""Module containing class for sending Telegram replies and emoji reactions."""

import asyncio
import logging
from pathlib import Path

from telethon import TelegramClient
from telethon.errors import SessionPasswordNeededError

from trackers.config import telegram_config
from trackers.models import Mention
from updaters.base import BaseUpdater

logger = logging.getLogger(__name__)


class TelegramUpdater(BaseUpdater):
    """Main class for retrieving and adding Telegram messages.

    :var TelegramUpdater.client: authenticated Telegram client
    :type TelegramUpdater.client: :class:`telethon.TelegramClient`
    :var TelegramUpdater._is_connected: is client connected or not
    :type TelegramUpdater._is_connected: Boolean
    """

    def __init__(self, *args, **kwargs):
        """Initialize Twitter/X updater.

        :var config: configuration dictionary for Telegram API
        :type config: dict
        :var session_name: name of the client session
        :type session_name: str
        :var session_path: full path on disk to session database file
        :type session_path: :class:`pathlib.PosixPath`
        """
        super().__init__(*args, **kwargs)

        config = telegram_config()
        session_name = config.get("session_name", "telegram_tracker")
        session_path = (
            Path(__file__).resolve().parent.parent
            / "fixtures"
            / f"{session_name}.session"
        )
        self.client = TelegramClient(
            session=session_path,
            api_id=config["api_id"],
            api_hash=config["api_hash"],
        )
        self._is_connected = False

    async def _add_reply_async(self, url, text):
        """Async implementation of adding reply to message.

        :param url: URL of the message
        :type url: str
        :param text: text to reply with
        :type text: str
        :var chat_id: unique chat identifier
        :type chat_id: int
        :var message_id: unique message identifier in the chat
        :type message_id: int
        :return: True if successful, False otherwise
        :rtype: bool
        """
        try:
            await self._ensure_connected()
            chat_id, message_id = self._parse_message_url(url)
            await self.client.send_message(
                entity=chat_id, message=text, reply_to=message_id
            )
            logger.info(f"Added reply to message: {url}")
            return True

        except Exception as e:
            logger.error(f"Error adding reply to {url}: {e}")
            return False

    async def _ensure_connected(self):
        """Ensure Telegram client is connected.

        :var phone: app creator's phone number
        :type phone: str
        :var code: code received via Telegram app
        :type code: str
        :var password: app creator's 2FA password
        :type password: str
        """
        if not self._is_connected:
            try:
                await self.client.connect()
                if not await self.client.is_user_authorized():
                    phone = input("Please enter your phone number: ")
                    await self.client.send_code_request(phone)
                    code = input("Please enter the code you received: ")
                    await self.client.sign_in(phone, code)

                self._is_connected = True

            except SessionPasswordNeededError:
                password = input("Please enter your 2FA password: ")
                await self.client.sign_in(password=password)
                self._is_connected = True

            except Exception as e:
                logger.error(f"Error connecting Telegram client: {e}")
                raise

    def _parse_message_url(self, url):
        """Parse Telegram message URL to extract chat_id and message_id.

        :param url: URL of the message
        :type url: str
        :var parts: message URL's parts
        :type parts: list
        :var chat_id: unique chat identifier
        :type chat_id: int
        :var message_id: unique message identifier in the chat
        :type message_id: int
        :return: tuple of (chat_id, message_id)
        :rtype: two-tuple
        """
        parts = url.split("/")
        chat_id = int(parts[0])
        message_id = int(parts[1])
        return chat_id, message_id

    def _process_action(self, action_callback, *args):
        """Run `action_callback` with `args` in an asynchronous loop.

        :param action_callback: method to call
        :type action_callback: object
        :var loop: asyncio event loop
        :type loop: :class:`asyncio.events.AbstractEventLoop`
        :var result: future's result
        :type result: object
        :return: True for success, False otherwise
        :rtype: bool
        """
        try:
            # Create event loop for async operations
            loop = asyncio.new_event_loop()
            asyncio.set_event_loop(loop)

            # Run the async method
            result = loop.run_until_complete(action_callback(*args))

            # Cleanup
            if self._is_connected:
                loop.run_until_complete(self.client.disconnect())
                self._is_connected = False

            loop.close()

            return result

        except Exception as e:
            logger.error(f"Error raised for {action_callback.__name__}: {e}")
            return False

    def add_reaction_to_message(self, url, reaction_name):
        """Add reaction to the Telegram message defined by `url`.

        NOTE: not implemented yet

        :param url: URL of the message to react to
        :type url: str
        :param reaction_name: name of the reaction to add (e.g. "duplicate")
        :type reaction_name: str
        :return: True for success, False otherwise
        :rtype: Boolean
        """
        return True

    def add_reply_to_message(self, url, text):
        """Add  `text` to message defined by `url`.

        :param url: URL of the message to reply to
        :type url: str
        :param text: text to reply with
        :type text: str
        :return: True for success, False otherwise
        :rtype: bool
        """
        return self._process_action(self._add_reply_async, url, text)

    def message_from_url(self, url):
        """Retrieve message content from provided Telegram `url`.

        :param url: Telegram URL to get message from
        :type url: str
        :return: dictionary with message data
        :rtype: dict
        """
        return Mention.objects.message_from_url(url)
