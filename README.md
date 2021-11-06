# Пример проекта с Django и React

* игнорируем все ненужные файлы:

```bash
echo '*.pyc
*.sqlite3' > .gitignore
```

* установим poetry:

```bash
pip install poetry
```

* и создадим виртуальное окружение с его помощью:

```bash
mkdir ice-cream
cd ice-cream
poetry init -n  # чтобы poetry не задавал лишних вопросов
```

* развернём django:

```bash
poetry add django
poetry shell 
cd ..
django-admin startproject ice_cream ice_cream/

tree
```

* запустим наш django-бэкенд:

```
python manage.py runserver
```
