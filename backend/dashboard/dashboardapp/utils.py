from .models import User
from django.db import models

def calculate_percentage(new_participation):
    participation = float(new_participation)
    total_participation = User.objects.aggregate(models.Sum('participation'))['participation__sum']
    if total_participation:
        total_participation += participation
        percentage = (participation / total_participation) * 100
    else:
        percentage = 100
    User.objects.update(percentage=models.F('participation') / total_participation * 100)
    return percentage