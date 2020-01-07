from django.contrib import admin
from django.urls import path, include

import post.views 

from rest_framework import routers

from django.conf import settings
from django.conf.urls.static import static


router = routers.DefaultRouter()
router.register('posts', post.views.PostViewset)
router.register('cats', post.views.CatViewset)
router.register('users',post.views.UserViewset)
# router.register('images', post.views.ImageViewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)