from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from . import models
from . import serializers

class PostViewset(viewsets.ModelViewSet):
    queryset = models.Post.objects.all().order_by('id')
    serializer_class = serializers.PostSerializer

class CatViewset(viewsets.ModelViewSet):
    queryset = models.Cat.objects.all().order_by('id')
    serializer_class = serializers.CatSerializer

# class ImageViewset(viewsets.ModelViewSet):
# 	queryset = models.Image.objects.all().order_by('id')
# 	serializer_class = serializers.ImageSerializer
