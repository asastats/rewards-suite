"""Testing module for :py:mod:`core.admin` module."""

import importlib
from unittest import mock

import django.contrib

from core import admin
from core.admin import SuperuserLogAdmin
from core.models import (
    Contribution,
    Contributor,
    Cycle,
    Handle,
    Issue,
    Profile,
    Reward,
    RewardType,
    SocialPlatform,
    SuperuserLog,
)
from trackers.models import Mention, MentionLog


class TestCoreAdmin:
    """Testing class for :py:mod:`core.admin` module."""

    # # REGISTER
    def test_core_admin_registers_model(self):
        with mock.patch("core.admin.admin.site.register") as mocked_register:
            importlib.reload(admin)
            calls = [
                mock.call(Profile),
                mock.call(Contributor),
                mock.call(SocialPlatform),
                mock.call(Handle),
                mock.call(Cycle),
                mock.call(RewardType),
                mock.call(Reward),
                mock.call(Issue),
                mock.call(Contribution),
                mock.call(Mention),
                mock.call(MentionLog),
            ]
            mocked_register.assert_has_calls(calls, any_order=True)
            assert mocked_register.call_count == 12


class TestCoreSuperuserLogAdmin:
    """Testing class for :class:`core.admin.SuperuserLogAdmin` class."""

    # # REGISTER
    def test_core_admin_superuserlogadmin_admin_register_decorator_used(self):
        registered_admin = django.contrib.admin.site._registry[SuperuserLog]
        assert registered_admin.__class__ == SuperuserLogAdmin
        assert registered_admin.model == SuperuserLog

    def test_core_admin_superuserlogadmin_defines_class_variables(self):
        assert isinstance(SuperuserLogAdmin.list_display, list)
        assert "profile" in SuperuserLogAdmin.list_display
        assert isinstance(SuperuserLogAdmin.list_filter, list)
        assert "action" in SuperuserLogAdmin.list_filter
        assert isinstance(SuperuserLogAdmin.search_fields, list)
        assert "action" in SuperuserLogAdmin.search_fields
        assert isinstance(SuperuserLogAdmin.readonly_fields, list)
        assert "profile" in SuperuserLogAdmin.readonly_fields

    # # has_add_permission
    def test_core_admin_superuserlogadmin_has_add_permission_returns_false(
        self, mocker
    ):
        assert (
            SuperuserLogAdmin(
                SuperuserLog, django.contrib.admin.AdminSite()
            ).has_add_permission(mocker.MagicMock())
            is False
        )

    # # has_change_permission
    def test_core_admin_superuserlogadmin_has_change_permission_returns_false(
        self, mocker
    ):
        assert (
            SuperuserLogAdmin(
                SuperuserLog, django.contrib.admin.AdminSite()
            ).has_change_permission(mocker.MagicMock())
            is False
        )
