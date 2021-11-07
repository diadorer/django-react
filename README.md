# Пример проекта с Django и React

## Почему бы не начать с разворачивания фронтенда?

Первым делом установим NodeJS (если ещё не сделали этого раньше) — установщики можно найти тут — https://nodejs.org/en/download/.
Проверим, что установка прошла успешно:

```bash
node --version
```

Далее, развернём React-приложение:

```bash
npx create-react-app react-demo

tree -I node_modules  

npm start
```

Доустановим нужные зависимости:

```bash
npm add react-router-dom@6
```

## Теперь перейдём к бэкенду

* установим poetry:

```bash
pip install poetry
```

* и создадим виртуальное окружение с его помощью:

```bash
mkdir django-demo
cd django-demo
poetry init -n  # "-n" чтобы poetry не задавал лишних вопросов
```


* развернём django:

```bash
poetry add django
poetry shell 
cd ..
django-admin startproject django_demo django-demo/

tree
```

* запустим наш django-бэкенд:

```
python manage.py runserver
```

* игнорируем все ненужные файлы:

```bash
echo '*.pyc
*.sqlite3' > .gitignore
```
