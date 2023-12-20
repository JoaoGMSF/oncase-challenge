from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["firstName", "lastName", "participation"]

    def validate(self, data):
        if 'firstName' not in data:
            raise serializers.ValidationError("O campo 'firstName' é obrigatório.")
        
        if 'lastName' not in data:
            raise serializers.ValidationError("O campo 'lastName' é obrigatório.")

        if 'participation' not in data:
            raise serializers.ValidationError("O campo 'participation' é obrigatório.")

        return data