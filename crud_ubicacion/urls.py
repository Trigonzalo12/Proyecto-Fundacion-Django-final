from unicodedata import name
from django.urls import path
from .views import *

urlpatterns = [
    path('Crud_ubicaciones', ubicaciones, name='crud_ubicacion'),
    path('nueva_ubicacion',nueva_ubicacion,name='nueva_ubicacion'),
    path('<str:id_ubicacion>',detalle_ubicacion,name='detalle_ubicacion'),
    path('<str:id_ubicacion>/editar', actualizar_ubicacion, name= 'actualizar_ubicacion'),
    path('<str:id_ubicacion>/eliminar', eliminar_ubicacion, name= 'eliminar_')
]