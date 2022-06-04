
# apis/urls.py
from django.urls import path
from .views import DetailProfesseur, DetailSalle, ListProfesseur, ListReservation, DetailReservation, ListSalle
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from . import views

urlpatterns = [
    
    path('reservation', ListReservation.as_view()),
    path('reservation/<int:pk>/', DetailReservation.as_view()),
    path('professeur', ListProfesseur.as_view()),
    path('professeur/<int:pk>/', DetailProfesseur.as_view()),
    path('salle', ListSalle.as_view()),
    path('salle/<int:pk>/', DetailSalle.as_view()),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('reservation_filter/', views.get_reservs(), name='reservation_filter'),
    path('reservation_filter_type/', views.get_reservs_type(), name='reservation_filter_type'),

]



