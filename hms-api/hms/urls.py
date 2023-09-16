from django.urls import path
from django.contrib import admin
from .views import PhysioView, PatientView, ServiceView, BookingView, BillingView


urlpatterns = [
    path('physio/', PhysioView.as_view()),
    path('patient/', PatientView.as_view()),
    path('service/', ServiceView.as_view()),
    path('booking/', BookingView.as_view()),
    path('billing/', BillingView.as_view())
]
