# Generated by Django 3.1.1 on 2020-10-12 05:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Profile', '0003_auto_20201009_1051'),
    ]

    operations = [
        migrations.AlterField(
            model_name='age',
            name='username',
            field=models.CharField(max_length=200, unique=True),
        ),
        migrations.AlterField(
            model_name='profile',
            name='parent_user',
            field=models.CharField(max_length=200, unique=True),
        ),
        migrations.AlterField(
            model_name='que',
            name='username',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]
