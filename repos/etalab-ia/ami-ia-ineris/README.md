# OUTIL DE CARACTÉRISATION DES COMPOSÉS CHIMIQUES

## Description

Ce dépôt contient tous les scripts et notebooks développés pour le cadre du projet porté par l'institut national de l'environnement industriel et des risques (INERIS) pour la réalisation d'un outil de caractérisation des composées chimiques. Ce projet comporte trois besoins différents :
* Besoin 1: Identification de substances dans des prélevés aqueux
* Besoin 2: Identification de sources de pollution environnementales
* Besoin 3: Caractérisation de sources de pollution de l’air

## Codes et Notebooks

Pour ces trois besoins, des notebooks d'analyse exploratoire et d'entraînement de modèle IA ainsi que des scripts de préparation et d'injection de données dans des BDD peuvent être trouvés dans le dossier divers séparé par besoin.
Une [note technique](https://drive.google.com/file/d/1DGXGSbXNFyN_gR5uG7rM7C7cAqbA9C7E/view?usp=sharing) a été rédigée pour les trois besoins qui explique le contexte, l'approche et le commentaire des résultas obtenus pour chaque besoin.
Un guide d'utilisateur a été aussi rédigé pour l'utilisation de la plateforme

## Plateforme 
Le projet inclut aussi la création d'une interface qui est une preuve de concept pour l'utilisation des modèles développés qui peut être trouvée dans le dossier heka. Le dossier heka est constitué de plusieurs dossiers. Chaque dossier est une image docker qui sert à créer un micro-service à l'aide du Dockerfile correspondant :
* a12n : micro-service qui gère l'authentification à la plateforme.
* admin : micro-service qui gère l'interface admin. Cette dernière sert à donner des accès à la plateforme et de visualiser les différents processus lancés / programmés ainsi que leur état.
* c13s : micro-service qui gère la création et l'utilisation de plusieurs endpoints.
* launcher : micro-service qui sert à lancer une tâche sur le cluster.
* scheduler : micro-service qui sert à programmer le lancement d'une tâche sur le cluster.
* tasks : dossier contenant plusieurs mini-dossiers. Chaque mini-dossier est une image docker qui permet le lancement d'une tâche donnée. Pour chaque tâche nous avons un fichier requirements.txt qui contient l'ensemble des librairies ainsi que leurs versions pour son bon fonctionnement.
* frontend : micro-service du frontend de la plateforme. Cette dernière a été développé en Python Dash. Dans ce dossier, on peut toruver un fichier requiremnts.txt qui contient l'ensemble des librairies necessaires pour le bon déploiement de cette image. Le fichier app.py est le fichier principal qui permet de lancer la plateforme. Ensuite, les dossiers : Bdd, Bdd_analysis, Besoin1, Besoin2, Besoin2_final, Besoin3, Besoin3ech, Boucle_retour comprennent les layouts ainsi que les callbacks des différentes composantes dash pour les différents onglets de notre plateforme.

Il est à noter aussi que la plateforme utilise une base de données relationelle sous Postgres hebergée chez Sia Partners ainsi qu'un dépôt sous forme d'un bucket Google Cloud Storage. Ainsi, pour le bon fonctionnement de la plateforme il est necessaire d'avoir accès à cette base de données.  

La plateforme est disponible à partir de l'URL suivant :
* [https://heka-dev.sia-partners.ai/ineris/](https://heka-dev.sia-partners.ai/ineris/)

L'accès à la plateforme necessite d'avoir des identifiants.



# Déploiement de la plateforme

## **Installation**

### 1 - S'authentifier auprès du registre docker

Pour vous authentifier par rapport au registre docker, vous devez exécuter la commande suivante:

```
docker login git.sia-partners.com:5656
```

### 2 - Configuration du projet

Le code local essaie de récupérer la configuration du projet sous le chemin `conf/project_config.yml`. Pour configurer cela, vous devez:
* Demander l'accès au fichier de config
* Enregistrez ce contenu dans un nouveau fichier dans `conf/project_config.yml`


## Exécuter localement

L'application peut être exécutée à l'aide de la commande `docker-compose` .
Docker compose fonctionne en lisant le fichier `docker-compose.yml` et en exécutant des conteneurs Docker en fonction du contenu du fichier.

Voici les commandes de base:

* `docker-compose up (--force-recreate)` - Lancez les conteneurs Docker de l'application (et forcez-les à être recréés et pas seulement redémarrés si possible)
* `docker-compose pull` - Extrait toutes les images Docker contenues dans le fichier docker-compose.yml
* `docker-compose build` - Construit localement toutes les images dans le fichier docker-compose.yml
