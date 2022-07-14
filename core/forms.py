
from django import forms
from django.forms import ModelForm  
from .models import Contacto
from django.forms import ValidationError
import re

class ContactoFrom(ModelForm):

    #selector = forms.IntegerField(widget=forms.Select(attrs={"class":"col-11 form-control"}))
    nombre = forms.CharField(min_length=3 , max_length=50)
    apellido = forms.CharField(min_length=3 , max_length=50)
    numero = forms.CharField()
    rut = forms.CharField()
    direccion = forms.CharField()
    correo = forms.EmailField()
    comentario = forms.CharField(required=False)
    condiciones = forms.BooleanField()



    class Meta:
        model = Contacto
        fields = ['selector','nombre','apellido','numero','rut','direccion','correo','comentario','condiciones'
                ]
        
        labels = {'selector':'Selector',
                'nombre':'Nombre:',
                'apellido':'Apellido:',
                'numero':'Numero:',
                'rut':'Rut:',
                'direccion':'Direccion:',
                'correo':'Correo Electronico:',
                'comentario':'Comentario:',
                'condiciones':'Terminos y Condiciones:'
                }
        widgets = { 'nombre': forms.TextInput(attrs={"class":"form-control col-10 ","placeholder":"Juan"}), 
                    'apellido':forms.TextInput(attrs={"class":"col-sm-11 form-control", "placeholder":"Perez"}),
                    'numero':forms.TextInput(attrs={"class":"col-sm-11 form-control", "placeholder":"55667788"}),
                    'rut':forms.TextInput(attrs={"class":"col-sm-11 form-control", "placeholder":"12345678-9"}),
                    'direccion':forms.TextInput(attrs={"class":"col-sm-11 form-control", "placeholder":"Calle #123"}),
                    'correo':forms.EmailInput(attrs={"class":"col-sm-11 form-control", "placeholder":"nombre@gmail.com"}),
                    'comentario':forms.Textarea(attrs={"class":"col-sm-11 form-control","placeholder":"Comentario"}),
                    'condiciones':forms.CheckboxInput(attrs={"class":"form-check-input"})

                }

