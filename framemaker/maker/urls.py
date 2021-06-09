from django.views.generic.base import RedirectView
from django.urls import path,re_path
from . import views
urlpatterns = [
 path("upload/",views.image_upload_view,name="upload"),
 path("",views.indexView,name="home"),
]