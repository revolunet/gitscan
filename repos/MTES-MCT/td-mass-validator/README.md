# Trackdéchets mass validator

**Validation de fichiers d'import en masse**

<img height="100px" style="margin-right: 20px" src="./src/static/img/trackdechets-logo.png" alt="logo"></img>
<img height="100px" src="./src/static/img/mtes.png" alt="logo"></img>

# Introduction

Trackdéchets permet aux entreprises d'importer en masse des établissements et utilisateurs grâce à un fichier xlsx
transmis à l'équipe de support.

Ce projet permet de valider les fichiers d'import avant envoi, afin d'économiser des demandes de corrections successives.


# Pré-requis

- Python > 3.11
- Redis
- pipenv

# Installation

Initialisation et activation d'un environnement

```
$ pipenv shell
```

Installation des dépendances

```
$ pipenv install -d
```

# Environnement

Se référer au fichier src/core/settings/env.dist



### Lancement de l'application

```
    $ manage.py runserver
```

Pour les tâches asynchrones, dans une autre fenêtre de terminal:

```
    $ DJANGO_SETTINGS_MODULE='core.settings.dev' celery -A core worker -l info
```
 
 
## Licence

Le code source du logiciel est publié sous licence [MIT](https://fr.wikipedia.org/wiki/Licence_MIT).
