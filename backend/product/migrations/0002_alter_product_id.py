# Generated by Django 5.1.3 on 2024-11-24 02:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
