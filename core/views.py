from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required


# @login_required
def Index(request):

    return render(request, '00_materialDesign_base/base.html', locals())


# @login_required
def Redeilpf_html(request):
    context = {}

    load_template = request.path
    template = loader.get_template('00_materialDesign/' + load_template[11:])
    return HttpResponse(template.render(context, request))

