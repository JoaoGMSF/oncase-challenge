from django.db import models

# Create your models here.
class User(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    participation = models.FloatField()
    percentage = models.FloatField()

    class Meta:
        db_table="user"

    def calculate_percentage(self, new_participation):
        participation = float(new_participation)
        total_participation = User.objects.aggregate(models.Sum('participation'))['participation__sum']
        print("total participation ",total_participation)
        if total_participation:
            total_participation += participation
            self.percentage = (participation / total_participation) * 100
            print(self)
        else:
            self.percentage = 100
            print(self)
        User.objects.update(percentage=models.F('participation') / total_participation * 100)
    
    # def save(self, new_participation=None ,*args, **kwargs):
    #     super().save(*args, **kwargs)

