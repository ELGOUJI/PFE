# Generated by Django 4.0.4 on 2022-05-31 15:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_reservation_houre'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='Salle',
            field=models.CharField(max_length=100),
        ),
    ]