# Generated by Django 4.0.4 on 2022-06-01 23:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_salle_remove_reservation_salle_reservation_ids_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='salle',
            name='Nom',
            field=models.CharField(default='null', max_length=100),
        ),
    ]
