# Generated by Django 2.2.5 on 2019-09-18 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('podcast', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='podcast',
            name='image',
            field=models.CharField(default='https://cdn-images-1.listennotes.com/podcasts/star-wars-7x7-star-wars-news-interviews-and-AIg3cZVKCsL.1400x1400.jpg', max_length=220),
        ),
        migrations.AlterField(
            model_name='podcast',
            name='audio',
            field=models.CharField(max_length=220),
        ),
    ]