from rest_framework import serializers
from . import models

class PostSerializer(serializers.ModelSerializer):
	image = serializers.ImageField(use_url=True)
	
	class Meta:
		model = models.Post
		fields = ('id', 'title', 'image', 'content')

class CatSerializer(serializers.ModelSerializer):
	image = serializers.ImageField(use_url=True)
	
	class Meta:
		model = models.Cat
		fields = ('id', 'name', 'image', 'desc')
