import email
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length=30, null=False, blank=False)
    username = models.CharField(max_length=30, null=False, blank=False, unique=True)
    email = models.EmailField(max_length=64, unique=True)
    phone = models.CharField(max_length=10,blank=True, null=True)


    def __str__(self):
        return self.username