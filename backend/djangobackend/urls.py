from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.conf.urls.static import static
import post.views 

router = routers.DefaultRouter()
router.register('posts', post.views.PostViewset)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)