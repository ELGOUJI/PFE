
# apis/urls.py
from django.urls import path
from .views import ListReservation, DetailReservation
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from . import views

urlpatterns = [
    
    path('reservation', ListReservation.as_view()),
    path('reservation/<int:pk>/', DetailReservation.as_view()),
    path('reservation/delete/<int:pk>/', views.delete_items),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('users/', views.get_all_users),
    path('users/delete/<slug:pk>/', views.delete_user),
    
]



