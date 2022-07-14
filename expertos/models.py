from django.db import models

# Create your models here.
class Experto(models.Model):
    idExperto = models.CharField(primary_key=True, max_length=10,verbose_name='ID')
    nombre = models.CharField(max_length=50,verbose_name='Nombre')
    descripcion = models.CharField(max_length=500,verbose_name='Descripcion')

    class Meta:
        verbose_name = 'experto'
        verbose_name_plural = 'expertos'
        ordering= ['idExperto']
    
    def __str__(self):
        return self.nombre