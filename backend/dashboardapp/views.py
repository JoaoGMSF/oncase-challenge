from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User, SumParticipations
from .serializers import UserSerializer
from .utils import ParticipationManager

# Create your views here.
class UserView(APIView):
    def get(self, request):
        users_list = User.objects.all()
        serializer = UserSerializer(users_list, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        post_serializer = UserSerializer(data=request.data, partial=True)
        sum_part_exist = SumParticipations.objects.all().count()

        if not sum_part_exist:
            part = SumParticipations(sumParticipations=0)
            part.save()
        
        if post_serializer.is_valid(raise_exception=True):
            validated_data = post_serializer.validated_data
            validated_data['percentage'] = ParticipationManager.calculate_percentage(validated_data['participation'])
            post_serializer.save()            
            return Response(post_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        user = User.objects.get(pk=pk)
        put_serializer = UserSerializer(user, data=request.data)

        if put_serializer.is_valid(raise_exception=True):
            validated_data = put_serializer.validated_data
            validated_data['percentage'] = ParticipationManager.update_percentage(validated_data['participation'], pk)
            put_serializer.save()
            return Response(put_serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(put_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    def delete(self,request ,pk):
        try:
            user = User.objects.get(id=pk)
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        ParticipationManager.delete_percentage(pk=pk)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    