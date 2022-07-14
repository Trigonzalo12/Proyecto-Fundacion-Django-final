from django import forms
from django.forms import ModelForm
from .models import Ubicacion

class UbiacionForm(ModelForm):

    class Meta :
        model =Ubicacion
        fields = [
            'idUbicacion',
            'nombreUbicacion',
            'direccion',
            'imagen',
            'comuna',
            'region'
        ]
        labels = {
            'idUbicacion' : 'Código Ubicación',
            'nombreUbicacion' : 'Nombre Ubicación' ,
            'direccion' : 'Dirección' ,
            'imagen' : 'Imagen',
            'comuna' : 'Comuna',
            'region' : 'Region'
        }
        widgets = {
            'idUbicacion': forms.TextInput(attrs={'class':'form-control'}),
            'nombreUbicacion': forms.TextInput(attrs={'class':'form-control'}),
            'direccion': forms.TextInput(attrs={'class':'form-control'}),
            'imagen': forms.FileInput(attrs={'class':'form-control'}),
            'comuna': forms.Select(attrs={'class':'form-control'}),
            'region' : forms.Select(attrs={'class':'form-control'}) 
        }
