# todos/admin.py
from django.contrib import admin

from .models import Professeur, Reservation, Salle

admin.site.register(Reservation)
admin.site.register(Salle)
admin.site.register(Professeur)
