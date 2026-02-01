# Espace de travail Meltano et dbt de Trackdéchets 

Ce dépôt est associé à [trackdechets-airflow-workspace](https://github.com/MTES-MCT/trackdechets-airflow-workspace) et [trackdechets-data-platform](https://github.com/MTES-MCT/trackdechets-data-platform).

Il contient la configuration et la définition des pipelines [Meltano](https://meltano.com/) constituant la partie *Extract-Load* de la plateforme données de Trackdéchets.

Ce dépôt contient également la configuration et les modèles [dbt](https://www.getdbt.com/) constituant la partie *Transform* de la plateforme données. dbt est géré comme un plugin Meltano.

## Brique Meltano

La configuration Meltano est essentiellement contenue dans le fichier `meltano.yml` présent à la racine du dépôt.
Ce fichier contient la liste des plugins nécessaires aux extractions et chargements de données ainsi que les définitions des pipelines de données.

Les différents plugins nécessitent des variables d'environnement à définir dans un fichier `.env`. Une liste de ces variables est disponible dans le fichier `sample.env`.

## Brique dbt

L'ensemble des fichiers nécessaires au bon fonctionnement de dbt sont présents dans le dossier `transform/` :

- `transform/dbt_project.yml` contient la configuration des modèles.
- `transform/packages.yml` contient la liste des packages dbt utilisés dans ce projet.
- `transform/models/sources.yml` contient la définition des sources disponibles dans la `raw_zone` de l'entrepôt de données et leurs configurations.

Les modèles dbt sont contenus dans le dossier `transform/models/`. Ce dernier est découpé en sous dossiers correspondants aux différentes parties de l'entrepôt de données où arrivent les données transformées, à savoir la `trusted_zone` et `refined_zone`.

