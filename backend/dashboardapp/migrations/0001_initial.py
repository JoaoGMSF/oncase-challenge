# Generated by Django 5.0 on 2023-12-20 01:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=100)),
                ('lastName', models.CharField(max_length=100)),
                ('participation', models.FloatField()),
                ('percentage', models.FloatField()),
            ],
            options={
                'db_table': 'user',
            },
        ),
    ]