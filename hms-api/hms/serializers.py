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
    patient_id = serializers.PrimaryKeyRelatedField(
        queryset=Patient.objects.all())
    physio_id = serializers.PrimaryKeyRelatedField(
        queryset=Physio.objects.all())

    patient = PatientSerializer(read_only=True)
    physio = PhysioSerializer(read_only=True)

    class Meta:
        model = Treatment
        fields = ['id',  'treatment_date', 'patient_id',
                  'physio_id', 'patient', 'physio', 'treatment']

    def create(self, validated_data):
        patient_id = validated_data.pop('patient_id')
        physio_id = validated_data.pop('physio_id')

        physio = Physio.objects.create(
            patient_id=patient_id, physio_id=physio_id, **validated_data
        )

        return physio


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class BookingSerializer(serializers.ModelSerializer):
    patient_id = serializers.PrimaryKeyRelatedField(
        queryset=Patient.objects.all())
    physio_id = serializers.PrimaryKeyRelatedField(
        queryset=Physio.objects.all())
    service_id = serializers.PrimaryKeyRelatedField(
        queryset=Service.objects.all())

    patient = PatientSerializer(read_only=True)
    physio = PhysioSerializer(read_only=True)
    service = ServiceSerializer(read_only=True)

    class Meta:
        model = Booking
        fields = ['id', 'resrv_date', 'resrv_time',
                  'status', 'patient_id', 'physio_id', 'service_id', 'patient', 'physio', 'service']

    def create(self, validated_data):
        patient_id = validated_data.pop('patient_id')
        physio_id = validated_data.pop('physio_id')
        service_id = validated_data.pop('service_id')

        booking = Booking.objects.create(
            patient_id=patient_id, physio_id=physio_id, service_id=service_id, **validated_data
        )

        return booking


class BillingSerializer(serializers.ModelSerializer):
    patient_id = serializers.PrimaryKeyRelatedField(
        queryset=Patient.objects.all())
    booking_id = serializers.PrimaryKeyRelatedField(
        queryset=Booking.objects.all())

    patient = PatientSerializer(read_only=True)
    booking = BookingSerializer(read_only=True)

    class Meta:
        model = Billing
        fields = ['id', 'amount', 'date_billed',
                  'booking_id', 'patient_id', 'booking', 'patient']

    def create(self, validated_data):
        patient_id = validated_data.pop('patient_id')
        booking_id = validated_data.pop('booking_id')

        billing = Billing.objects.create(
            patient_id=patient_id, booking_id=booking_id, **validated_data)

        return billing
