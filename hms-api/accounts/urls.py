from django.urls import path
from .views import RegisterUserView, UserView, AllUsersView
from rest_framework_simplejwt.views import (
    TokenObtainPairView, TokenRefreshView,)


urlpatterns = [
    path('users/', AllUsersView.as_view()),
    path('users/<int:pk>/', UserView.as_view()),
    path('register/', RegisterUserView.as_view()),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
