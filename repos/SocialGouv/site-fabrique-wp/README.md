# Installation de Wordpress avec Bedrock

Pour mettre en place une nouvelle installation de Wordpress à partir de cette stack :

1. Renseigner les informations dans le fichier `.env`
2. Vérifier la configuration de Traefik dans le `docker-compose.yml`
2. Exécuter la commande `docker compose up -d` pour démarrer l'ensemble des conteneurs

#### Développement local (sans Traefik)

1. Ajouter le domaine de développement dans `/etc/hosts`
```
120.0.0.1      wordpress.dev.traefik.me
```

2. Ajouter un port au service `nginx` dans `docker-compose.yml`
```yaml
nginx:
    image: nginx:latest
    ports:
      - "9000:80"
```

3. Utiliser le fichier `env.local` pour démarrer l'application
```shell
docker compose --env-file .env.local up
```

4. Accéder à l'application via `http://wordpress.dev.traefik.me:9000`  

##### Import des données en base

1. Mettre à jour le nom de la base de données
```
sed -i 's/dbs12641398/wordpress/g' dump.sql
```

2. Mettre à jour les URL du site
```
sed -i "s#https://fab.test-website.fr#http://wordpress.dev.traefik.me:9000#g" dump.sql
sed -i "s#http://fab.test-website.fr#http://wordpress.dev.traefik.me:9000#g" dump.sql
sed -i "s#fab.test-website.fr#wordpress.dev.traefik.me:9000#g" dump.sql
```

3. Copier le dump sql dans le conteneur `database`
```shell
docker compose cp dump.sql database:/tmp
```

4. Se connecter au conteneur de base de données
```shell
docker exec -it site-fabrique-wp-database-1 /bin/bash
```

5. Se connecter à la base de données
```shell
mariadb -u root -p$MARIADB_ROOT_PASSWORD
```

6. Importer le dump sql
```sql
SOURCE /tmp/dump.sql 
```

##### Mise à jour des assets

Ajouter les fichiers dans `./data/wordpress`
