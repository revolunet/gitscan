# OpenSimplif

## Context

OpenSimplif est un fork du projet TPS (https://github.com/sgmap/tps).

L'historique de développement du projet est présent dans un autre répertoire GitHub (https://github.com/XjulI1/opensimplif).

Il a pour vocation de centraliser toutes les propositions, pistes et mesures des différents ministères de l'état français.

/!\ ATTENTION /!\

Depuis le commit https://github.com/XjulI1/opensimplif/commit/cecb0e9, les tests n'ont pas été mis à jour pour s'adapter au context OpenSimplif. Les différentes évolutions fonctionnelles ont été tracées dans les commits suivants.

## Technologies utilisées

Ruby  : 2.3.1
Rails : 5.0.3


## Initialisation de l'environnement de développement

Afin d'initialiser l'environnement de développement, éxécutez la commande suivante :

    bundle install


## Création de la base de données

L'application utilise une base de donnée Postgresql. Pour en installer une, utilisez la commande suivante :

    sudo apt-get install postgresql

Les informations nécessaire à l'initialisation de la base doivent être pré-configurées à la main grâce à la procédure suivante :

    su - postgres
    psql
    > create user tps with password 'lol' superuser;
    > \q


Afin de générer la BDD de l'application, il est nécessaire d'éxécuter les commandes suivantes :

    rake db:create db:schema:load db:migrate
    rake db:create db:schema:load db:migrate RAILS_ENV=test


## Installation de Phantom JS

Installer PhantomJS qui est utilisé par les tests automatisés de l'application.


## Exécution des tests (Rspec)

Pour éxécuter les tests de l'application, plusieurs possibilités :

- Lancer tous les tests

        rake spec
        rspec

- Lancer un test en particulier

        rake spec SPEC=file_path/file_name_spec.rb:line_number
        rspec file_path/file_name_spec.rb:line_number

- Lancer tous les tests d'un fichier

        rake spec SPEC=file_path/file_name_spec.rb
        rspec file_path/file_name_spec.rb


## Regénérer les binstubs

    bundle binstub railties --force
    rake rails:update:bin
