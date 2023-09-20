from rest_framework import serializers
from .models import Physio, Patient, Service, Billing, Booking, Treatment
from accounts.serializers import UserSerializer


class PhysioSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Physio
        fields = ['id', 'user']


class PatientSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Patient
        fields = ['id', 'user']


class TreatmentSerializer(serializers.ModelSerializer):
    patient = PatientSerializer()
    physio = PhysioSerializer()

    class Meta:
        model = Treatment
        fields = ['id', 'treatment', 'treatment_date', 'patient', 'physio']


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    patient = PatientSerializer()
    physio = PhysioSerializer()
    service = ServiceSerializer()

    class Meta:
        model = Booking
        fields = ['id', 'resrv_date', 'resrv_time',
                  'status', 'patient', 'physio', 'service']


class BillingSerializer(serializers.ModelSerializer):
    patient = PatientSerializer()
    booking = BookingSerializer()

    class Meta:
        model = Billing
        fields = ['id', 'amount', 'date_billed', 'booking', 'patient']
