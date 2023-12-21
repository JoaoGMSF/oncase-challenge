from rest_framework import serializers
from django.db import models
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def validate(self, data):
        if 'firstName' not in data:
            raise serializers.ValidationError("The 'firstName' field is required.")
        else:
            if not data['firstName'].isalpha():
                raise serializers.ValidationError("The 'firstName' field is not alpha.")
        if 'lastName' not in data:
            raise serializers.ValidationError("The 'lastName' field is required.")
        else:
            if not data['lastName'].isalpha():
                raise serializers.ValidationError("The 'lastName' field is not alpha.")
        if 'participation' not in data:
            raise serializers.ValidationError("The 'participation' field is required.")
        else:
            if not type(data['participation']) == float:
                raise serializers.ValidationError("The 'participation' field is not a number.")
            if data['participation'] <= 0:
                raise serializers.ValidationError("0 participation is not allowed.")
        return data
