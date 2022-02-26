from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from drf_yasg.utils import swagger_auto_schema
#from utils.swagger import set_example
from .models import User
from .serializers import *
from . import responses


class LoginAPIView(APIView):
    serializer_class = LoginSerializer

    @swagger_auto_schema(
        operation_id='login_user',
        request_body=LoginSerializer,
        responses={
  #          '202': set_example(responses.login_202),
  #          '400': set_example(responses.login_400),
  #          '401': set_example(responses.login_401),
  #          '404': set_example(responses.login_404)
        },
    
    )

    def post(self, request):
        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            # Authenticating the user.
            found_username =  serializer.data['username']
            user = authenticate(
                username=serializer.data['username'],
                password=serializer.data['password']
            )    
            if user:
                # Assigning the user, a token if not already assigned and returning it.
                token, _ = Token.objects.get_or_create(user=user)
                return Response({'token': f"Token {token.key}"}, status.HTTP_202_ACCEPTED)
            else:
                # Trying to check if there exists a user with the username.
                try:
                    if User.objects.get(username=found_username ):
                        return Response({'detail': 'Credentials did not match'}, status.HTTP_401_UNAUTHORIZED)

                except User.DoesNotExist:
                    return Response({"detail": "User not found"}, status.HTTP_404_NOT_FOUND)
        else:
            # Returning errors in case the username is invalid or empty.
            data = serializer.errors
            return Response(data, status.HTTP_400_BAD_REQUEST)