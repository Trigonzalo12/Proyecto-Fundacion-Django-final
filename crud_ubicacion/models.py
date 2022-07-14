from django.db import models

# Create your models here.



class Region(models.Model):
    idRegion = models.IntegerField(primary_key=True,verbose_name='ID')
    region = models.CharField(max_length=50,verbose_name='Region')
    class Meta:
        verbose_name = 'region'
        verbose_name_plural = 'regiones'
        ordering= ['idRegion']
        
    def __str__(self):
        return self.region

class Comuna(models.Model):
    idComuna = models.IntegerField(primary_key=True,verbose_name='ID')
    comuna = models.CharField(max_length=50,verbose_name='Comuna')
    region = models.ForeignKey(Region,on_delete=models.CASCADE)
    class Meta:
        verbose_name = 'comuna'
        verbose_name_plural = 'comunas'
        ordering= ['idComuna']
        
    def __str__(self):
        return self.comuna

class Ubicacion(models.Model):
    idUbicacion = models.CharField(primary_key= True,max_length=10,verbose_name='ID')
    nombreUbicacion= models.CharField(max_length=100,verbose_name='Nombre')
    direccion = models.CharField(max_length=50,verbose_name='Direccion')
    imagen = models.ImageField(verbose_name='Imagen',upload_to='imagenes_ubicacion',null=True,blank=True)
    comuna = models.ForeignKey(Comuna,on_delete=models.CASCADE)
    region = models.ForeignKey(Region,on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'ubicacion'
        verbose_name_plural = 'ubiaciones'
        ordering= ['idUbicacion']
    
    def __str__(self):
        return self.nombreUbicacion

