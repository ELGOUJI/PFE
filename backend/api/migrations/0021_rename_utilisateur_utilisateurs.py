# Generated by Django 4.0.1 on 2022-06-10 23:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_rename_email_utilisateur_prenom_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Utilisateur',
            new_name='Utilisateurs',
        ),
    ]
