Permis de construire facile
==============

**Permis de construire facile** a pour but de permettre aux citoyens d'effectuer leurs demandes de permis de construire en ligne. Pour le moment, le projet se concentre sur le dépot de [demandes préalables de travaux](https://www.service-public.fr/particuliers/vosdroits/F17578).

Plus d'informations sur ce projet sur [beta.gouv.fr](https://beta.gouv.fr/startup/permis-de-construire-facile.html)

La documentation se trouve dans le répertoire [documentation](./documentation). Elle contient:

 - des informations techniques: installation du projet, outils utilisés, modélisation du domaine métier...
 - des informations fonctionnelles, sur le problème que nous cherchons à résoudre à l'aide d'un outil informatique, un glossaire, etc.

## Installing Permis de construire facile

Before trying to run **Permis de construire facile**, make sure you have already installed:

 - [docker](https://docs.docker.com/install/)
 - [composer](https://getcomposer.org/)
 - [yarn](https://yarnpkg.com/en/)

There is a more detailled explanation regarding the installation in the [documentation](./doc/technical/install.md), but here are
Here are all the command you'll need to run **Permis de construire facile** right now:

```
# Download the code
git clone git@github.com:MTES-MCT/permis-construire.git
# Fetch the PHP and JS dependencies
cd app
composer install
yarn install
# Build and deploy the CSS/JS files
yarn run encore dev
# Run the application inside containers
cd ..
docker-compose up
# Import the database schema (the PostgreSQL tables) and a few sample data
docker exec -it $(docker ps -aqf "name=pc_php") /bin/sh
/var/www/symfony # bin/console doctrine:migrations:migrate --no-interaction
```

At the end, you should be able to access the application at `http://127.0.0.1`.

For more details, you can have a look at the [documentation](./documentation/).

## Licence

Ce projet est sous licence [MIT](./LICENSE.txt)