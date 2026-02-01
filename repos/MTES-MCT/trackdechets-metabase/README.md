# trackdechets-metabase

Guide d'administration du serveur Metabase permettant d'analyser les données Trackdéchets

### Config serveur

Scaleway Docker Instant App
2GB Ubuntu 16.04.5 LTS Xenial

### Metabase + PostgreSQL

Cf [Running metabase on docker](https://www.metabase.com/docs/latest/operations-guide/running-metabase-on-docker.html)

Metabase est déployé en utilisant `docker-compose` avec un fichier de config `.env`.
On utilise un postgres local plutôt que le H2 local de la config de base
afin de faciliter une éventuelle migration vers une DB managée.

```
cd /srv/trackdechets-metabase
sudo docker-compose up -d
```

### Nginx

```
sudo systemctl start nginx
```

### SSL

Configuration SSL effectuée via Certbot en suivant ce tutoriel: [how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04).
Le renouvellement est automatique (Cf `systemctl list-timers`)

### Logs

Les logs sont transmis à Datadog à l'aide d'un agent conteneurisé.

### Pare-feu

Activation d'un pare-feu ufw

```
sudo apt-get install ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ${SSH_PORT}
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### Connexions aux bases de données

Pour des raisons de sécurité, la connexion aux db de prod se fait via un tunnel ssh et des utilisateurs readonly.
Pour les db gérées par Scalingo, la gestion des droits d'accès aux schémas autres que public se fait en suivant [la documentation](https://doc.scalingo.com/databases/postgresql/start#database-users).