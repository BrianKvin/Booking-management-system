from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth.base_user import BaseUserManager
from django.core.validators import RegexValidator
from django.utils import timezone

phone_validator = RegexValidator(
    r"^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$", "The phone number provided is invalid")


class UserManager(BaseUserManager):
    """
    Custom user model manager where email is the unique identifiers
    for authentication instead of usernames.
    """

    def create_user(self, email, password, phone_number, **extra_fields):
        """
        Create and save a user with the given email and password.
        """
        if not email:
            raise ValueError('Email must be set')
        if not phone_number:
            raise ValueError('Phone number must be set')

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_patient(self, email, password, phone_number, **extra_fields):
        """
        Create and save a user with is_patient status
        """
        extra_fields.setdefault('is_patient', True)

        user = self.create_user(email, password, phone_number, **extra_fields)
        return user

    def create_doctor(self, email, password, phone_number, **extra_fields):
        """
        Create and save a user with is_doctor, is_staff, is_admin status
        """
        extra_fields.setdefault('is_doctor', True)
        extra_fields.setdefault('is_admin', True)
        extra_fields.setdefault('is_staff', True)

        user = self.create_user(email, password, phone_number, **extra_fields)
        return user

    def create_superuser(self, email, password, phone_number, **extra_fields):
        """
        Create and save a user with is_superuser status
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        user = self.create_user(email, password, phone_number, **extra_fields)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=255, blank=True, null=True)
    last_name = models.CharField(max_length=255, blank=True, null=True)
    phone_number = models.CharField(
        max_length=16, validators=[phone_validator])
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_doctor = models.BooleanField(default=False)
    is_patient = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)
    update_at = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['phone_number']

    objects = UserManager()

    def __str__(self) -> str:
        return self.email
