from maker.models import Image

from rest_framework import serializers

class ImageSerializer(serializers.Serializer):
    image = serializers.ImageField(use_url=True)
    class Meta:
        model = Image
        fields= "__all__"

