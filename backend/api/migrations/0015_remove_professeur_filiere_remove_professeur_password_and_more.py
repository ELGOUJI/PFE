# Generated by Django 4.0.4 on 2022-06-03 01:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_professeur_role'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='professeur',
            name='Filiere',
        ),
        migrations.RemoveField(
            model_name='professeur',
            name='Password',
        ),
        migrations.RemoveField(
            model_name='professeur',
            name='role',
        ),
    ]
