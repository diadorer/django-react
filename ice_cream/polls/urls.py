from django.urls import path

from . import views


urlpatterns = [
    path('add/', views.add_choice),
    path('', views.get_choices),
]
