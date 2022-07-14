from django.urls import path
from .views import *


urlpatterns = [
    path('', root ),
    path('home', home, name='home'),
    path('info/', info, name='info'),  
    path('nosotros/', nosotros, name='nosotros'),  
    path('ubicacion/', ubicacion, name='ubicacion'),  
    path('contacto/', contacto, name='contacto'),
    path('regContacto/',regContacto, name='regContacto'),
    path('registro/', registro, name='registro'),
    path('register', register, name='register'),
    path('login', login, name='login'),
    path('logout', logout, name='logout'),
    path('success', success, name='success'),
    path('medicamentos',medicamentos,name='medicamentos'), 

]

