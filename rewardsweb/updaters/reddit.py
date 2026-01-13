"""Module containing class for adding replies to Reddit posts and comments."""

import logging
import re
from urllib.parse import urlparse

from praw import Reddit
from praw.exceptions import ClientException, RedditAPIException

from trackers.config import reddit_config
from trackers.models import Mention
from updaters.base import BaseUpdater

logger = logging.getLogger(__name__)


class RedditUpdater(BaseUpdater):
    """Main class for retrieving and adding Reddit post and comments.

    :var RedditUpdater.client: authenticated Reddit client
    :type RedditUpdater.client: :class:`praw.Reddit`
    """

    def __init__(self, *args, **kwargs):
        """Initialize Twitter/X updater.

        :var config: configuration dictionary for Reddit API
        :type config: dict
        """
        super().__init__(*args, **kwargs)

        config = reddit_config()
        self.client = Reddit(
            client_id=config["client_id"],
            client_secret=config["client_secret"],
            user_agent=config["user_agent"],
            username=config.get("username"),
            password=config.get("password"),
        )

    def _ids_from_url(self, url):
        """Extract submission_id and comment_id from a permalink URL.

        Assumes URL is exactly in the format:
        - https://reddit.com/r/subreddit/comments/submission_id/title/
        - https://reddit.com/r/subreddit/comments/submission_id/title/comment_id/

        :param url: Reddit URL generated from permalink
        :type url: str
        :var parsed: URL parsed into components
        :type parsed: namedtuple
        :var hostname: provided URL's host name
        :type hostname: str
        :var clean_url: Reddit URL without domain
        :type clean_url: str
        :var parts: Reddit URL parts collection
        :type parts: list
        :var submission_id: Reddit post/submission identifier
        :type submission_id: str
        :var comment_id: Reddit comment identifier
        :type comment_id: str
        :return: tuple of (submission_id, comment_id) where comment_id may be None
        :rtype: two-tuple
        """
        parsed = urlparse(url)
        hostname = parsed.hostname.lower() if parsed.hostname else None
        if hostname and (hostname == "reddit.com" or hostname.endswith(".reddit.com")):
            clean_url = parsed.path
            parts = [p for p in clean_url.split("/") if p]

            # Find the 'comments' section
            for i, part in enumerate(parts):
                if part == "comments" and i + 1 < len(parts):
                    submission_id = parts[i + 1]

                    # Check if there's a comment_id (2 parts after submission_id)
                    if len(parts) > i + 3:
                        comment_id = parts[i + 3]
                        # Basic validation: comment IDs are base36, usually 4+ chars
                        if len(comment_id) >= 4 and re.match(
                            r"^[a-z0-9]+$", comment_id, re.IGNORECASE
                        ):
                            return submission_id, comment_id

                    return submission_id, None

        return None, None

    def add_reaction_to_message(self, url, reaction_name):
        """Add reaction to Reddit message.

        :param url: URL of the message to react to
        :type url: str
        :param reaction_name: name of the reaction to add (e.g. "duplicate")
        :type reaction_name: str
        :return: Reddit doesn't implement emoji rections so we just return True
        :rtype: Boolean
        """
        return True

    def add_reply_to_message(self, url, text):
        """Add reply to Reddit message.

        :param url: URL of the Reddit post/comment to reply to
        :type url: str
        :param text: text to reply with
        :type text: str
        :var submission_id: Reddit post/submission identifier
        :type submission_id: str
        :var comment_id: Reddit comment identifier
        :type comment_id: str
        :var comment: Reddit comment identifier
        :type comment: :class:`praw.models.Comment`
        :var submission: Reddit comment identifier
        :type submission: :class:`praw.models.Submission`
        :return: True for success, False otherwise
        :rtype: Boolean
        """
        try:
            submission_id, comment_id = self._ids_from_url(url)
            if not submission_id:
                logger.error(f"Invalid Reddit URL: {url}")
                return False

            if comment_id:
                # Reply to comment
                comment = self.client.comment(id=comment_id)
                comment.reply(text)
                logger.info(f"Successfully replied to comment {comment_id}")

            else:
                # Reply to submission
                submission = self.client.submission(id=submission_id)
                submission.reply(text)
                logger.info(f"Successfully replied to submission {submission_id}")

            return True

        except RedditAPIException as e:
            logger.error(f"Reddit API error: {e}")
            return False

        except ClientException as e:
            logger.error(f"PRAW client error: {e}")
            return False

        except Exception as e:
            logger.error(f"Unexpected error: {e}")
            return False

    def message_from_url(self, url):
        """Retrieve message content from provided Reddit `url`.

        :param url: Reddit URL to get message from
        :type url: str
        :return: dictionary with message data
        :rtype: dict
        """
        return Mention.objects.message_from_url(url)
