# Generated by Django 4.0.5 on 2022-07-11 22:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('expertos', '0004_alter_experto_options_remove_experto_idexperto_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='experto',
            options={'ordering': ['idExperto'], 'verbose_name': 'experto', 'verbose_name_plural': 'expertos'},
        ),
        migrations.RemoveField(
            model_name='experto',
            name='id',
        ),
        migrations.AddField(
            model_name='experto',
            name='idExperto',
            field=models.IntegerField(default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
    ]