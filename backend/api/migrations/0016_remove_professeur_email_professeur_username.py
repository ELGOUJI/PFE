# Generated by Django 4.0.4 on 2022-06-04 10:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_remove_professeur_filiere_remove_professeur_password_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='professeur',
            name='Email',
        ),
        migrations.AddField(
            model_name='professeur',
            name='Username',
            field=models.CharField(default='null', max_length=254),
        ),
    ]