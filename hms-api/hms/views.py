from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import APIView
from .serializers import BillingSerializer, PhysioSerializer, PatientSerializer, BookingSerializer, ServiceSerializer
from .models import Billing, Patient, Physio, Booking, Service
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.http import JsonResponse

# Create your views here.


class PhysioView(APIView):
    def get(self, request):
        physio = Physio.objects.all()
        serializer = PhysioSerializer(physio, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# CREATE a new physio
    def post(self, request):
        serializer = PhysioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # GET a specific physio by ID
    def retrieve(self, request, pk):
        physio = Physio.objects.get(pk=pk)
        serializer = PhysioSerializer(physio)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # UPDATE a specific physio by ID
    def update(self, request, pk):
        physio = Physio.objects.get(pk=pk)
        serializer = PhysioSerializer(physio, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # DELETE a specific physio by ID
    def destroy(self, request, pk):
        physio = Physio.objects.get(pk=pk)
        physio.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PatientView(APIView):
    def get(self, request):
        patient = Patient.objects.all()
        serializer = PatientSerializer(patient, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # CREATE a new patient
    def post(self, request):
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # GET a specific patient by ID
    def retrieve(self, request, pk):
        patient = Patient.objects.get(pk=pk)
        serializer = PatientSerializer(patient)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # UPDATE a specific patient by ID
    def update(self, request, pk):
        patient = Patient.objects.get(pk=pk)
        serializer = PatientSerializer(patient, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # DELETE a specific patient by ID
    def destroy(self, request, pk):
        patient = Patient.objects.get(pk=pk)
        patient.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ServiceView(APIView):
    def get(self, request):
        service = Service.objects.all()
        serializer = ServiceSerializer(service, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class BillingView(APIView):
    def get(self, request):
        bill = Billing.objects.all()
        serializer = BillingSerializer(bill, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class BookingView(APIView):
    def get(self, request):
        booking = Booking.objects.all()
        serializer = BookingSerializer(booking, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
