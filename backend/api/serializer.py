from os import rename
from django.shortcuts import redirect, render
from django.contrib.auth.password_validation import validate_password
from requests import request
from rest_framework import serializers
from api import models
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'idR',
            'idU',
            'Type',
            'dateRES',
            'Houre',
        )
        model = models.Reservation


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
                
        return token


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
        
    class Meta:
        model = User
        fields = ('username','password','first_name','last_name')
    
    def validate(self, attrs):
        return attrs
    
    def create(self, validated_data):
        
        user = User.objects.create(
            username=validated_data['username'],
            last_name=validated_data['last_name'],
            first_name=validated_data['first_name'],
        )
        
        user.set_password(validated_data['password'])
        user.save()

        return user