from django.shortcuts import render,redirect,reverse
from .models import Ubicacion
from .forms import UbiacionForm

# Create your views here.

def ubicaciones(request):
    if 'usuario' not in request.session:
        return redirect("registro")
    else :
        context = {'ubicacion': Ubicacion.objects.all()}
        return render (request,"crud_ubicacion/Crud_ubicaciones.html",context)

def nueva_ubicacion (request):
    if 'usuario' not in request.session:
        return redirect("registro")
    else :
        if request.method == 'POST':
            form = UbiacionForm(request.POST,request.FILES)
            if form.is_valid():
                idUbicacion = form.cleaned_data.get("idUbicacion")
                nombreUbicacion = form.cleaned_data.get("nombreUbicacion")
                direccion = form.cleaned_data.get("direccion")
                imagen = form.cleaned_data.get("imagen")
                comuna = form.cleaned_data.get("comuna")
                region = form.cleaned_data.get("region")
                obj = Ubicacion.objects.create(
                    idUbicacion = idUbicacion,
                    nombreUbicacion = nombreUbicacion,
                    direccion = direccion,
                    imagen = imagen,
                    comuna = comuna,
                    region = region
                )
                obj.save()
                return redirect(reverse('crud_ubicacion') + "?OK")
            else:
                return redirect(reverse('crud_ubicacion') + "?FAIL")
        else:
            form = UbiacionForm
        return render(request,'crud_ubicacion/Nuevo.html',{'form':form})

def detalle_ubicacion(request,id_ubicacion):
    if 'usuario' not in request.session:
        return redirect("registro")
    else :
        try:
            ubicacion = Ubicacion.objects.get(idUbicacion=id_ubicacion)
            if ubicacion:
                context = {'ubicacion':ubicacion}
                return render(request,'crud_ubicacion/Detalle.html',context)
        except:
            return redirect(reverse('crud_ubicacion') + "?FAIL")

def actualizar_ubicacion(request,id_ubicacion):
    if 'usuario' not in request.session:
        return redirect("registro")
    else :
        try:
            ubicacion = Ubicacion.objects.get(idUbicacion=id_ubicacion)
            if ubicacion:
                form = UbiacionForm(instance = ubicacion)
            else:
                return redirect(reverse('crud_ubicacion') + "?FAIL")
        
            if request.method == 'POST':
                form = UbiacionForm(request.POST,request.FILES,instance=ubicacion)
                if form.is_valid():
                    form.save()
                    return redirect(reverse('crud_ubicacion') + "?OK")
                else:
                    return redirect(reverse('actualizar_medicamento') + id_ubicacion)
            return render(request,'crud_ubicacion/Actualizar.html',{'form':form})   
        except:
            return redirect(reverse('crud_ubicacion') + "?FAIL")

def eliminar_ubicacion(request,id_ubicacion):
    if 'usuario' not in request.session:
        return redirect("registro")
    else :
        try:
            ubicacion = Ubicacion.objects.get(idMedicamento=id_ubicacion)
            ubicacion.delete()
            return redirect(to = 'crud_ubicacion')
        except:
            return redirect(reverse('crud_ubicacion') + "?FAIL")