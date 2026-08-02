"""Module containing core app's constants."""

import os
from datetime import datetime, timezone

from dotenv import load_dotenv

load_dotenv()

ADDRESS_LEN = 58

MISSING_ENVIRONMENT_VARIABLE_ERROR = "Environment variable is not set"

HANDLE_EXCEPTIONS = ("RR", "Di")

CONTRIBUTIONS_TAIL_SIZE = 5

REWARDS_COLLECTION = (
    ("[F] Feature Request", 10000, 20000, 40000),
    ("[B] Bug Report", 10000, 20000, 40000),
    ("[AT] Admin Task", 10000, 20000, 40000),
    ("[CT] Content Task", 10000, 20000, 40000),
    ("[IC] Issue Creation", 10000, 20000, 40000),
    ("[TWR] Twitter Post", 10000, 20000, 40000),
    ("[D] Development", 25000, 50000, 100000),
    ("[ER] Ecosystem Research", 25000, 50000, 75000),
)

DISCORD_EMOJIS = {
    "noted": os.getenv("DISCORD_EMOJI_NOTED", "thumbsup"),
    "addressed": os.getenv("DISCORD_EMOJI_ADDRESSED", "ballot_box_with_check"),
    "wontfix": os.getenv("DISCORD_EMOJI_WONTFIX", "no_entry_sign"),
    "duplicate": os.getenv("DISCORD_EMOJI_DUPLICATE", "heavy_multiplication_x"),
}

ISSUE_CREATION_LABEL_CHOICES = [
    ("feature", "Feature"),
    ("bug", "Bug"),
    ("task", "Task"),
    ("research", "Research"),
    ("mobile", "Mobile"),
    ("work in progress", "Work in progress"),
]

ISSUE_LABEL_CHOICES = ISSUE_CREATION_LABEL_CHOICES + [
    ("wontfix", "Wontfix"),
    ("addressed", "Addressed"),
    ("archived", "Archived"),
]

ISSUE_PRIORITY_CHOICES = [
    ("low priority", "Low Priority"),
    ("medium priority", "Medium Priority"),
    ("high priority", "High Priority"),
    ("blocker", "Blocker"),
]

GITHUB_LABELS = (
    "blocker",
    "high priority",
    "medium priority",
    "low priority",
    "feature",
    "bug",
    "task",
    "research",
    "mobile",
    "addressed",
    "archived",
    "wontfix",
)

GITHUB_ISSUES_START_DATE = datetime.fromtimestamp(
    int(os.getenv("GITHUB_ISSUES_START_DATE", 1649980800)), tz=timezone.utc
)
excluded_contributors = os.getenv("EXCLUDED_CONTRIBUTORS", "")
EXCLUDED_CONTRIBUTORS = [
    contributor.strip()
    for contributor in excluded_contributors.split(",")
    if excluded_contributors.split(",")[0]
]
CONTRIBUTOR_TEXT_EXCEPTIONS = ["damo"]

TRANPARENCY_REPORT_REQUIRED_FIELDS = {
    "monthly": ["month", "year"],
    "quarterly": ["quarter", "year"],
    "yearly": ["year"],
    "custom": ["start_date", "end_date"],
}

ALGORAND_WALLETS = [
    {"id": "pera", "name": "Pera Wallet"},
    {"id": "defly", "name": "Defly Wallet"},
    {"id": "lute", "name": "Lute Wallet"},
]

WALLET_CONNECT_NONCE_PREFIX = "Login to Rewards Suite website: "

WALLET_CONNECT_NETWORK_OPTIONS = ["testnet", "mainnet"]

REWARDS_API_BASE_URL = os.getenv("REWARDS_API_BASE_URL", "http://127.0.0.1:8000/api")
