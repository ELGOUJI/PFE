# Generated by Django 4.0.4 on 2022-06-01 02:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_rename_user_prefesseur'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Prefesseur',
        ),
    ]
