# Generated by Django 4.0.2 on 2022-02-09 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0008_books_author_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='books',
            name='story',
            field=models.CharField(max_length=10000),
        ),
    ]
