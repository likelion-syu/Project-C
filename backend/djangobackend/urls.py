from django.contrib import admin
from django.urls import path, include

import post.views 

from rest_framework import routers

from django.conf import settings
from django.conf.urls.static import static

from knox import views as knox_views


router = routers.DefaultRouter()
router.register('posts', post.views.PostViewset)
router.register('cats', post.views.CatViewset)
router.register('auth/users',post.views.UserViewset)
router.register('comments',post.views.CommentViewset, basename= 'comments')
# router.register('images', post.views.ImageViewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/auth/regist/', post.views.RegistrationAPI.as_view()),
    path('api/auth/login/', post.views.LoginAPI.as_view()),
    path('api/auth/user/<int:pk>', post.views.UserAPI.as_view()),
    path('api/auth/', include('knox.urls')),
    path('api/auth/logout/', knox_views.LogoutView.as_view(), name='knox_logout'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)