
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

# @permission_classes([IsAuthenticated])
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer
    
# def register(request):
#     if request.method == 'POST':
#         serializer = RegisterSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             userinfo = models.Userinfo.objects.create(
#                 idUD=user.id,
#                 nom=request.data['nom'],
#                 prenom=request.data['prenom'],
#                 role=request.data['role'],
#             )
#             userinfo.save()
#             return "ok"
#     return "error"