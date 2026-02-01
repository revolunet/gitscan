# Lucca v2

![Lucca logo](public/assets/logo/lucca-color.png)

A [Docker](https://www.docker.com/)-based installer and runtime for the [Symfony](https://symfony.com) web framework,
with full [HTTP/2](https://symfony.com/doc/current/weblink.html), HTTP/3 and HTTPS support.

## Getting Started - Dev

1. Run `docker-compose up -d` (the logs will be displayed in the current shell)
2. Run `docker exec -it lucca_php bash`
    1. Run `COMPOSER_MEMORY_LIMIT=-1 composer install`
    3. Run `php bin/console fos:js-routing:dump --format=json --target=assets/routes.json`
    5. Run `php bin/console asset-map:compile`
    7. Run `php bin/console lucca:init:media`
    8. Run `php bin/console lucca:init:department`
    9. Run `php bin/console doctrine:migrations:migrate`
3. Create a new user and a new adherent in database
4. Add lucca.local in your OS host file with 127.0.0.1
4. Open `https://localhost` or env server name in your favorite web browser
   and [accept the auto-generated TLS certificate](https://stackoverflow.com/a/15076602/1352334)

**Enjoy!**

## Migrations
- To create a new migration with your database change, run `php bin/console doctrine:migrations:diff`
- To apply the migration, run `php bin/console doctrine:migrations:migrate`
- To revert the migration, run `php bin/console doctrine:migrations:migrate prev`
- To see the status of your migrations, run `php bin/console doctrine:migrations:status`
- To see the list of migrations, run `php bin/console doctrine:migrations:list`

## Unit test
- To run unit test use `php -d memory_limit=-1 bin/phpunit src`

OR 

- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/AdherentBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/ChecklistBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/ContentBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/CoreBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/DecisionBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/DepartmentBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/FolderBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/LogBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/MediaBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/MinuteBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/ModelBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/ParameterBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/SecurityBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/SettingBundle`
- To run unit test use `php -d memory_limit=-1 bin/phpunit src/Lucca/Bundle/UserBundle`

## Docs

1. [Initialization project](docs/initialization_lucca.md)
2. [Container network](docs/docker_network_developper.md)
3. [Email configuration](docs/email.md)
4. [Deploy container](docs/production_deploy.md)
5. [Environment vars](docs/env_vars.md)

**Lucca command :**

Change a user password :
`lucca:user:change-password`

Unban specific ip address :
`lucca:security:unban`

## Credits

Created by [Numeric Wave](https://numeric-wave.eu).
