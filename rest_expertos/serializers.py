from rest_framework import serializers
from expertos.models import Experto

class ExpertoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experto
        fields =['idExperto','nombre','descripcion']