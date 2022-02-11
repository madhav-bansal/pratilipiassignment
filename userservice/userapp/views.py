import re
from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from rest_framework.response import Response
# Create your views here.


class UserViewSet(viewsets.ViewSet):

    def credentialconvetion(self, email, password):
        emailregex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

        validemail = re.search(emailregex, email)
        if(not validemail):
            print("not valid email")
            return False
        elif len(password) < 10:
            print("len<10")
            return False
        elif not re.search('[0-9]', password):
            print("no diegit")
            return False
        elif not re.search('[a-z]', password):
            return False
        elif not re.search('[A-Z]', password):
            return False
        return True

    def create(self, email, password):
        users = User.objects.filter(email=email)
        # if user does not exist then create it.
        if(not users.exists()):
            user = User(email=email, password=password)
            print("creating user")
            user.save()
            return user.userid
        else:
            if(password != users[0].password):
                return -1
            return users[0].userid

    def likeevent(self, request, userid=None):
        print("i am here")
        if(User.objects.filter(userid=userid).exists()):
            return Response("valid user")
        return Response("invalid user")

    def userregister(self, request):
        email = request.POST['email']
        password = request.POST['password']
        print(email)
        print(password)
        # check if emil and password follow allowed convention
        valid = self.credentialconvetion(email, password)
        if(not valid):
            return Response("email and password does not follow validations")

        userid = self.create(email, password)
        if(userid == -1):
            return Response("user already exist and password is wrong")
        return Response(str(userid))
