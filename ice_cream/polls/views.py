import json

from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt


from .models import Choice


@csrf_exempt
def add_choice(request):
    body = json.loads(request.body.decode())

    choice = Choice.objects.create(
        text=body['text'],
    )

    choice_data = model_to_dict(choice, fields=['id', 'text'])

    return JsonResponse(choice_data)


def get_choices(request):
    choices = Choice.objects.values('id', 'text')

    return JsonResponse({
        'items': list(choices),
    })
