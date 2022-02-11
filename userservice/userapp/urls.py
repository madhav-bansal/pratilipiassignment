from django.contrib import admin
from django.urls import path
from .views import UserViewSet

urlpatterns = [
    path('signup/', UserViewSet.as_view({
        'post': 'userregister',
    })),

    path('likeevent/<str:userid>', UserViewSet.as_view({
        'get': 'likeevent',
    })),


]
