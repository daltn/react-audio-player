from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PodcastSerializer
from .models import Podcast


class PodcastView(viewsets.ModelViewSet):
    serializer_class = PodcastSerializer
    queryset = Podcast.objects.all()
