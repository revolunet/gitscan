# dossierfacile-data

[![License](https://img.shields.io/badge/licence-MIT-blue.svg)](LICENSE)
[![DBT](https://img.shields.io/badge/dbt-v1.9.0-orange)](https://www.getdbt.com/)
[![Startup d'État](https://img.shields.io/badge/Startup%20d'État-DossierFacile-green)](https://dossierfacile.logement.gouv.fr)

Pipeline de transformation de données pour [DossierFacile](https://dossierfacile.fr).

## Table des matières

- [Présentation](#présentation)
- [Architecture](#architecture)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Tests](#tests)
- [Développement](#développement)
- [Support](#support)
- [Licence](#licence)

## Présentation

Ce projet fait partie de l'écosystème DossierFacile et gère la transformation des données via DBT. Il permet de :

- Transformer et modéliser les données en provenance de notre application en production
- Assurer la qualité des données via la mise en place d'une modélisation et des tests
- Générer des analyses directement consommables par Metabase

## Architecture

Le projet suit une architecture DBT standard avec les composants suivants :

- `models/` : Modèles de données principaux
- `macros/` : Fonctions réutilisables
- `seeds/` : Données de référence
- `tests/` : Tests de données

### Structure des modèles

Les modèles sont organisés en 3 couches techniques :

- **Staging** : Première couche de transformation des données brutes
  - tenant (locataire)
  - owner (propriétaire) 
  - operation (opérations sur les dossiers)
  - document

- **Core** : Modèles métier enrichis et normalisés
  - tenant
  - owner
  - operation  
  - document

- **Analytics** : Modèles d'analyse et de reporting prêts à être utilisés par Metabase

## Installation

### Prérequis

- Python 3.10+
- PostgreSQL 15+
- DBT Core 1.9.0+
- Accès à la base de données DossierFacile

### Installation des dépendances

```bash
# Création de l'environnement virtuel
python -m venv .venv
source .venv/bin/activate

# Installation des dépendances
pip install dbt-core dbt-postgres
```

## Configuration

### Configuration de DBT

1. Créez un fichier `profiles.yml` à la racine du projet :

```yml
dossierfacile:
  target: dev
  outputs:
    dev:
      type: postgres
      host: {{ host }}
      user: {{ user}}
      password: {{ password }}
      port: {{ port }}
      dbname: {{ database }}
      schema: {{ schema }}
      threads: 3
```

2. Remplacez les valeurs `{{}}` avec celles du secret "user SQL df-data dbt_dev" dans vaultwarden.

3. Testez la connexion :
```bash
dbt debug
```

### Configuration de Sqlfluff

```bash
pip install sqlfluff sqlfluff-templater-dbt
```

## Utilisation

### Commandes principales

```bash
# Exécution complète
dbt run

# Exécution d'un modèle spécifique
dbt run -s model_name

# Tests unitaires
dbt test -s test_type:unit

# Génération de la documentation
dbt docs generate
dbt docs serve
```

### Linting SQL

```bash
# Vérification
sqlfluff lint

# Correction automatique
sqlfluff fix
```

## Tests

### Types de tests dans DBT

#### 1. Tests simples (Singular Tests)
Ces tests sont définis directement dans le fichier YAML du modèle et vérifient des contraintes basiques :

```yaml
version: 2

models:
  - name: core_tenant_account
    columns:
      - name: id
        data_tests:
          - unique
          - not_null:
              config:
                where: "id is not null"
```

- **unique** : Vérifie que chaque valeur de la colonne est unique
- **not_null** : Vérifie qu'aucune valeur n'est NULL
- **accepted_values** : Vérifie que les valeurs sont dans une liste prédéfinie
  
Il est également possible d'étendre ces capacités de tests avec des [tests génériques custom](https://docs.getdbt.com/best-practices/writing-custom-generic-tests)

#### 2. Tests unitaires (Unit Tests)

Tests plus complexes qui vérifient la logique de transformation des données. Exemple avec le test [core_tenant_account.test.yml](models/core/tenant/core_tenant_account.test.yml)

### Différences entre les types de tests

1. **Tests simples/generic**
   - Vérifient des contraintes basiques sur les colonnes
   - Faciles à mettre en place
   - Exemple : `unique`, `not_null`, `accepted_values`
   - Idéal pour la validation des données

2. **Tests unitaires**
   - Vérifient la logique de transformation complexe
   - Permettent de tester avec des données d'entrée contrôlées
   - Exemple : logique de détermination de l'origine du locataire
   - Idéal pour tester la logique métier

### Exécution des tests

```bash
# Tous les tests
dbt test

# Tests unitaires uniquement
dbt test -s test_type:unit

# Tests spécifiques à un modèle
dbt test -s core_tenant_account
```

## Développement

### Pré-commit hooks

1. Installation :
```bash
pip install pre-commit
```

2. Configuration dans `.pre-commit-config.yaml` :
```yaml
repos:
  - repo: https://github.com/sqlfluff/sqlfluff
    rev: 3.3.0
    hooks:
      - id: sqlfluff-lint
      - id: sqlfluff-fix
```

3. Activation :
```bash
pre-commit install
```

### Gestion des permissions PostgreSQL

```sql
-- Accès par défaut aux futures tables
alter default privileges 
for user sql_user 
in schema sql_schema 
grant select on tables 
to group sql_group;

-- Accès aux tables existantes
alter default privileges in schema sql_schema
grant select on tables to group sql_group;

-- Usage du schéma
grant usage on schema sql_schema to group sql_group;

-- Accès SELECT à toutes les tables
grant select on all tables in schema sql_schema to group sql_group;
```

## Support

Pour toute question ou problème :
- Contacter l'équipe technique de DossierFacile [contact@dossierfacile.fr](mailto:contact@dossierfacile.fr)

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.