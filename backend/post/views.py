from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets, permissions, generics, status
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

from .permission import *
from . import models
from . import serializers
from .serializers import (
    CreateUserSerializer,
    UserSerializer,
    LoginUserSerializer,
    CommentSerializer
)

from knox.models import AuthToken

class PostViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    queryset = models.Post.objects.all().order_by("-created_at")
    serializer_class = serializers.PostSerializer
    
    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class CommentViewset(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]

    queryset = models.Comment.objects.all().order_by('-created_at')
    serializer_class = serializers.CommentSerializer

    @action(detail=True, methods=['get'])
    def post_comment (self, request, **kwargs):
        print( kwargs)
        post = get_object_or_404(models.Post, pk=kwargs['pk'])
        comments = post.comments.all()
        serializer = self.get_serializer(comments, many=True)
        return Response(serializer.data)

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