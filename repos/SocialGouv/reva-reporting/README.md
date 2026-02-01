# reva-reporting
Projet python mettant à disposition des assets data anonymisés en provenance du projet REVA 

## Quickstart

Pour faciliter l'installation de l'environnement de développement, un [Makefile](Makefile) automatise certaines actions
que vous pouvez découvrir grâce à la commande suivante :
```shell
$ make help
```

### Création de l'environnement Conda

Le projet utilise `conda` pour gérer les environnements virtuels Python : [Guide d'installation Miniconda](https://docs.conda.io/en/latest/miniconda.html).

Si vous êtes sur MacOS, la manière la plus directe d'installer `conda` est Homebrew :
```shell
$ brew install --cask miniconda
```

Une fois Miniconda installé, créez et activez un environnement virtuel Python lié au projet :
```shell
$ make conda_env
```

### Installation des dépendances

Vous pouvez désormais installer l'ensemble des dépendances du projet dans un environnement isolé.
La commande suivante vous permet d'installer :
1. Le package du projet en mode développement
2. Les dépendances liées au développement (libraries de test, etc.)
```shell
$ make dependencies
```

### Tests
Pour exécuter les tests unitaires (et ainsi vérifier que votre environnement de développement est prêt) :
```shell
$ make unit_tests
```

### Lancer un job
Avant toute chose, pensez à copier-coller le fichier `env.example` dans un fichier `env` à ne surtout pas ajouter à git.
Ce fichier contiendra les variables nécessaires à la configuration de votre environnement local. Vous pouvez obtenir un
exemple auprès d'un autre développeur de l'équipe.

Vous êtes désormais prêt à exécuter un job grâce à la commande suivante :
```python 
python jobs/<le_nom_du_job>.py
```

## Exposer une table dans le DWH

### Guidelines générales de contribution
Pour contribuer sur ce repo, commencez par créer une branche nommée selon la user story associée.
  - Exemple : pour l'exposition de la table `candidacy`: `REVA-17_create_candidacy`
  - Pour les Merge Requests, la convention de nommage est la suivante : `REVA-17 Create candidacy`.

### Création du flux d'exposition [EN COURS]
1. Pour créer un nouveau flux d'exposition, copiez/collez le fichier` jobs/_template.py` et renommez-le avec le nom de la table cible du DWH.
2. Remplissez ensuite le fichier en suivant les _TODO_ indiqués. 
Le template de base contient le strict nécessaire pour exposer le résultat d'une requête SQL dans la table cible.

- Si besoin, des connecteurs sont disponibles dans le dossier `jobs/infra/` pour les DB principales de l'écosystème REVA.
- Si vous souhaitez compléter la (ou les) requête(s) SQL avec du code Python custom, ce code doit suivre les conventions [PEP 8](https://www.python.org/dev/peps/pep-0008/) et être testé unitairement.

### Création de la table cible dans le DWH

#### Définition du schéma avec SQLAlchemy
Le fichier `migrations/model.py` contient l'ensemble des tables du DWH (dans l'ordre alphabétique). 
Vous pouvez donc définir le schéma de la table cible de votre flux en suivant les conventions suivantes :

- Spécifier `primary_key=True` pour au moins un des champs (obligatoire dans SQLAlechemy)
- Spécifier `timezone=True` pour les champs de type TIMESTAMP (le défaut est à False)
- Garder la valeur par défaut `nullable=True` pour tous les champs. Si le champ ne doit jamais être nul, cela doit apparaître dans les règles de qualité et non dans le schéma.
- Si nécessaire, il est possible de rajouter des indexes pour certains champs avec `index=True`.

#### Création de la migration avec Alembic
1. Spécifiez dans le fichier `.env` les identifiants de connexion au DWH de PROD.
2. Générez la migration :
```shell
$ alembic revision --autogenerate -m "Un message de commit"
```
Une migration est alors créée automatiquement sur la base du delta entre le DWH de PROD et le modèle défini dans `migrations/model.py`.
3. Pensez à bien vérifier la migration générée dans `migration/versions/`. Pour mettre à jour votre base en local, vous pouvez exécuter la commande suivante:
```shell
$ alembic upgrade head
```
