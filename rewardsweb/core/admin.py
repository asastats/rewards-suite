"""Module containing website's admin UI setup."""

from django.contrib import admin

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

admin.site.register(Profile)
admin.site.register(Contributor)
admin.site.register(SocialPlatform)
admin.site.register(Handle)
admin.site.register(Cycle)
admin.site.register(RewardType)
admin.site.register(Reward)
admin.site.register(Issue)
admin.site.register(Contribution)
admin.site.register(Mention)
admin.site.register(MentionLog)


@admin.register(SuperuserLog)
class SuperuserLogAdmin(admin.ModelAdmin):
    """Customized superusers' log table in Django admin UI."""

    list_display = ["profile", "action", "created_at"]
    list_filter = ["action", "created_at", "profile"]
    search_fields = ["profile_user__username", "action", "details"]
    readonly_fields = ["profile", "action", "details", "created_at"]

    def has_add_permission(self, request):
        """Prevent adding log entries"""
        return False

    def has_change_permission(self, request, obj=None):
        """Prevent modifications to log entries"""
        return False
