from unicodedata import name
from django.urls import path
from .views import *

urlpatterns = [
    path('medicamento', medicamento,name='medicamento'),
    path('nuevo_medicamento',nuevo_medicamento,name='nuevo_medicamento'),
    path('<str:id_medicamento>',detalle_medicamento,name='detalle_medicamento'),
    path('<str:id_medicamento>/editar', actualizar_medicamento, name= 'actualizar_medicamento'),
    path('<str:id_medicamento>/eliminar', eliminar_medicamento, name= 'eliminar_medicamento')
]