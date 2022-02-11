from pyexpat import model
from turtle import title
from django.db import models
# Create your models here.


class Books(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    story = models.CharField(max_length=10000)
    date_published = models.DateField(auto_now_add=True)
    likes = models.IntegerField(default=0)
    author_id = models.IntegerField(default=0)

    def __str__(self):
        return self.title
