# Generated by Django 3.1.1 on 2020-10-08 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Profile', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Age',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=200)),
                ('Age', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Que',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=200)),
                ('que1', models.CharField(max_length=200)),
                ('que2', models.CharField(max_length=200)),
                ('que3', models.CharField(max_length=200)),
            ],
        ),
    ]
