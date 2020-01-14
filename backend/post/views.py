from django.shortcuts import render
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response

from . import models
from . import serializers
from .serializers import (
    CreateUserSerializer,
    UserSerializer,
    LoginUserSerializer,
)

from knox.models import AuthToken

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

class RegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        if len(request.data["username"]) < 6 or len(request.data["password"]) < 4:
            body = {"message": "short field"}
            return Response(body, status=status.HTTP_400_BAD_REQUEST)
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        _, token = AuthToken.objects.create(user)
        return Response(
            {
                "user": UserSerializer(user, context=self.get_serializer_context()).data,
                "token": token,
            }
        )

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        _, token = AuthToken.objects.create(user)
        return Response(
            {
                "user": UserSerializer(user, context=self.get_serializer_context()).data,
                "token": token,
            }
        )

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user