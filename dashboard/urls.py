from django.conf.urls import url
from django.urls import path, re_path, include

from dashboard.views import *

urlpatterns = [

    # path('framework/', Dashboard_home, name='index'),
    path('', Dashboard_home, name='index'),
    path('fluxo_caixa/geral', FluxoCaixaGeralView, name='fluxo_caixa_view'),
    path('projetos/geral', ProjetosGeralView, name='projetos_view'),

]