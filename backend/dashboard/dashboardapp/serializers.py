from rest_framework import serializers
from django.db import models
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def validate(self, data):
        if 'firstName' not in data:
            raise serializers.ValidationError("O campo 'firstName' é obrigatório.")
        else:
            if not data['firstName'].isalpha():
                raise serializers.ValidationError("O campo 'firstName' não é alpha.")
        if 'lastName' not in data:
            raise serializers.ValidationError("O campo 'lastName' é obrigatório.")
        else:
            if not data['lastName'].isalpha():
                raise serializers.ValidationError("O campo 'lastName' não é alpha.")
        if 'participation' not in data:
            raise serializers.ValidationError("O campo 'participation' é obrigatório.")
        else:
            if not type(data['participation'])==float:
                raise serializers.ValidationError("O campo 'participation' não é float.")
        return data
    