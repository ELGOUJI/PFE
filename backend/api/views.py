
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from api import models
from .serializer import ReservationSerializer, ProfesseurSerializer, SalleSerializer
from .models import Reservation, Salle


class ListReservation(generics.ListCreateAPIView):
    queryset = models.Reservation.objects.all()
    serializer_class = ReservationSerializer


class DetailReservation(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Reservation.objects.all()
    serializer_class = ReservationSerializer


class Reservationview(APIView):
    def get(self, request):
        result = Reservation.objects.filter()
        return Response({"results":result})
        

class ListProfesseur(generics.ListCreateAPIView):
    queryset = models.Professeur.objects.all()
    serializer_class = ProfesseurSerializer


class DetailProfesseur(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Professeur.objects.all()
    serializer_class = ProfesseurSerializer


class ListSalle(generics.ListCreateAPIView):
    queryset = models.Salle.objects.all()
    serializer_class = SalleSerializer


class DetailSalle(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Salle.objects.all()
    serializer_class = SalleSerializer
