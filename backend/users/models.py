from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    email = models.EmailField(
        null=True,
        blank=True,
        max_length=255,
    )
    first_name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    last_name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
    )
    timestamp_created = models.DateTimeField(
        null=True,
        blank=True,
        auto_now_add=True,
    )
    last_updated = models.DateTimeField(
        null=True,
        blank=True,
        auto_now=True,
    )

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
