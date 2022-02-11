from django.contrib import admin
from django.urls import path
from .views import BooksViewSet


urlpatterns = [

    path('topbooks/', BooksViewSet.as_view({
        'get': 'topcontent',
    })),

    path('test/', BooksViewSet.as_view({
         'post': 'test_api'
         })),


    path('books/<str:pk>', BooksViewSet.as_view({
        'get': 'retrieve',
    })),


    # send user id in header please
    path('like/<str:pk>/<str:userid>', BooksViewSet.as_view({
        'get': 'like',
    })),

]
