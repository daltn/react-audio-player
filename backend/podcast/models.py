from django.db import models

# Create your models here.


class Podcast(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    image = models.CharField(
        max_length=220, default="https://cdn-images-1.listennotes.com/podcasts/star-wars-7x7-star-wars-news-interviews-and-AIg3cZVKCsL.1400x1400.jpg")
    audio = models.CharField(max_length=220)
    completed = models.BooleanField(default=False)


def _str_(self):
    return self.title
