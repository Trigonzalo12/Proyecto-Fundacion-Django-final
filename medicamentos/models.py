from django.db import models

# Create your models here.

class Marca(models.Model):
    idMarca = models.IntegerField(primary_key=True,verbose_name='ID')
    marca = models.CharField(max_length=100,verbose_name='Marca')

    class Meta:
        verbose_name = 'marca'
        verbose_name_plural = 'marcas'
        ordering= ['idMarca']
    
    def __str__(self):
        return self.marca

class Medicamento(models.Model):
    idMedicamento = models.CharField(primary_key=True, max_length=10,verbose_name='ID')
    descripcion = models.CharField(max_length=200,verbose_name='Descripción')
    precio = models.IntegerField(verbose_name='Precio Unitario')
    stock = models.IntegerField(verbose_name='Stock')
    imagen = models.ImageField(verbose_name='Imagen',upload_to='imagenes_medicamentos',null=True,blank=True)
    marca = models.ForeignKey(Marca,on_delete=models.CASCADE)

    class Meta:
        verbose_name= 'medicamento'
        verbose_name_plural= 'medicamentos'
        ordering=['idMedicamento']
    
    def __str__(self):
        return self.descripcion