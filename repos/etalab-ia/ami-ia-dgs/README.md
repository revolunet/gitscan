Analyse des signalements de la DGS grâce aux techniques de l'inteligence artificielle
=====================================================================================

Description
-----------

Le projet
~~~~~~~~~

Le projet se déroule sur 8 mois d'Avril à Novembre 2020 et il se compose de 4 livrables distincts :

- Livrable 1 : SOCLE TECHNIQUE D’INGESTION DES DONNEES
- Livrable 2 : ALGORITHMES DE CLASSIFICATION DES SIGNALEMENTS
- Livrable 3 : ALGORITHME DE REGROUPEMENT DES SIGNALEMENTS
- Livrable 4 : INTERFACE DE TRAITEMENTS DES SIGNALEMENTS

Une description plus complète de chacun des livrables se trouve dans la réponse à l'appel d'offre. De plus dans chacun des livrables est associés à un dossier/package de code python et le readme de ces packages contient des informations essentielles sur les choix techniques mis en place.

Organisation du GitLab
~~~~~~~~~~~~~~~~~~~~~~

Ce répertoire git est organisé en 3 dossiers différents :

- __application/backend__: livrable L4. Backend applicatif permettant d'explorer les données de clustering, et de catégoriser/clusteriser de nouveaux documents
-  __demonstrateur__: Les scripts qui permettent de présenter les résultats dans une interface web jupyter et d'ingérer les données PDF,XML (Livrable 1, Livrable 2). **OBSOLETE**. Préférer l'utilisation du livrable 4
- __prediction_models__: Les scripts et les modèles d'inférence de la DCO, de la TYPOLOGIE et de la GRAVITÉ pour une base de fichier PDF ou XML (Livrable 2)
- __regroupement__ : Les algorithmes et les modèles pour le regroupement des signalements (Livrable 3)
- __test__: Les scripts pour les test unitaires


## Utilisation

Chaque dossier contient un readme pour expliciter le fonctionnement de chaque livrable, ainsi qu'un fichier requirements pour les packages à installer.

Dans les grandes lignes :

- **Pour entraîner de nouveaux modèles de classification**:
    Il faut tout d'abord modifier dans le fichier training/config.yaml le chemin vers les nouvelles données.
    Il faut ensuite lancer le sript prediction_models/training/global_training.py.
    Un dossier contenant l'ensemble des modèles de classification est crée.
- **pour entraîner un nouveau modèle de clustering**:
    Il faut modifier le fichier de regroupement/training/config.yaml afin de choisir les nouveaux paramètres du modèle et d'indiquer le l'emplacement de la base de donnée mis à jour.
    Puis, il faut lancer le script python regroupement/training/train.py
    Un dossier contenant les fichiers clefs du modèle est alors créer dans l'emplacement choisi config.yaml/path_to_save
- **pour les déployer dans le L4**:
    - récupérer le directory des nouveaux modèles de classification, les copier dans l4_data_dir(application/backend/src/data)/models
    - récupérer le directory des nouveaux modèles de topics / clusters et les copier dans l4_data_dir/clusters
    - redémarrer le docker

## Auteurs

* **Robin Quillivic**  
* **Louise Remot**  
* **Boris Sanchot** 
* **Cyril Poulet** 

License
-------

Ce projet est privé.
This project is completely private.



Génération de la documentation
------------------------------

1. installer les packages suivants :

        pip3 install -U sphinx recommonmark sphinx-markdown-tables sphinxjp.themes.basicstrap sphinx_bootstrap_theme
        
2. générer la doc dans documentation/build/html

        cd documentation & make html
        
