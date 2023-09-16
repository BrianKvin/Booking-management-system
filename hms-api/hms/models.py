from django.db import models
from datetime import datetime

# Create your models here.


class Physio(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(default='')
    date_joined = models.DateTimeField()

    def __repr__(self):
        return f'{self.name} {self.email} {self.date_joined}'


class Patient(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(default='')
    gender = models.CharField(max_length=50)
    age = models.IntegerField()

    def __repr__(self):
        return f'{self.name} {self.email} {self.gender} {self.age}'


class Service(models.Model):
    service = models.CharField(max_length=100)
    cost = models.DecimalField(max_digits=10, decimal_places=2)

    def __repr__(self):
        return f'{self.service} {self.cost}'


class Booking(models.Model):
    TIME_CHOICES = [('morning', 'Morning'),
                    ('afternoon', 'Afternoon'),
                    ('evening', 'Evening')]

    physio = models.ForeignKey(Physio, on_delete=models.CASCADE)
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    resrv_date = models.DateField()
    resrv_time = models.CharField(
        max_length=10, choices=TIME_CHOICES, default='morning')

    def __repr__(self):
        return f'{self.physio} {self.patient} {self.service} {self.resrv_date} {self.resrv_time}'


class Billing(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    resrv = models.ForeignKey(Booking, on_delete=models.CASCADE, default=None)
    date_billed = models.DateField()
    amount = models.IntegerField()

    def __repr__(self):
        return F'{self.patient} {self.resrv} {self.date_billed} {self.amount}'
