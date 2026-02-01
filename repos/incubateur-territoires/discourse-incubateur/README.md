# Forum des territoires

## Discourse - deploiement local

### Docker-compose

Le `docker-compose.yml` utilise l'image et la (configuration Bitnami)[https://github.com/bitnami/bitnami-docker-discourse].

- Depuis la racine du projet : `docker-compose up` (ajouter le flag `-d` pour lancer le process en mode detached)
- Le discourse devient disponible sur le port 80 du host specifie dans le fichier yaml (localhost par defaut)
- L'administrateur par defaut est `user:bitnami123`

- Si besoin de rentrer dans la base de donnee : `docker exec <id_du_conteneur_postgres_discourse> -it psql -U bn_discourse -d bitnami_discourse`

### Discourse-theme

Prerequis : un environnement ruby, une cle API Discourse lie a l'utilisateur admin

- `gem install discourse_theme`
- `discourse_theme watch <chemin_vers_le_projet>`
- Completer les infos en fonction de votre host (localhost par defaut) et votre API key a generer dans l'espace administrateur de Discourse
