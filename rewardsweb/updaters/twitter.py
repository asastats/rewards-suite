"""Module containing class for sending X/Twitter messages."""

import logging
import re

import tweepy

from trackers.config import twitter_config
from trackers.models import Mention
from updaters.base import BaseUpdater

logger = logging.getLogger(__name__)


class TwitterUpdater(BaseUpdater):
    """Main class for retrieving and adding X/Twitter messages.

    :var TwitterUpdater.client: authenticated Twitter client
    :type TwitterUpdater.client: :class:`tweepy.Client`
    """

    def __init__(self, *args, **kwargs):
        """Initialize Twitter/X updater.

        :var config: configuration dictionary for X API
        :type config: dict
        """
        super().__init__(*args, **kwargs)

        config = twitter_config()
        self.client = tweepy.Client(
            bearer_token=config["bearer_token"],
            consumer_key=config["consumer_key"],
            consumer_secret=config["consumer_secret"],
            access_token=config["access_token"],
            access_token_secret=config["access_token_secret"],
        )

    def add_reaction_to_message(self, url, reaction_name):
        """Add reaction to message.

        :param url: URL of the message to react to
        :type url: str
        :param reaction_name: name of the reaction to add (e.g. "duplicate")
        :type reaction_name: str
        :return: X/Twiiter doesn't implement emoji rections so we just return True
        :rtype: Boolean
        """
        return True

    def add_reply_to_message(self, url, text):
        """Add reply `text` to the tweet defined by `url`.

        :param url: URL of the message to reply to
        :type url: str
        :param text: text to reply with
        :type text: str
        :var tweet_id_match: tweet ID matching object
        :type tweet_id_match: :class:`re.Match`
        :var tweet_id: unique tweet identifier
        :type tweet_id: str
        :var response: Tweepy client's response object
        :type response: :class:`requests.Response`
        :return: True for success, False otherwise
        :rtype: Boolean
        """
        try:
            tweet_id_match = re.search(r"(?:twitter\.com|x\.com)/\w+/status/(\d+)", url)
            if not tweet_id_match:
                logger.error(f"Invalid tweet URL format: {url}")
                return False

            tweet_id = tweet_id_match.group(1)
            response = self.client.create_tweet(
                text=text, in_reply_to_tweet_id=tweet_id
            )
            if not response.data:
                logger.error(
                    f"Failed to add reply: {response.status_code} - {response.text}"
                )
                return False

        except tweepy.TweepyException as e:
            logger.error(f"Error replying to tweet: {e}")
            return False

        except ValueError as e:
            logger.error(f"Error: {e}")
            return False

        except Exception as e:
            logger.error(f"Unexpected error: {e}")
            return False

        logger.info(f"Reply added successfully to tweet_id {tweet_id}!")
        return True

    def message_from_url(self, url):
        """Retrieve message content from provided Twitter `url`.

        :param url: twitter URL to get message from
        :type url: str
        :return: dictionary with message data
        :rtype: dict
        """
        return Mention.objects.message_from_url(url)
