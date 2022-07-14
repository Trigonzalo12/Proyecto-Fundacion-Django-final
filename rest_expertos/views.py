from urllib import request, response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.decorators import api_view

from expertos.models import Experto
from .serializers import ExpertoSerializer

# Create your views here.


@api_view(['GET','POST','DELETE'])
def lista_expertos(request):
    if request.method == 'GET':
        experto = Experto.objects.all()
        experto_serializer = ExpertoSerializer(experto,many=True)
        return Response(experto_serializer.data)

    elif request.method == 'POST':
        experto_data = JSONParser().parse(request)
        experto_serializer = ExpertoSerializer(data=experto_data)
        if experto_serializer.is_valid():
            experto_serializer.save()
            return Response(experto_serializer.data, status=status.HTTP_201_CREATED)
        return Response(experto_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        cantidad = Experto.objects.all().delete()
        return Response({'mensaje':'{} expertos han sido eliminados de la base de datos!'.format(cantidad[0])},status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','PUT','DELETE'])
def detalle_expertos(request,id_experto):
    try:
        experto = Experto.objects.get(idExperto=id_experto)
    except:
        return Response({'mensaje':'El producto no exite'},status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        experto_serializer = ExpertoSerializer(experto)
        return Response(experto_serializer.data)

    elif request.method == 'PUT':
        experto_data = JSONParser().parse(request)
        experto_serializer = ExpertoSerializer(experto,data=experto_data)
        if experto_serializer.is_valid():
            experto_serializer.save()
            return Response(experto_serializer.data,status=status.HTTP_202_ACCEPTED)
        return Response(experto_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        experto.delete()
        return Response({'mensaje':'El producto {} ha sido eliminado satisfactoriamente!'.format(product_id)},status=status.HTTP_204_NO_CONTENT)
