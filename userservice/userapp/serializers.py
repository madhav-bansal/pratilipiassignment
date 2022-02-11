from dataclasses import fields
from rest_framework import serializers
from .models import User


class BooksSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
