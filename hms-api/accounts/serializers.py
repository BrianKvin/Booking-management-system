from rest_framework import serializers
from rest_framework.exceptions import AuthenticationFailed
from .models import User


class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=68, min_length=6, write_only=True)

    class Meta:
        model = User
        fields = ['id', 'email', 'phone_number', 'first_name',
                  'last_name', 'is_doctor', 'password', 'is_patient']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'email', 'phone_number', 'first_name',
                  'last_name', 'is_doctor', 'is_patient']

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
