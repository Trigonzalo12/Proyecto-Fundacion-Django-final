# Generated by Django 4.0.6 on 2022-07-14 07:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_contacto_comentario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contacto',
            name='selector',
            field=models.CharField(max_length=20),
        ),
    ]
