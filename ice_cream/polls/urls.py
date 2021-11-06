from django.urls import path

from . import views


urlpatterns = [
    path('choices/add/', views.add_choice),
    path('choices/', views.get_choices),
]
