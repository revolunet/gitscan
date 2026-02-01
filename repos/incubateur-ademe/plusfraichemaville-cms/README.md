# Plus fraîche ma ville - CMS

Le but de la startup d'état Plus fraîche ma ville est d'accompagner les collectivités dans le choix de solutions de rafraîchissement urbain pérennes et durables.

Ce repository concerne le CMS qui servira à alimenter la V2 du site https://plusfraichemaville.fr .

Ce CMS est Strapi.


# Installation en local

### Démarrage de la base de données

Afin de pouvoir fonctionner, Strapi a besoin d'une base de données PostgreSQL.

### Configuration

Afin de faire tourner le CMS en local, il faut copier créer à la racine du projet un fichier .env à partir de [ce fichier d'exemple](./.env.example).

Cela permettra à l'instance en local de se connecter à la base de données, et à un bucket S3 pour les médias.

### Initialisation du schéma de la base
Le schéma de la base sera automatiquement créé / mis à jour par Strapi au démarrage du serveur.


### Démarrage

Démarrez ensuite le serveur en mode développement :

```shell
npm run develop
```


## Classe typescript

Les classes typescript peuvent être générées grâce au plugin schemas-to-ts, en lançant la commande suivante:
```shell
npm run generate-types
```

Les fichiers générés dans le répertoires /types sont à copier tels quels dans le répertoire /lib/strapi/types du [repo NextJS](https://github.com/incubateur-ademe/plusfraichemaville-site) du site https://plusfraichemaville.fr  
