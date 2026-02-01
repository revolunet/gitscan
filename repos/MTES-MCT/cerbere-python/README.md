# Cerbere-python

> Exemple d'intégration de [Cerbere](https://authentification.din.developpement-durable.gouv.fr) dans une application [Django](https://django.org)

## Prérequis Cerbère

**Sauf 127.0.0.1 pour les tests, seuls les sous-domaines du MTES-MCT autorisés, par exemple `.beta.gouv.fr`, `.e2.rie.gouv.fr` et `.developpement-durable.gouv.fr`, peuvent être utilisés avec Cerbère.**

*Sinon vous aurez le message d'erreur au login: `Erreur à l'authentification. Adresse demandée invalide: ...`.*

## Installation du client CAS

Installation du client [django-cas-ng](https://djangocas.dev/):

```shell
pip install django-cas-ng
```

## Configuration du client CAS

Dans le fichier des [settings](cerbere/settings.py),

* ajouter le client CAS dans les applis installées :

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_cas_ng' # client CAS
]
```

* ajouter le client CAS dans les middlewares:

```python
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django_cas_ng.middleware.CASMiddleware' # client CAS
]
```

* ajouter le client CAS dans les backends d'authentification:

```python
AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'django_cas_ng.backends.CASBackend' # client CAS
)
```

* ajouter la conf (url et version) du client CAS:

Deux possibilités de protocoles en fonction des informations que vous souhaitez récupérer du user.

En CAS 2.0, vous ne récupérez que l'id (=email) du user dans la réponse, en plus du ticket.

```python
# CAS config
CAS_SERVER_URL = 'https://authentification.din.developpement-durable.gouv.fr/cas/public'
CAS_VERSION = '2'
```

En SAML 1.1, vous pourrez récupérer, en plus du ticket, plusieurs attributs du user dans la réponse.

```python
# CAS config
CAS_SERVER_URL = 'https://authentification.din.developpement-durable.gouv.fr/cas/public'
CAS_VERSION = 'CAS_2_SAML_1_0'
```

## Personnaliser le user Cerbere

Dans les logs, les [signals](cerbere/signals.py) émis à l'authentification du user indiquent tous les attributs fournis par le serveur Cerbère.
Les attributs fournis par le serveur Cerbère lors de l'authentification de l'utilisateur en SAML 1.1 sont populés dans un user [personnalisé](https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#specifying-custom-user-model).

L'utilisation de ce dernier est spécifié dans les [settings](cerbere/settings.py):

```python
AUTH_USER_MODEL = 'cerbere.CerbereUser' # custom Cerbere user
AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'cerbere.backends.CerbereCASBackend' # custom backend CAS
)
```

Pour populer d'autres attributs, il faut enrichir le modèle user personnalisé [CerbereUser](cerbere/models.py).

Ensuite il faut ajouter les nouveaux attributs avec les champs ajoutés dans le mapping spécifié dans les [settings](cerbere/settings.py):

```python
CAS_USERNAME_ATTRIBUTE = 'uid'
CAS_APPLY_ATTRIBUTES_TO_USER = True
CAS_RENAME_ATTRIBUTES = {'UTILISATEUR.ID':'uid', 'UTILISATEUR.LOGIN': 'login', 'UTILISATEUR.NOM':'last_name','UTILISATEUR.PRENOM':'first_name','UTILISATEUR.MEL':'email','UTILISATEUR.CIVILITE':'civilite','UTILISATEUR.TEL_FIXE':'tel_fixe','UTILISATEUR.UNITE':'unite'}
```

Enfin il faut appliquer les migrations du modèle:

```shell
python manage.py migrate
```

## Tests

```shell
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Lancez [`http://127.0.0.1:8000/`](http://127.0.0.1:8000/)

[Créer un compte Cerbère](https://authentification.din.developpement-durable.gouv.fr/authSAML/moncompte/creation/demande.do) si vous n'en avez pas.
