from .base import *

#DATABASES
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'redeilpf_desenv',
        'HOST': '127.0.0.1',
        'PORT': '5432',
        'USER': 'redeilpf',
        'PASSWORD': 'redeilpf'
    }
}