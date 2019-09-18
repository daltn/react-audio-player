from django.contrib import admin
from .models import Podcast

# Register your models here.


class PodcastAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'image', 'audio', 'completed')


admin.site.register(Podcast, PodcastAdmin)
