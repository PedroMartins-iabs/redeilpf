from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required


@login_required
def Dashboard_home(request):

    # return render(request, '01_base/base.html', locals())
    return render(request, '02_dashboard/home.html', locals())


@login_required
def FluxoCaixaGeralView(request):

    return render(request, '03_fluxo_caixa/geral.html', locals())


@login_required
def ProjetosGeralView(request):

    return render(request, '04_projetos/geral.html', locals())
