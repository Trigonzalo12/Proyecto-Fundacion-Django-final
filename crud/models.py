from django.db import models

# Create your models here.
class Empleado(models.Model):
    nombre = models.CharField(max_length=100, verbose_name='Nombre')
    descripcion = models.CharField(max_length=100, verbose_name='Descripción')
    edad = models.IntegerField(verbose_name='Edad')
    imagen = models.ImageField(verbose_name='Imagen',upload_to='Empleados',null=True,blank=True)

    class Meta:
        verbose_name='empleado'
        verbose_name_plural='empleados'
        ordering=['nombre']

    def __str__(self):
        return self.descripcion
