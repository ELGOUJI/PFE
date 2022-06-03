from os import rename
from django.shortcuts import redirect, render
from rest_framework import serializers
from api import models


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'idR',
            'idU',
            'idS',
            'dateRES',
            'Houre',
        )
        model = models.Reservation


class ProfesseurSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'idU',
            'Nom',
            'Prenom',
            'Email',
            'Photo',
        )
        model = models.Professeur


class SalleSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'idS',
            'Nom',
            'Type',
        )
        model = models.Salle


