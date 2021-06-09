import mimetypes
import os

import cv2
import numpy
import PIL
from django.conf import settings
from django.http import (HttpResponse, HttpResponseNotFound,
                         HttpResponseRedirect)
from django.shortcuts import render
from django.http import FileResponse
from .forms import ImageForm
from django.views.decorators.csrf import csrf_exempt
from .models import Image


@csrf_exempt 

def image_upload_view(request):
    """Process images uploaded by users"""
    if request.method == 'POST':
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid(): 
            img_obj=form.save()
            img=PIL.Image.open(img_obj.image)
            im1 = PIL.Image.open(os.path.join(settings.BASE_DIR,'maker/data/frame1.png'))
            im1=im1.resize(img.size)
            mask_im = PIL.Image.open(os.path.join(settings.BASE_DIR,'maker/data/frame.png')).resize(img.size).convert('L')
            back_im = im1.copy()
            back_im.paste(img, mask_im)
            path=os.path.join(settings.MEDIA_ROOT,img_obj.image.name)
            back_im = back_im.save(path,quality=95)
            response = HttpResponse(img_obj.image.name)
            #response = FileResponse(adress)
            '''response = HttpResponse(adress, content_type=mime_type)
            response['Content-Disposition'] = "attachment; filename=%s" % img_obj.image.name'''
            return response
            
            #return render(request, 'maker/index.html', {'form': form, 'img_obj': img_obj})
    else:
        form = ImageForm()
    return render(request, 'maker/index.html', {'form': form})
  



def indexView(request, *args, **kwargs):
    return render(request, "home/index.html")