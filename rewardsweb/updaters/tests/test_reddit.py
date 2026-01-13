"""Testing module for :py:mod:`updaters.reddit` module."""

from praw.exceptions import ClientException, RedditAPIException

from updaters.base import BaseUpdater
from updaters.reddit import RedditUpdater


class TestUpdatersRedditRedditUpdater:
    """Testing class for :py:mod:`updaters.reddit.RedditUpdater` class."""

    def test_updaters_reddit_redditupdater_is_subclass_of_baseupdater(self):
        assert issubclass(RedditUpdater, BaseUpdater)

    # __init__
    def test_updaters_reddit_redditupdater_init_functionality(self, mocker):
        reddit_config = {
            "client_id": "test_client_id",
            "client_secret": "test_client_secret",
            "user_agent": "test_user_agent",
            "username": "test_username",
            "password": "test_password",
            "poll_interval": 15,
        }
        mock_init = mocker.patch("updaters.reddit.BaseUpdater.__init__")
        mock_config = mocker.patch(
            "updaters.reddit.reddit_config", return_value=reddit_config
        )
        mock_client = mocker.patch("updaters.reddit.Reddit")
        instance = RedditUpdater(1, 2, foo="bar")
        mock_init.assert_called_once_with(1, 2, foo="bar")
        mock_config.assert_called_once_with()
        mock_client.assert_called_once_with(
            client_id="test_client_id",
            client_secret="test_client_secret",
            user_agent="test_user_agent",
            username="test_username",
            password="test_password",
        )
        assert instance.client == mock_client.return_value

    # # _ids_from_url
    def test_updaters_reddit_redditupdater_ids_from_url_submission_permalink(self):
        updater = RedditUpdater()
        url = "https://reddit.com/r/learnpython/comments/abc123/my_first_script/"
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id == "abc123"
        assert comment_id is None

    def test_updaters_reddit_redditupdater_ids_from_url_comment_permalink(self):
        updater = RedditUpdater()
        url = "https://reddit.com/r/learnpython/comments/abc123/my_first_script/def456/"
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id == "abc123"
        assert comment_id == "def456"

    def test_updaters_reddit_redditupdater_ids_from_url_comment_with_trailing_slash(
        self,
    ):
        updater = RedditUpdater()
        url = "https://reddit.com/r/learnpython/comments/abc123/my_first_script/def456/"
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id == "abc123"
        assert comment_id == "def456"

    def test_updaters_reddit_redditupdater_ids_from_url_comment_with_long_title(
        self,
    ):
        updater = RedditUpdater()
        url = (
            "https://reddit.com/r/learnpython/comments/abc123/"
            "my_first_python_script_hello_world/def456/"
        )
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id == "abc123"
        assert comment_id == "def456"

    def test_updaters_reddit_redditupdater_ids_from_url_comment_with_special_chars(
        self,
    ):
        updater = RedditUpdater()
        url = (
            "https://reddit.com/r/learnpython/comments/abc123/"
            "my_first_python_script_hello_world_2024/def456/"
        )
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id == "abc123"
        assert comment_id == "def456"

    def test_updaters_reddit_redditupdater_ids_from_url_short_comment_id_not_recognized(
        self,
    ):
        updater = RedditUpdater()
        # If comment_id is too short (less than 4 chars), it's likely part of the title
        url = "https://reddit.com/r/learnpython/comments/abc123/my_first_script/xyz/"
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id == "abc123"
        assert comment_id is None  # xyz is too short, treated as part of title

    def test_updaters_reddit_redditupdater_ids_from_url_with_http_not_https(self):
        updater = RedditUpdater()
        url = "http://reddit.com/r/learnpython/comments/abc123/my_first_script/def456/"
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id == "abc123"
        assert comment_id == "def456"

    def test_updaters_reddit_redditupdater_ids_from_url_invalid_url_no_comments(self):
        updater = RedditUpdater()
        url = "https://reddit.com/r/learnpython/"
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id is None
        assert comment_id is None

    def test_updaters_reddit_redditupdater_ids_from_url_invalid_url_wrong_domain(self):
        updater = RedditUpdater()
        url = "https://example.com/r/learnpython/comments/abc123/my_first_script/"
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id is None
        assert comment_id is None

    def test_updaters_reddit_redditupdater_ids_from_url_malformed_url(self):
        updater = RedditUpdater()
        url = "not-a-url"
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id is None
        assert comment_id is None

    def test_updaters_reddit_redditupdater_ids_from_url_empty_url(self):
        updater = RedditUpdater()
        url = ""
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id is None
        assert comment_id is None

    def test_updaters_reddit_redditupdater_ids_from_url_with_numeric_submission_id(
        self, mocker
    ):
        updater = RedditUpdater()
        url = "https://reddit.com/r/learnpython/comments/123456/my_first_script/"
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id == "123456"
        assert comment_id is None

    def test_updaters_reddit_redditupdater_ids_from_url_with_alphanumeric_ids(self):
        updater = RedditUpdater()
        url = "https://reddit.com/r/learnpython/comments/abc123def/foobar/xyz789ghi/"
        submission_id, comment_id = updater._ids_from_url(url)
        assert submission_id == "abc123def"
        assert comment_id == "xyz789ghi"

    # # add_reaction_to_message
    def test_updaters_reddit_redditupdater_add_reaction_to_message_functionality(
        self,
    ):
        assert (
            RedditUpdater().add_reaction_to_message("some_url", "some_reaction") is True
        )

    # # add_reply_to_message
    def test_updaters_reddit_redditupdater_add_reply_to_message_success_submission(
        self, mocker
    ):
        # Mock the helper method
        mock_ids = mocker.patch.object(RedditUpdater, "_ids_from_url")
        mock_ids.return_value = ("abc123", None)
        # Mock the Reddit client and submission
        mock_submission = mocker.MagicMock()
        mock_submission.reply.return_value = mocker.MagicMock()
        mock_client = mocker.MagicMock()
        mock_client.submission.return_value = mock_submission
        # Mock the logger
        mock_logger = mocker.patch("updaters.reddit.logger")
        # Create updater with mocked reddit client
        updater = RedditUpdater()
        updater.client = mock_client
        # Call the method
        result = updater.add_reply_to_message(
            "https://reddit.com/r/learnpython/comments/abc123/my_first_script/",
            "Great script!",
        )
        # Assertions
        assert result is True
        mock_ids.assert_called_once_with(
            "https://reddit.com/r/learnpython/comments/abc123/my_first_script/"
        )
        mock_client.submission.assert_called_once_with(id="abc123")
        mock_submission.reply.assert_called_once_with("Great script!")
        mock_logger.info.assert_called_once_with(
            "Successfully replied to submission abc123"
        )

    def test_updaters_reddit_redditupdater_add_reply_to_message_success_comment(
        self, mocker
    ):
        # Mock the helper method
        mock_ids = mocker.patch.object(RedditUpdater, "_ids_from_url")
        mock_ids.return_value = ("abc123", "def456")
        # Mock the Reddit client and comment
        mock_comment = mocker.MagicMock()
        mock_comment.reply.return_value = mocker.MagicMock()
        mock_client = mocker.MagicMock()
        mock_client.comment.return_value = mock_comment
        # Mock the logger
        mock_logger = mocker.patch("updaters.reddit.logger")
        # Create updater with mocked reddit client
        updater = RedditUpdater()
        updater.client = mock_client
        # Call the method
        result = updater.add_reply_to_message(
            "https://reddit.com/r/learnpython/comments/abc123/my_first_script/def456/",
            "I agree!",
        )
        # Assertions
        assert result is True
        mock_ids.assert_called_once_with(
            "https://reddit.com/r/learnpython/comments/abc123/my_first_script/def456/"
        )
        mock_client.comment.assert_called_once_with(id="def456")
        mock_comment.reply.assert_called_once_with("I agree!")
        mock_logger.info.assert_called_once_with(
            "Successfully replied to comment def456"
        )

    def test_updaters_reddit_redditupdater_add_reply_to_message_invalid_url(
        self, mocker
    ):
        # Mock the helper method to return None
        mock_ids = mocker.patch.object(RedditUpdater, "_ids_from_url")
        mock_ids.return_value = (None, None)
        # Mock the logger
        mock_logger = mocker.patch("updaters.reddit.logger")
        # Create updater
        updater = RedditUpdater()
        updater.client = mocker.MagicMock()  # Mock reddit won't be used
        # Call the method
        result = updater.add_reply_to_message("https://invalid-url.com", "Test reply")
        # Assertions
        assert result is False
        mock_logger.error.assert_called_once_with(
            "Invalid Reddit URL: https://invalid-url.com"
        )
        updater.client.comment.assert_not_called()
        updater.client.submission.assert_not_called()

    def test_updaters_reddit_redditupdater_add_reply_to_message_reddit_api_exception(
        self, mocker
    ):
        """Test reply when Reddit API throws an exception."""
        # Mock the helper method
        mock_ids = mocker.patch.object(RedditUpdater, "_ids_from_url")
        mock_ids.return_value = ("abc123", None)
        # Create exception using string format (simpler)
        exception = RedditAPIException(
            "RATELIMIT", "You are doing that too much. Try again in 5 minutes.", ""
        )
        # Mock the Reddit client to raise an exception
        mock_client = mocker.MagicMock()
        mock_client.submission.side_effect = exception
        # Mock the logger
        mock_logger = mocker.patch("updaters.reddit.logger")
        # Create updater with mocked reddit client
        updater = RedditUpdater()
        updater.client = mock_client
        # Call the method
        result = updater.add_reply_to_message(
            "https://reddit.com/r/test/comments/abc123/post/", "Test reply"
        )
        # Assertions
        assert result is False
        mock_logger.error.assert_called_once()
        # Check that error message contains "Reddit API error"
        assert "Reddit API error" in mock_logger.error.call_args[0][0]

    def test_updaters_reddit_redditupdater_add_reply_to_message_client_exception(
        self, mocker
    ):
        # Mock the helper method
        mock_ids = mocker.patch.object(RedditUpdater, "_ids_from_url")
        mock_ids.return_value = ("abc123", "def456")
        # Mock the Reddit client to raise an exception
        mock_client = mocker.MagicMock()
        mock_client.comment.side_effect = ClientException("Comment not found")
        # Mock the logger
        mock_logger = mocker.patch("updaters.reddit.logger")
        # Create updater with mocked reddit client
        updater = RedditUpdater()
        updater.client = mock_client
        # Call the method
        result = updater.add_reply_to_message(
            "https://reddit.com/r/test/comments/abc123/post/def456/", "Test reply"
        )
        # Assertions
        assert result is False
        mock_logger.error.assert_called_once_with(
            "PRAW client error: Comment not found"
        )

    def test_updaters_reddit_redditupdater_add_reply_to_message_general_exception(
        self, mocker
    ):
        # Mock the helper method
        mock_ids = mocker.patch.object(RedditUpdater, "_ids_from_url")
        mock_ids.return_value = ("abc123", None)
        # Mock the Reddit client to raise a general exception
        mock_client = mocker.MagicMock()
        mock_client.submission.side_effect = Exception("Unexpected error")
        # Mock the logger
        mock_logger = mocker.patch("updaters.reddit.logger")
        # Create updater with mocked reddit client
        updater = RedditUpdater()
        updater.client = mock_client
        # Call the method
        result = updater.add_reply_to_message(
            "https://reddit.com/r/test/comments/abc123/post/", "Test reply"
        )
        # Assertions
        assert result is False
        mock_logger.error.assert_called_once_with("Unexpected error: Unexpected error")

    def test_updaters_reddit_redditupdater_add_reply_to_message_success_no_logging(
        self, mocker
    ):
        # Mock the helper method
        mock_ids = mocker.patch.object(RedditUpdater, "_ids_from_url")
        mock_ids.return_value = ("abc123", None)
        # Mock the Reddit client and submission
        mock_submission = mocker.MagicMock()
        mock_submission.reply.return_value = mocker.MagicMock()
        mock_client = mocker.MagicMock()
        mock_client.submission.return_value = mock_submission
        # Create updater with mocked reddit client
        updater = RedditUpdater()
        updater.client = mock_client
        # Call the method (logger mocking not needed for this test)
        result = updater.add_reply_to_message(
            "https://reddit.com/r/learnpython/comments/abc123/my_first_script/",
            "Great script!",
        )
        # Assertions
        assert result is True
        mock_ids.assert_called_once_with(
            "https://reddit.com/r/learnpython/comments/abc123/my_first_script/"
        )
        mock_client.submission.assert_called_once_with(id="abc123")
        mock_submission.reply.assert_called_once_with("Great script!")

    def test_updaters_reddit_redditupdater_add_reply_to_message_exception_ids_from_url(
        self, mocker
    ):
        mock_ids = mocker.patch.object(RedditUpdater, "_ids_from_url")
        mock_ids.return_value = (None, None)
        # Mock the logger
        mock_logger = mocker.patch("updaters.reddit.logger")
        # Create updater
        updater = RedditUpdater()
        updater.client = mocker.MagicMock()
        # Call the method
        result = updater.add_reply_to_message(
            "https://reddit.com/r/test/comments/abc123/post/", "Test reply"
        )
        # Assertions
        assert result is False
        mock_logger.error.assert_called_once_with(
            "Invalid Reddit URL: https://reddit.com/r/test/comments/abc123/post/"
        )

    # # message_from_url
    def test_updaters_reddit_redditupdater_message_from_url_for_no_message_found(
        self, mocker
    ):
        url = mocker.MagicMock()
        mocked_mention = mocker.patch(
            "updaters.reddit.Mention.objects.message_from_url", return_value=None
        )
        updater = RedditUpdater()
        returned = updater.message_from_url(url)
        assert returned is None
        mocked_mention.assert_called_once_with(url)

    def test_updaters_reddit_redditupdater_message_from_url_functionality(self, mocker):
        url = mocker.MagicMock()
        message_data = mocker.MagicMock()
        mocked_mention = mocker.patch(
            "updaters.reddit.Mention.objects.message_from_url",
            return_value=message_data,
        )
        updater = RedditUpdater()
        returned = updater.message_from_url(url)
        assert returned == message_data
        mocked_mention.assert_called_once_with(url)
