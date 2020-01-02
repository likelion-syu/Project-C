from django.db import models
from django.conf import settings

# Create your models here.
class Post(models.Model):
	# user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE)
	title = models.CharField(max_length=500)
	image = models.ImageField(upload_to="images")
	content = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Cat(models.Model):
	# user = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, on_delete=models.CASCADE)
	name = models.CharField(max_length=500)
	image = models.ImageField(upload_to="images")
	desc = models.TextField()
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
