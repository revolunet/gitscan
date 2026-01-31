# SPPNaut Generator

SPPNaut est une startup d'Etat dont la mission est la modernisaton de la chaîne de production des publications nautiques et l'ouverture de celles-ci (aussi appelées ouvrages).

## Architecture

Le projet suit un architecture _monorepo_. Il est découpé en trois applications distinctes :

-   **PDFGenerator** : le serveur backend assurant la génération manuelle ou périodique d'ouvrages.
-   **interface** : le serveur permettant de consulter ou lancer la génération d'ouvrages.
-   **referentiel-sync** : le démon recopiant un système de fichiers au SHOM dans des buckets S3.

![Schéma d'architecture](./docs/schema.jpg)

## Installer et exécuter SPPNaut et le générateur de PDF sur un poste local

### Pré-requis

-   Docker
-   Docker-compose
-   Python >= 3.10

### Variables d'environnement

En développement, copier le template des variables d'environnement :

```sh
cp PDFGenerator/http/.env.template PDFGenerator/http/.env
```

Dans les autres environnements, prenez exemple sur le fichier `.env.template` pour configurer vos variables d'environnement sur l'environnement d'execution.

La base de données est utilisée pour l'administration des tâches déléguées par la librairie `procrastinate` et les tables d'administration de django pour assurer l'authentification.

Initialiser les 3 variables d'environnement suivantes dans le fichier [.env](PDFGenerator/http/.env) :

-   `S3_BUCKET_GENERATED_PRODUCTION`
-   `AWS_ACCESS_KEY_ID`
-   `AWS_SECRET_ACCESS_KEY`

### Démarrer

Builder et executer les images Docker :

```sh
docker-compose build
docker-compose up
```

Une interface de génération de PDF est accessible sur [http://localhost:8080](http://localhost:8080).
Elle est protégée par une authentification basique :

-   identifiant : `username`
-   mot de passe : `password`

⚠️ Cette interface n'est pas l'interface de SPPNaut, voir ci-dessous.

#### Logs

Depuis un autre shell :

```sh
docker-compose logs -f
```

## `PDFGenerator`

Cette application est executé lors du démarrage de la stack Docker.  
Voir le [Readme](PDFGenerator/http/README.md) détaillé dans `PDFGenerator/http` pour en savoir plus sur son fonctionnement.

## `interface`

Cette application doit être démarrée individuellement.  
Suivre les instructions du fichier [Readme](interface/README.md) incluses dans `interface` pour installer, lancer et développer cette application.

## `referentiel-sync`

Suivre les instructions du fichier [Readme](referentiel-sync/README.md) incluses dans `referentiel-sync` pour installer et développer cette application.

## Collecte des licenses des dépendances utilisées par nos applicatifs

On utilise pip-licenses: comme décrit sur le projet [SPPNaut Carting](https://github.com/betagouv/SPPNautInterface/#readme)

# Services utilisés par l'équipe de développement

-   DNS: Alwaysdata
-   Hébergement: [Clever-cloud](https://console.clever-cloud.com/organisations/orga_975d316a-c00e-4fbb-b880-b5e79d58329b/members)
-   Fiche beta.gouv
-   Github: [Équipe SPPNaut](https://github.com/orgs/betagouv/teams/sppnaut)
-   Google Drive: https://drive.google.com/drive/folders/1t2FNI6_Le-Bv2UVrN0njTFt792vJASJK
-   Matomo: https://stats.data.gouv.fr
-   Sentry: https://sentry.incubateur.net
