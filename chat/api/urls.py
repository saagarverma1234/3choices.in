from django.urls import path, re_path,include
from rest_framework import routers    

from .views import (
    ChatListView,
    ChatDetailView,
    ChatCreateView,
    ChatUpdateView,
    ChatDeleteView,
    ContactView,
)
from . import views
router = routers.DefaultRouter()  
                     
router.register('', views.ContactView, 'todo')  


router2 = routers.DefaultRouter()  
                     
router2.register('', views.UserView, 'tod')   

app_name = 'chat'

urlpatterns = [
    path('contact/', include(router.urls)),
    path('user/', include(router2.urls)),
    path('create/', ChatCreateView.as_view()),
    path('',  ChatListView.as_view()),
    path('<pk>', ChatDetailView.as_view()),
    path('<pk>/update/', ChatUpdateView.as_view()),
    path('<pk>/delete/', ChatDeleteView.as_view())
]


               
               
                          

  
