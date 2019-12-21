from rest_framework import serializers
from . import models

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Post
        fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):

	# user = serializers.ReadOnlyField(source='author.username')
	image = serializers.ImageField(use_url=True)

	class Meta:
		model = Image
		fields = ('id', 'user', 'image', 'desc')