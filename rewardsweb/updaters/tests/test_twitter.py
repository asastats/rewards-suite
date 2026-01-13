"""Testing module for :py:mod:`updaters.twitter` module."""

import re

from tweepy.errors import BadRequest, TweepyException

from updaters.base import BaseUpdater
from updaters.twitter import TwitterUpdater


class TestUpdatersTwitterTwitterUpdater:
    """Testing class for :py:mod:`updaters.twitter.TwitterUpdater` class."""

    def test_updaters_twitter_twitterupdater_is_subclass_of_baseupdater(self):
        assert issubclass(TwitterUpdater, BaseUpdater)

    # __init__
    def test_updaters_twitter_twitterupdater_init_functionality(self, mocker):
        twitter_config = {
            "bearer_token": "test_bearer_token",
            "consumer_key": "test_consumer_key",
            "consumer_secret": "test_consumer_secret",
            "access_token": "test_access_token",
            "access_token_secret": "test_access_token_secret",
            "target_user_id": "test_user_id",
            "poll_interval": 15,
        }
        mock_init = mocker.patch("updaters.twitter.BaseUpdater.__init__")
        mock_config = mocker.patch(
            "updaters.twitter.twitter_config", return_value=twitter_config
        )
        mock_client = mocker.patch("tweepy.Client")
        instance = TwitterUpdater(1, 2, foo="bar")
        mock_init.assert_called_once_with(1, 2, foo="bar")
        mock_config.assert_called_once_with()
        mock_client.assert_called_once_with(
            bearer_token="test_bearer_token",
            consumer_key="test_consumer_key",
            consumer_secret="test_consumer_secret",
            access_token="test_access_token",
            access_token_secret="test_access_token_secret",
        )
        assert instance.client == mock_client.return_value

    # # add_reaction_to_message
    def test_updaters_twitter_twitterupdater_add_reaction_to_message_functionality(
        self,
    ):
        assert (
            TwitterUpdater().add_reaction_to_message("some_url", "some_reaction")
            is True
        )

    # # add_reply_to_message
    def test_updaters_twitter_twitterupdater_add_reply_to_message_success(self, mocker):
        # Arrange
        mock_search = mocker.patch.object(re, "search")
        mock_match = mocker.MagicMock()
        mock_match.group.return_value = "1234567890"
        mock_search.return_value = mock_match
        mock_response = mocker.MagicMock()
        mock_response.data = {"id": "1234567891", "text": "Test reply"}
        mock_client = mocker.MagicMock()
        mock_client.create_tweet.return_value = mock_response
        mock_logger = mocker.patch("updaters.twitter.logger")
        # Act
        updater = TwitterUpdater()
        updater.client = mock_client
        result = updater.add_reply_to_message(
            "https://twitter.com/testuser/status/1234567890", "Test reply text"
        )
        # Assert
        assert result is True
        mock_search.assert_called_once_with(
            r"(?:twitter\.com|x\.com)/\w+/status/(\d+)",
            "https://twitter.com/testuser/status/1234567890",
        )
        mock_client.create_tweet.assert_called_once_with(
            text="Test reply text", in_reply_to_tweet_id="1234567890"
        )
        mock_logger.info.assert_called_once_with(
            "Reply added successfully to tweet_id 1234567890!"
        )
        mock_logger.error.assert_not_called()

    def test_updaters_twitter_twitterupdater_add_reply_to_message_invalid_url_format(
        self, mocker
    ):
        # Arrange
        mock_search = mocker.patch.object(re, "search")
        mock_search.return_value = None
        mock_logger = mocker.patch("updaters.twitter.logger")
        # Act
        updater = TwitterUpdater()
        updater.client = mocker.MagicMock()  # Mock client won't be used
        result = updater.add_reply_to_message(
            "https://invalid.url/format", "Test reply text"
        )
        # Assert
        assert result is False
        mock_search.assert_called_once_with(
            r"(?:twitter\.com|x\.com)/\w+/status/(\d+)", "https://invalid.url/format"
        )
        mock_logger.error.assert_called_once_with(
            "Invalid tweet URL format: https://invalid.url/format"
        )
        updater.client.create_tweet.assert_not_called()

    def test_updaters_twitter_twitterupdater_add_reply_to_message_no_response_data(
        self, mocker
    ):
        # Arrange
        mock_search = mocker.patch.object(re, "search")
        mock_match = mocker.MagicMock()
        mock_match.group.return_value = "1234567890"
        mock_search.return_value = mock_match
        mock_response = mocker.MagicMock()
        mock_response.data = None
        mock_response.status_code = 400
        mock_response.text = "Bad Request"
        mock_client = mocker.MagicMock()
        mock_client.create_tweet.return_value = mock_response
        mock_logger = mocker.patch("updaters.twitter.logger")
        # Act
        updater = TwitterUpdater()
        updater.client = mock_client
        result = updater.add_reply_to_message(
            "https://x.com/testuser/status/1234567890", "Test reply text"
        )
        # Assert
        assert result is False
        mock_client.create_tweet.assert_called_once_with(
            text="Test reply text", in_reply_to_tweet_id="1234567890"
        )
        mock_logger.error.assert_called_once_with(
            "Failed to add reply: 400 - Bad Request"
        )

    def test_updaters_twitter_twitterupdater_add_reply_to_message_tweepy_exception(
        self, mocker
    ):
        # Arrange
        mock_search = mocker.patch.object(re, "search")
        mock_match = mocker.MagicMock()
        mock_match.group.return_value = "1234567890"
        mock_search.return_value = mock_match
        mock_client = mocker.MagicMock()
        mock_client.create_tweet.side_effect = TweepyException("Twitter API error")
        mock_logger = mocker.patch("updaters.twitter.logger")
        # Act
        updater = TwitterUpdater()
        updater.client = mock_client
        result = updater.add_reply_to_message(
            "https://twitter.com/testuser/status/1234567890", "Test reply text"
        )
        # Assert
        assert result is False
        mock_client.create_tweet.assert_called_once_with(
            text="Test reply text", in_reply_to_tweet_id="1234567890"
        )
        mock_logger.error.assert_called_once_with(
            "Error replying to tweet: Twitter API error"
        )

    def test_updaters_twitter_twitterupdater_add_reply_to_message_value_error(
        self, mocker
    ):
        # Arrange
        mock_search = mocker.patch.object(re, "search")
        mock_search.side_effect = ValueError("Invalid ID")
        mock_logger = mocker.patch("updaters.twitter.logger")
        # Act
        updater = TwitterUpdater()
        updater.client = mocker.MagicMock()  # Mock client won't be used
        result = updater.add_reply_to_message(
            "https://twitter.com/testuser/status/1234567890", "Test reply text"
        )
        # Assert
        assert result is False
        mock_logger.error.assert_called_once_with("Error: Invalid ID")
        updater.client.create_tweet.assert_not_called()

    def test_updaters_twitter_twitterupdater_add_reply_to_message_general_exception(
        self, mocker
    ):
        # Arrange
        mock_search = mocker.patch.object(re, "search")
        mock_match = mocker.MagicMock()
        mock_match.group.return_value = "1234567890"
        mock_search.return_value = mock_match
        mock_client = mocker.MagicMock()
        mock_client.create_tweet.side_effect = Exception("Unexpected error")
        mock_logger = mocker.patch("updaters.twitter.logger")
        # Act
        updater = TwitterUpdater()
        updater.client = mock_client
        result = updater.add_reply_to_message(
            "https://x.com/testuser/status/1234567890", "Test reply text"
        )
        # Assert
        assert result is False
        mock_client.create_tweet.assert_called_once_with(
            text="Test reply text", in_reply_to_tweet_id="1234567890"
        )
        mock_logger.error.assert_called_once_with("Unexpected error: Unexpected error")

    def test_updaters_twitter_twitterupdater_add_reply_to_message_success_for_x_com(
        self, mocker
    ):
        # Arrange
        mock_search = mocker.patch.object(re, "search")
        mock_match = mocker.MagicMock()
        mock_match.group.return_value = "9876543210"
        mock_search.return_value = mock_match
        mock_response = mocker.MagicMock()
        mock_response.data = {"id": "9876543211", "text": "Test reply"}
        mock_client = mocker.MagicMock()
        mock_client.create_tweet.return_value = mock_response
        mock_logger = mocker.patch("updaters.twitter.logger")
        # Act
        updater = TwitterUpdater()
        updater.client = mock_client
        result = updater.add_reply_to_message(
            "https://x.com/anotheruser/status/9876543210", "Another test reply"
        )
        # Assert
        assert result is True
        mock_search.assert_called_once_with(
            r"(?:twitter\.com|x\.com)/\w+/status/(\d+)",
            "https://x.com/anotheruser/status/9876543210",
        )
        mock_client.create_tweet.assert_called_once_with(
            text="Another test reply", in_reply_to_tweet_id="9876543210"
        )
        mock_logger.info.assert_called_once_with(
            "Reply added successfully to tweet_id 9876543210!"
        )

    def test_updaters_twitter_twitterupdater_add_reply_to_message_with_long_text(
        self, mocker
    ):
        # Arrange
        mock_search = mocker.patch.object(re, "search")
        mock_match = mocker.MagicMock()
        mock_match.group.return_value = "5555555555"
        mock_search.return_value = mock_match
        long_text = (
            "This is a longer reply text that might contain special characters:"
            "@mentions, #hashtags, and URLs like https://example.com"
        )
        mock_response = mocker.MagicMock()
        mock_response.data = {"id": "5555555556", "text": long_text}
        mock_client = mocker.MagicMock()
        mock_client.create_tweet.return_value = mock_response
        mock_logger = mocker.patch("updaters.twitter.logger")
        # Act
        updater = TwitterUpdater()
        updater.client = mock_client
        result = updater.add_reply_to_message(
            "https://twitter.com/testuser/status/5555555555", long_text
        )
        # Assert
        assert result is True
        mock_client.create_tweet.assert_called_once_with(
            text=long_text, in_reply_to_tweet_id="5555555555"
        )
        mock_logger.info.assert_called_once_with(
            "Reply added successfully to tweet_id 5555555555!"
        )

    def test_updaters_twitter_twitterupdater_add_reply_to_message_with_empty_response(
        self, mocker
    ):
        # Arrange
        mock_search = mocker.patch.object(re, "search")
        mock_match = mocker.MagicMock()
        mock_match.group.return_value = "1111111111"
        mock_search.return_value = mock_match
        mock_response = mocker.MagicMock()
        mock_response.data = {}  # Empty dict instead of None
        mock_response.status_code = 200
        mock_response.text = "OK"
        mock_client = mocker.MagicMock()
        mock_client.create_tweet.return_value = mock_response
        mock_logger = mocker.patch("updaters.twitter.logger")
        # Act
        updater = TwitterUpdater()
        updater.client = mock_client
        result = updater.add_reply_to_message(
            "https://twitter.com/testuser/status/1111111111", "Test reply"
        )
        assert result is False
        mock_client.create_tweet.assert_called_once_with(
            text="Test reply", in_reply_to_tweet_id="1111111111"
        )
        mock_logger.error.assert_called_once_with("Failed to add reply: 200 - OK")

    def test_updaters_twitter_twitterupdater_add_reply_to_message_with_badrequest(
        self, mocker
    ):
        # Arrange
        mock_search = mocker.patch.object(re, "search")
        mock_match = mocker.MagicMock()
        mock_match.group.return_value = "2222222222"
        mock_search.return_value = mock_match
        mock_client = mocker.MagicMock()
        response = mocker.MagicMock()
        response.status_code = 405
        response.reason = "Bad Request: Tweet text is too long"
        mock_client.create_tweet.side_effect = BadRequest(response)
        mock_logger = mocker.patch("updaters.twitter.logger")
        # Act
        updater = TwitterUpdater()
        updater.client = mock_client
        result = updater.add_reply_to_message(
            "https://twitter.com/testuser/status/2222222222",
            "A" * 281,  # Text longer than 280 characters
        )
        # Assert
        assert result is False
        mock_client.create_tweet.assert_called_once_with(
            text="A" * 281, in_reply_to_tweet_id="2222222222"
        )
        mock_logger.error.assert_called_once_with(
            "Error replying to tweet: 405 Bad Request: Tweet text is too long"
        )

    def test_updaters_twitter_twitterupdater_add_reply_to_message_with_mixed_case_url(
        self, mocker
    ):
        # Arrange
        mock_search = mocker.patch.object(re, "search")
        mock_match = mocker.MagicMock()
        mock_match.group.return_value = "3333333333"
        mock_search.return_value = mock_match
        mock_response = mocker.MagicMock()
        mock_response.data = {"id": "3333333334", "text": "Test"}
        mock_client = mocker.MagicMock()
        mock_client.create_tweet.return_value = mock_response
        mocker.patch("updaters.twitter.logger")
        # Act
        updater = TwitterUpdater()
        updater.client = mock_client
        # URL with query parameters and mixed case
        result = updater.add_reply_to_message(
            "https://TWITTER.com/TestUser/status/3333333333?param=value", "Test reply"
        )
        # Assert
        assert result is True
        # Verify the regex pattern works with mixed case
        mock_search.assert_called_once_with(
            r"(?:twitter\.com|x\.com)/\w+/status/(\d+)",
            "https://TWITTER.com/TestUser/status/3333333333?param=value",
        )

    def test_updaters_twitter_twitterupdater_add_reply_to_message_network_timeout(
        self, mocker
    ):
        # Arrange
        mock_search = mocker.patch.object(re, "search")
        mock_match = mocker.MagicMock()
        mock_match.group.return_value = "4444444444"
        mock_search.return_value = mock_match
        mock_client = mocker.MagicMock()
        # Simulate a connection error that tweepy might wrap
        mock_client.create_tweet.side_effect = TweepyException(
            "Failed to send request: Connection timed out"
        )
        mock_logger = mocker.patch("updaters.twitter.logger")
        # Act
        updater = TwitterUpdater()
        updater.client = mock_client
        result = updater.add_reply_to_message(
            "https://twitter.com/testuser/status/4444444444", "Test reply"
        )
        # Assert
        assert result is False
        mock_logger.error.assert_called_once_with(
            "Error replying to tweet: Failed to send request: Connection timed out"
        )

    # # message_from_url
    def test_updaters_twitter_twitterupdater_message_from_url_functionality(
        self, mocker
    ):
        url = mocker.MagicMock()
        message_data = mocker.MagicMock()
        mocked_mention = mocker.patch(
            "updaters.twitter.Mention.objects.message_from_url",
            return_value=message_data,
        )
        updater = TwitterUpdater()
        returned = updater.message_from_url(url)
        assert returned == message_data
        mocked_mention.assert_called_once_with(url)
