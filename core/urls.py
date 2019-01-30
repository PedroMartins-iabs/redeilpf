from django.conf.urls import url
from django.urls import path, re_path, include

from core.views import *

urlpatterns = [

    path('', Index, name='index'),
    re_path(r'^.*\.html', Redeilpf_html, name='redeilpf'),


]