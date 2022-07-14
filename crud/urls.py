from django.urls import path
from .views import *

urlpatterns = [
    path('', lista_empleados, name='Empleado'),
    path('<str:id_empleado>/delete', borrar_empleado, name= 'borrar-empleado'),
    path('<str:id_empleado>/edit', editar_empleado, name= 'editar-empleado'),
    path('new/',nuevo_producto,name='Nuevo'),
    path('<str:id_empleado>/', detalle_producto, name= 'Detalle'),

]
