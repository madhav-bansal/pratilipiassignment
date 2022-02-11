import csv
from genericpath import exists
import requests
from turtle import title, update
from urllib import response
from django.shortcuts import redirect, render
from rest_framework import viewsets
from rest_framework.response import Response
from content import serializers


from content.serializers import BooksSerializer
from contentservice.settings import USER_HOST


from .models import Books
# Create your views here.


class BooksViewSet(viewsets.ViewSet):

    def topcontent(self, request):  # show top content
        books = Books.objects.all().order_by('-likes')
        serializer = BooksSerializer(books, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):  # to reterieve a single product
        book = Books.objects.filter(id=pk)

        if(not book.exists()):
            return Response("Book does not exist")
        serializer = BooksSerializer(book, many=True)
        return Response(serializer.data)

    def like(self, request, pk=None, userid=None):
        # print(userid)
        hosturl = 'http://' + USER_HOST+':7000/likeevent/'+userid
        print("first")
        resp = requests.get(
            hosturl)
        print("second")
        if(resp.json() == "invalid user"):
            return Response("invalid user, cant like content")
        try:
            book = Books.objects.get(id=pk)
        except Books.DoesNotExist:
            book = None
        if(book is None):
            return Response("Book does not exist")
        book.likes += 1
        book.save()
        book = Books.objects.get(id=pk)
        serializer = BooksSerializer(book)
        return Response(serializer.data)

    # test api for intgestion of data
    def test_api(self, request):

        # parsing of csv file
        data = request.FILES['data']
        decodedfile = data.read().decode('utf-8').splitlines()
        reader = csv.DictReader(decodedfile)
        print("test api")
        for row in reader:
            # sending  post request to user service to create user and get userid
            postdata = {
                'email': row['author_email'],
                'password': row['author_password']
            }
            resp = requests.post(
                'http://127.0.0.1:7000/signup/', data=postdata)

            notvalidemail = "email and password does not follow validations"

            if(resp.json() != notvalidemail):
                authorid = resp.json()
                bookitem = Books(title=row['title'], story=row['story'],
                                 date_published=row['date_published'], likes=row['likes'], author_id=authorid)
                bookitem.save()

        return redirect("/topbooks")
