# Generated by Django 4.0.6 on 2022-07-14 02:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_contacto'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contacto',
            name='comentario',
            field=models.TextField(null=True),
        ),
    ]
