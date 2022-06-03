# Generated by Django 4.0.4 on 2022-06-01 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_delete_prefesseur'),
    ]

    operations = [
        migrations.CreateModel(
            name='Salle',
            fields=[
                ('idS', models.AutoField(primary_key=True, serialize=False)),
                ('Type', models.CharField(max_length=100)),
            ],
        ),
        migrations.RemoveField(
            model_name='reservation',
            name='Salle',
        ),
        migrations.AddField(
            model_name='reservation',
            name='idS',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='reservation',
            name='idU',
            field=models.IntegerField(default=0),
        ),
    ]