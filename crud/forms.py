from django import forms
from django.forms import ModelForm
from .models import Empleado

class EmpleadoForm(ModelForm):

    class Meta:
        model = Empleado
        fields = [
            'nombre',
            'descripcion',
            'edad',
            'imagen',
        ]
        labels = {
            'nombre': 'Nombre',
            'descripcion': 'Descripción',
            'edad': 'Edad',
            'imagen': 'Imagen',
        }
        widgets = {
            'nombre': forms.TextInput(attrs={'class':'form-control'}),
            'descripcion': forms.TextInput(attrs={'class':'form-control'}),
            'edad': forms.TextInput(attrs={'class':'form-control','type':'number'}),
            'imagen': forms.FileInput(attrs={'class':'form-control'})

        }