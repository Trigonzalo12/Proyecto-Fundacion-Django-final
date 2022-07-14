from django.urls import path
from rest_expertos.views import detalle_expertos, lista_expertos

urlpatterns = [
    path('expertos',lista_expertos,name='lista_expertos'),
    path('expertos/<str:id_experto>', detalle_expertos ,name='detalle_expertos')
]