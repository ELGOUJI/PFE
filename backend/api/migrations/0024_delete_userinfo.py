# Generated by Django 4.0.4 on 2022-06-12 21:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_rename_userdata_userinfo'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Userinfo',
        ),
    ]
