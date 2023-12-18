from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer

# Create your views here.
class UserView(APIView):
    def get(self, request):
        users_list = User.objects.all()
        serializer = UserSerializer(users_list, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        payload = request.data
        # def checkInput():
        #     if("first_name" not in payload ):
        
        print(payload)

        # fazer a validação dos dados que me são enviados -> first name -> last name -> participation]

        ##Salvar no banco

        # user = User(
        #     first_name = payload.first_name,
        #     last_name = payload.last_name,
        #     participation = payload.participation
        # )

        # user.save()
        # return Response(status=status.HTTP_created)
        return Response(status=status.HTTP_201_CREATED)


    # def delete():
    #     pass