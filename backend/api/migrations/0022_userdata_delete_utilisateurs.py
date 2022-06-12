# Generated by Django 4.0.1 on 2022-06-12 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_rename_utilisateur_utilisateurs'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserData',
            fields=[
                ('idUD', models.AutoField(primary_key=True, serialize=False)),
                ('nom', models.CharField(max_length=100)),
                ('prenom', models.CharField(max_length=100)),
                ('role', models.CharField(max_length=100)),
            ],
        ),
        migrations.DeleteModel(
            name='Utilisateurs',
        ),
    ]