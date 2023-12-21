from django.db import models

# Create your models here.
class User(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    participation = models.FloatField()
    percentage = models.FloatField()

    class Meta:
        db_table="user"

class SumParticipations(models.Model):
    sumParticipations = models.FloatField()

    class Meta:
        db_table="sum_participations"

