# Generated by Django 4.0.2 on 2022-02-05 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('content', '0004_alter_books_date_published'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='books',
            name='id',
        ),
        migrations.AlterField(
            model_name='books',
            name='title',
            field=models.CharField(max_length=100, primary_key=True, serialize=False),
        ),
    ]
