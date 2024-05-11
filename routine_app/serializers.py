# backend_app/serializers.py
from rest_framework import serializers

class FileSerializer(serializers.Serializer):
    facultyFile = serializers.FileField()
    courseFile = serializers.FileField()
    roomFile = serializers.FileField()
    sectionFile = serializers.FileField()

