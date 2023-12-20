from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer
from .utils import calculate_percentage

# Create your views here.
class UserView(APIView):
    def get(self, request):
        users_list = User.objects.all()
        serializer = UserSerializer(users_list, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        post_serializer = UserSerializer(data=request.data, partial=True)
        if post_serializer.is_valid(raise_exception=True):
            validated_data = post_serializer.validated_data
            validated_data['percentage'] = calculate_percentage(validated_data['participation'])
            user = post_serializer.create(validated_data)
            return Response(post_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
