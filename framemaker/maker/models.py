from django.db import models

class Image(models.Model):
    title = models.CharField(max_length=200,null=True,blank=True)
    image = models.ImageField(upload_to='users/%Y/%m/%d/', blank=True)

    def __str__(self):
        return self.title