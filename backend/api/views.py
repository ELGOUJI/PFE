
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from api import models
from api.models import Reservation
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

# @permission_classes([IsAuthenticated])
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer
    

@api_view(['DELETE'])
def delete_items(request, pk):
    item = Reservation.objects.get(idR=pk)
    item.delete()
    return Response("Deleted")

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_users(request):
    users = User.objects.all()
    serializer = RegisterSerializer(users, many=True)
    return Response({"results":serializer.data})

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_user(request, pk):
    user = User.objects.get(username=pk)
    user.delete()
    return Response("Deleted")