

from django.db import models

# Create your models here.

class Reservation(models.Model):
    idR = models.AutoField(primary_key=True)
    idU = models.IntegerField(default=0)
    Type = models.CharField(max_length=100, default='Null')
    dateRES = models.DateField()
    Houre = models.CharField(max_length=100)
    titre = models.CharField(max_length=100,default='Null')
    
    def __str__(self):
        return self.dateRES