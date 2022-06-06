
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from api import models
from .serializer import ReservationSerializer, MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.decorators import api_view, permission_classes

@permission_classes([IsAuthenticated])
class ListReservation(generics.ListCreateAPIView):
    queryset = models.Reservation.objects.all()
    serializer_class = ReservationSerializer

@permission_classes([IsAuthenticated])
class DetailReservation(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Reservation.objects.all()
    serializer_class = ReservationSerializer

@permission_classes([IsAuthenticated])
class Reservationview(APIView):
    def get(self, request):
        result = models.Reservation.objects.filter()
        return Response({"results":result})
        

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@permission_classes([IsAuthenticated])
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

# @permission_classes([IsAuthenticated])
# Get reservations not matching date and hour and type
# def get_reservs():
#     return models.Reservation.objects.filter(dateRES=request.GET.get('date'),Houre=request.GET.get('hour'),Type=request.GET.get('type')).exclude(id!='')
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)