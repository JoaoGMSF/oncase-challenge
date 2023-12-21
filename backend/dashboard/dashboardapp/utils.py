from .models import User, SumParticipations
from django.db import models

class ParticipationManager:
    @staticmethod
    def calculate_percentage(new_participation):
        participation = float(new_participation)
        total_participation = SumParticipations.objects.order_by('id').first().sumParticipations
        if total_participation:
            total_participation += participation
            percentage = (participation / total_participation) * 100
            SumParticipations.objects.filter(id=1).update(sumParticipations=total_participation)
        else:
            percentage = 100
            total_participation = participation
            SumParticipations.objects.filter(id=1).update(sumParticipations=total_participation)
        User.objects.update(percentage=(models.F('participation') / total_participation * 100))
        return percentage

    @staticmethod
    def update_percentage(new_participation, pk):
        participation = float(new_participation)
        total_participation = (SumParticipations.objects.order_by('id').first().sumParticipations) - (User.objects.filter(id=pk).first().participation)
        if total_participation:
            total_participation += participation
            percentage = (participation / total_participation) * 100
            SumParticipations.objects.filter(id=1).update(sumParticipations=total_participation)
        else:
            percentage = 100
            total_participation = participation
            SumParticipations.objects.filter(id=1).update(sumParticipations=total_participation)
        User.objects.exclude(id=pk).update(percentage=(models.F('participation') / total_participation * 100))
        return percentage

    @staticmethod
    def delete_percentage(pk):
        total_participation = (SumParticipations.objects.order_by('id').first().sumParticipations) - (User.objects.filter(id=pk).first().participation)
        SumParticipations.objects.filter(id=1).update(sumParticipations=total_participation)
        User.objects.exclude(id=pk).update(percentage=(models.F('participation') / total_participation * 100))
