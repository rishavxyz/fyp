# backend_app/urls.py
from django.urls import path
from .views import RoutineGenerationAPIView

urlpatterns = [
    path('generate_routine/', RoutineGenerationAPIView.as_view(), name='generate_routine'),
]
