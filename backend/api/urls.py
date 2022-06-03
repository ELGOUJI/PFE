
# apis/urls.py
from django.urls import path
from .views import DetailProfesseur, DetailSalle, ListProfesseur, ListReservation, DetailReservation, ListSalle

urlpatterns = [
    
    path('reservation', ListReservation.as_view()),
    path('reservation/<int:pk>/', DetailReservation.as_view()),
    path('professeur', ListProfesseur.as_view()),
    path('professeur/<int:pk>/', DetailProfesseur.as_view()),
    path('salle', ListSalle.as_view()),
    path('salle/<int:pk>/', DetailSalle.as_view()),

]



