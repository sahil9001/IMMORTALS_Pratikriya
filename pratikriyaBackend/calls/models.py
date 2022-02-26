from django.db import models
from users.models import User

# Create your models here.

class Audio (models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    audio_file = models.FileField(upload_to ='uploads/')
    created_at = models.DateTimeField(auto_now_add=True)
    caller = models.CharField(max_length=10,blank=True, null=True)
    prediction = models.CharField(max_length=30, null=False, blank=False) 

    def __str__(self):
        return self.prediction