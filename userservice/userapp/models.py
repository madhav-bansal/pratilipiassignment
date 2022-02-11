from django.db import models

# Create your models here.


class User(models.Model):
    userid = models.AutoField(primary_key=True)
    email = models.CharField(max_length=1000)
    password = models.CharField(max_length=1000)

    def __str__(self):
        return self.email
