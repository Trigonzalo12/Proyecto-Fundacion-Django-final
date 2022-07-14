from django.shortcuts import render

# Create your views here.
from asyncio.windows_events import NULL
from django.shortcuts import render,redirect,reverse
from django.http import HttpResponse
from crud.forms import EmpleadoForm
from .models import Empleado



def lista_empleados(request):
    if 'usuario' not in request.session:
        return redirect("registro")
    else:
        context =   { 'empleados': Empleado.objects.all()}
        return render(request, 'crud/Empleado.html',context)


def borrar_empleado(request,id_empleado):
    if 'usuario' not in request.session:
        return redirect("registro")
    else :
        try:
            empleado = Empleado.objects.get(id=id_empleado)
            empleado.delete()
            return redirect(to = 'Empleado')
        except:
            return redirect(reverse('Empleado') + "?FAIL")


def editar_empleado(request,id_empleado):
    if 'usuario' not in request.session:
        return redirect("registro")
    else:
        try:
            empleado = Empleado.objects.get(id=id_empleado)
            if empleado:
                form = EmpleadoForm(instance = empleado)
            else:
                return redirect(reverse('Empleado') + "?FAIL")
        
            if request.method == 'POST':
                form = EmpleadoForm(request.POST,request.FILES,instance=empleado)
                if form.is_valid():
                    form.save()
                    return redirect(reverse('Empleado') + "?OK")
                else:
                    return redirect(reverse('product-update') + id_empleado)
            return render(request,'crud/Actualizar.html',{'form':form})   
        except:
            return redirect(reverse('Empleado') + "?FAIL")


def nuevo_producto(request):
    if 'usuario' not in request.session:
        return redirect("registro")
    else:
        if request.method == 'POST':
            form = EmpleadoForm(request.POST,request.FILES)
            if form.is_valid():
                nombre = form.cleaned_data.get("nombre")
                descripcion = form.cleaned_data.get("descripcion")
                edad = form.cleaned_data.get("edad")
                imagen = form.cleaned_data.get("imagen")
                obj = Empleado.objects.create(
                    nombre = nombre,
                    descripcion = descripcion,
                    edad = edad,
                    imagen = imagen
                )
                obj.save()
                return redirect(reverse('Empleado') + "?OK")
            else:
                return redirect(reverse('Empleado') + "?FAIL")
        else:
            form = EmpleadoForm
        return render(request,'crud/Nuevo.html',{'form':form})
    

def detalle_producto(request,id_empleado):
    if 'usuario' not in request.session:
        return redirect("registro")
    else:
        try:
            empleado = Empleado.objects.get(id=id_empleado)
            if empleado:
                context = {'empleado':empleado}
                return render(request,'crud/Detalle.html',context)
        except:
            return redirect(reverse('Empleado') + "?FAIL")