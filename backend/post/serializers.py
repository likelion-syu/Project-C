from rest_framework import serializers
from . import models

class PostSerializer(serializers.ModelSerializer):
	image = serializers.ImageField(use_url=True)
	created_at = serializers.ReadOnlyField()
	updated_at = serializers.ReadOnlyField()
	author_name = serializers.ReadOnlyField(source='author.username')
	author = serializers.ReadOnlyField(source='author.username')

	class Meta:
		model = models.Post
		fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
	# image = serializers.ImageField(use_url=True)
	created_at = serializers.ReadOnlyField()
	updated_at = serializers.ReadOnlyField()
	author = serializers.ReadOnlyField(source='author.username')
	post = serializers.ReadOnlyField(source='post.id')

	class Meta:
		model = models.Comment
		fields = '__all__'

class CatSerializer(serializers.ModelSerializer):
	image = serializers.ImageField(use_url=True)
	created_at = serializers.ReadOnlyField()
	updated_at = serializers.ReadOnlyField()

	class Meta:
		model = models.Cat
		fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
	# image = serializers.ImageField(use_url=True)

	class Meta:
		model = models.AuthUser
		fields = '__all__'
