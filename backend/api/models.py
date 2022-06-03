

from django.db import models

# Create your models here.

class Reservation(models.Model):
    idR = models.AutoField(primary_key=True)
    idU = models.IntegerField(default=0)
    idS = models.IntegerField(default=0)
    dateRES = models.DateField()
    Houre = models.CharField(max_length=100)
    
    def __str__(self):
        return self.dateRES
    
    
class Professeur(models.Model):
    idU = models.AutoField(primary_key=True)
    Nom = models.CharField(max_length=100)
    Prenom = models.CharField(max_length=100)
    Email = models.EmailField(max_length=254)
    Photo = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100)    
    
    def __str__(self):
        return self.Nom


class Salle(models.Model):
    idS  = models.AutoField(primary_key=True)
    Nom = models.CharField(max_length=100,default='null' )
    Type = models.CharField(max_length=100)  
    
    def __str__(self):
        return self.Nom
