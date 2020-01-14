from rest_framework import serializers
from . import models
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class PostSerializer(serializers.ModelSerializer):
	image = serializers.ImageField(use_url=True)
	created_at = serializers.ReadOnlyField()
	updated_at = serializers.ReadOnlyField()
	author = serializers.ReadOnlyField(source='author.username')

	class Meta:
		model = models.Post
		fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
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

 #################### Account 관련 시리얼 라이저 ############################
 # 회원가입 시리얼라이저
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "password", "email")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data["username"], None, validated_data["password"]
        )
        return user
 # 접속 유지중인지 확인할 시리얼라이저
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", " ")
 # 로그인 시리얼라이저
class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")