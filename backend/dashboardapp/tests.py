from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from .models import User, SumParticipations

class UserViewTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user_data = {
            'firstName': 'John',
            'lastName': 'Doe',
            'participation': 20.0,
        }

    def test_create_user(self):
        url = '/api/user/'
        response = self.client.post(url, self.user_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(SumParticipations.objects.first().sumParticipations, 20.0)
        self.assertEqual(User.objects.first().percentage, 100.0)

    def test_update_user(self):
        url = '/api/user/'
        first_data = {
            'firstName': 'Jane',
            'lastName': 'Doe',
            'participation': 10.0,
        }
        response_post = self.client.post(url, first_data, format='json')
        updated_data = {
            'id': response_post.data['id'],
            'firstName': 'Jane',
            'lastName': 'Doe',
            'participation': 30.0,
        }
        id = str(response_post.data['id'])
        response = self.client.put(url + id, updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(User.objects.filter(id=id).first().firstName, updated_data['firstName'])
        self.assertEqual(User.objects.filter(id=id).first().lastName, updated_data['lastName'])
        self.assertEqual(User.objects.filter(id=id).first().participation, updated_data['participation'])
        self.assertEqual(User.objects.count(), 1)

    def test_delete_user(self):
        url = '/api/user/'
        first_data = {
            'firstName': 'Jane',
            'lastName': 'Doe',
            'participation': 10.0,
        }
        response_post = self.client.post(url, first_data, format='json')
        id = str(response_post.data['id'])
        response = self.client.delete(f'/api/user/{id}')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(User.objects.count(), 0)

    def test_get_user(self):
        url = '/api/user/'
        first_data = {
            'firstName': 'Jane',
            'lastName': 'Doe',
            'participation': 10.0,
        }
        response_post = self.client.post(url, first_data, format='json')
        id = str(response_post.data['id'])
        response = self.client.get('/api/user/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(User.objects.filter(id=id).first().firstName, first_data['firstName'])
        self.assertEqual(User.objects.filter(id=id).first().lastName, first_data['lastName'])
        self.assertEqual(User.objects.filter(id=id).first().participation, first_data['participation'])
        self.assertEqual(User.objects.count(), 1)


