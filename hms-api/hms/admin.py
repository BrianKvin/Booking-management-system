from django.contrib import admin
from .models import Physio, Patient, Service, Booking, Billing

# Register your models here.
admin.site.register(Physio)
admin.site.register(Patient)
admin.site.register(Service)
admin.site.register(Booking)
admin.site.register(Billing)
