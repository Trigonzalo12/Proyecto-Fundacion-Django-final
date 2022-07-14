from django.shortcuts import render,redirect,reverse
from .models import Medicamento
from .forms import MedicamentoForm
# Create your views here.

def medicamento(request):
    if 'usuario' not in request.session:
        return redirect("registro")
    else :
        context = {'medicacion': Medicamento.objects.all()}
        return render (request,"medicamentos/medicamento.html",context)


def nuevo_medicamento(request):
    if 'usuario' not in request.session:
        return redirect("registro")
    else :
        if request.method == 'POST':
            form = MedicamentoForm(request.POST,request.FILES)
            if form.is_valid():
                idMedicamento = form.cleaned_data.get("idMedicamento")
                descripcion = form.cleaned_data.get("descripcion")
                precio = form.cleaned_data.get("precio")
                stock = form.cleaned_data.get("stock")
                imagen = form.cleaned_data.get("imagen")
                marca = form.cleaned_data.get("marca")
                obj = Medicamento.objects.create(
                    idMedicamento = idMedicamento,
                    descripcion = descripcion,
                    precio = precio,
                    stock = stock,
                    imagen = imagen,
                    marca = marca
                )
                obj.save()
                return redirect(reverse('nuevo_medicamento') + "?OK")
            else:
                return redirect(reverse('nuevo_medicamento') + "?FAIL")
        else:
            form = MedicamentoForm
        return render(request,'medicamentos/Nuevo.html',{'form':form})

def detalle_medicamento(request,id_medicamento):
    if 'usuario' not in request.session:
        return redirect("registro")
    else :
        try:
            medicacion = Medicamento.objects.get(idMedicamento=id_medicamento)
            if medicacion:
                context = {'medicacion':medicacion}
                return render(request,'medicamentos/Detalle.html',context)
        except:
            return redirect(reverse('detalle_medicamento') + "?FAIL")

def actualizar_medicamento(request,id_medicamento):
    if 'usuario' not in request.session:
        return redirect("registro")
    else :
        try:
            medicamento = Medicamento.objects.get(idMedicamento=id_medicamento)
            if medicamento:
                form = MedicamentoForm(instance = medicamento)
            else:
                return redirect(reverse('medicamento') + "?FAIL")
        
            if request.method == 'POST':
                form = MedicamentoForm(request.POST,request.FILES,instance=medicamento)
                if form.is_valid():
                    form.save()
                    return redirect(reverse('medicamento') + "?OK")
                else:
                    return redirect(reverse('actualizar_medicamento') + id_medicamento)
            return render(request,'medicamentos/Actualizar.html',{'form':form})   
        except:
            return redirect(reverse('medicamento') + "?FAIL")

def eliminar_medicamento(request,id_medicamento):
    if 'usuario' not in request.session:
        return redirect("registro")
    else :
        try:
            medicamento = Medicamento.objects.get(idMedicamento=id_medicamento)
            medicamento.delete()
            return redirect(to = 'medicamento')
        except:
            return redirect(reverse('medicamento') + "?FAIL")