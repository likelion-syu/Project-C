from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from . import models
from . import serializers

class PostViewset(viewsets.ModelViewSet):
    queryset = models.Post.objects.all().order_by('id')
    serializer_class = serializers.PostSerializer

class CommentViewset(viewsets.ModelViewSet):
    queryset = models.Comment.objects.all().order_by('id')
    serializer_class = serializers.CommentSerializer

class CatViewset(viewsets.ModelViewSet):
    queryset = models.Cat.objects.all().order_by('id')
    serializer_class = serializers.CatSerializer

class UserViewset(viewsets.ModelViewSet):
    queryset = models.AuthUser.objects.all().order_by('id')
    serializer_class = serializers.UserSerializer
