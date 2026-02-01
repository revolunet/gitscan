# Extraction de données RCP - Module complet

Module d'extraction automatisée de données depuis les fichiers RCP (Résumé des Caractéristiques du Produit) de médicaments avec architecture modulaire et scripts spécialisés.

## 🎯 Objectif

Extraire et structurer les informations médicales depuis les fichiers HTML RCP pour faciliter l'analyse, l'export vers différents formats, et l'intégration dans des pipelines de données.

## 📁 Architecture du projet

```
extraction/
├── 📦 MODULES PYTHON (refactorisés)
│   ├── __init__.py              # Package principal
│   ├── html_parser.py           # Parsing HTML avec détection encodage
│   ├── database.py              # Interface MySQL optimisée
│   ├── image_processor.py       # Traitement images et URLs
│   ├── data_exporter.py         # Export multi-format (CSV, JSONL)
│   ├── analytics.py             # Analyse statistiques Matomo
│   ├── extractor.py             # Orchestrateur principal
│   └── cli.py                   # Interface ligne de commande
│
├── 🧪 TESTS UNITAIRES
│   ├── tests/
│   │   ├── test_html_parser.py
│   │   ├── test_image_processor.py
│   │   └── test_database.py
│
├── 📊 DONNÉES
│   ├── data/
│   │   ├── input/               # SpecIds, analytics
│   │   ├── output/              # Extractions, rapports
│   │   ├── processed/           # Données intermédiaires
│   │   └── archive/             # Données archivées
│
├── 📓 NOTEBOOKS EXPLORATION
│   ├── notebooks/
│   │   ├── extractRCPFull.ipynb       # Exploration RCP
│   │   ├── extractFicheInfo.ipynb     # Fiches médicaments
│   │   ├── extractNotices.ipynb       # Notices patient
│   │   ├── extractSubstancesMarr.ipynb # Substances actives
│   │   └── scrap-marr.ipynb           # Scraping données
│
├── 🛠️ SCRIPTS SPÉCIALISÉS
│   ├── scripts/
│   │   └── final/               # Scripts production finalisés
│   │       ├── extract-rcp.py           # Extraction RCP avancée
│   │       ├── extract-fiches-infos.py  # Fiches batch optimisé
│   │       ├── extract-matomo.py        # Export Matomo
│   │       ├── detect-duplicate-content.py  # Détection doublons
│   │       ├── duplicate-rcp-analysis.py    # Analyse duplicatas
│   │       └── filter_5000.py          # Filtrage top médicaments
│
├── 🗂️ LEGACY (scripts obsolètes)
│   ├── legacy/
│   │   ├── extractRcp.py        # Remplacé par cli extract
│   │   ├── extractRcpMulti.py   # Remplacé par cli extract --extended
│   │   ├── export_most_viewed.py # Remplacé par cli analytics
│   │   └── extractSubstances5000.py # Remplacé par cli components
│
├── 📚 DOCUMENTATION
│   ├── docs/
│   │   └── architecture.md      # Architecture technique détaillée
│   ├── README.md                # Ce fichier
│   ├── pyproject.toml           # Configuration projet
│   ├── .env.example             # Variables d'environnement
│   └── .gitignore               # Exclusions Git
```

## 🚀 Installation et usage rapide

### Installation

On utilise :
- Python3.12+
- Poetry (Install via pipx install poetry or follow the official guide)

```bash
# Install dependencies and project into a virtual environment
poetry install
```

### Usage CLI principal

```bash
# 1. Extraction basique vers JSONL
poetry run extraction-cli extract /path/to/html_folder/ -o export.jsonl

# 2. Extraction vers CSV avec traitement parallèle
poetry run extraction-cli extract /path/to/html -f csv --csv-format extended -o export.csv --processes 4

# 3. Extraction composants pour liste SpecIds
poetry run extraction-cli components spec_ids.txt -o composants.csv

# 4. Analyse top consultés (80% couverture)
poetry run extraction-cli analytics consultations.csv -c 80 -o top_specs.txt

# 5. Génération rapport analytics
poetry run extraction-cli report consultations.csv -o rapport.md
```

(Vous pouvez vous épargner le `poetry run` en rentrant dans votre venv via `$(poetry env info --path)/bin/activate`)

### Usage API Python
```python
from extraction import RCPExtractor, DatabaseConfig
from pathlib import Path

# Configuration et extraction
db_config = DatabaseConfig()
extractor = RCPExtractor(
    db_config=db_config,
    html_dir=Path("/html/files"),
    enable_images=True,
    max_workers=4
)

# Extraction complète
data = extractor.extract_to_jsonl(
    output_file=Path("rcp_data.jsonl"),
    limit=1000
)
```

## 🔄 Migration depuis scripts legacy

### Correspondances des commandes

| Script legacy | Commande moderne | Notes |
|---------------|------------------|-------|
| `extractRcp.py /html -f csv -o out.csv` | `extraction-cli extract /html -f csv -o out.csv` | Format basique identique |
| `extractRcpMulti.py /html -f csv -p 4` | `extraction-cli extract /html -f csv --csv-format extended --processes 4` | Format étendu + parallélisme |
| `export_most_viewed.py stats.csv 80 out.txt` | `extraction-cli analytics stats.csv -c 80 -o out.txt` | Analytics avec couverture |
| `extractSubstances5000.py ids.txt out.csv` | `extraction-cli components ids.txt -o out.csv` | Extraction composants |

### Avantages de la migration

✅ **Architecture modulaire** vs scripts monolithiques
✅ **Tests unitaires** vs aucune validation
✅ **Configuration centralisée** vs paramètres hardcodés
✅ **Gestion d'erreurs robuste** vs crash sur erreur
✅ **Documentation complète** vs commentaires épars
✅ **Performance optimisée** vs implémentation naïve

## 📊 Fonctionnalités principales

### 🔍 Extraction RCP
- **Parsing HTML robuste** avec détection d'encodage automatique
- **Extraction sections** : Sécurité préclinique, précautions d'emploi, contre-indications
- **Traitement images** : Conversion URLs relatives → absolues
- **Métadonnées** : CIS, dénomination, code ATC, composants
- **Formats sortie** : JSONL structuré, CSV basique/étendu

### 📈 Analytics et statistiques
- **Analyse Matomo** : Parsing données de consultation
- **Couverture traffic** : Extraction par seuil de pourcentage
- **Top médicaments** : Listes des plus consultés
- **Rapports visuels** : Génération automatique

### 🧬 Composants et substances
- **Extraction déduplication** : SubsId et NomLib uniques
- **Optimisation base** : Requêtes par batch
- **Relations complexes** : SpecId → Composants → Substances
- **Export normalisé** : CSV avec mapping complet

### 🛠️ Outils spécialisés
- **Détection doublons** : Analyse similarité contenus
- **Validation données** : Contrôles qualité automatisés
- **Pipeline ETL** : Intégration flux de données
- **Monitoring** : Métriques performance et erreurs

## 🎛️ Configuration avancée

### Variables d'environnement
```bash
# Base de données
export DB_HOST=localhost
export DB_USER=root
export DB_PASSWORD=mysql
export DB_NAME=pdbm_bdd

# Chemins
export HTML_FILES_DIR=/path/to/html/files
export OUTPUT_DIR=/path/to/outputs

# Performance
export MAX_WORKERS=4
export ENABLE_IMAGES=true
export BATCH_SIZE=100
```

### Configuration base MySQL
```sql
-- Structure requise
CREATE TABLE Spec_Doc (SpecId INT, DocId INT);
CREATE TABLE Document (DocId INT, DocPath VARCHAR(255));
CREATE TABLE Composant (SpecId INT, SubsId VARCHAR(50), NomId INT);
CREATE TABLE Subs_Nom (SubsId VARCHAR(50), NomId INT, NomLib VARCHAR(255));
CREATE TABLE Element (SpecId INT, ElmtNom VARCHAR(255));
```

## 🧪 Tests et qualité

### Exécution des tests
```bash
# Tous les tests
pytest tests/

# Tests spécifiques avec couverture
pytest tests/test_html_parser.py --cov=extraction.html_parser

# Tests avec rapport HTML
pytest tests/ --cov=extraction --cov-report=html
```

### Outils qualité
```bash

# Linting et formattage
ruff check
ruff format

# Type checking (optionnel)
mypy extraction/
```

## 📈 Performance et optimisations

### Métriques typiques
- **Parsing HTML** : ~500 fichiers/minute
- **Extraction complète séquentielle** : ~100 RCP/minute
- **Extraction parallèle (4 workers)** : ~400 RCP/minute
- **Analytics processing** : ~10K entrées/seconde

### Optimisations recommandées
- **Traitement parallèle** : `--processes` selon CPU disponibles
- **Cache mappings** : Chargement unique des tables de référence
- **Limitation mémoire** : `--limit` pour gros volumes
- **Compression sortie** : gzip pour fichiers volumineux

## 🔗 Intégration et extensibilité

### Nouveaux formats d'export
```python
class CustomExporter(DataExporter):
    def export_to_xml(self, data_list, output_file):
        # Implémentation export XML
        pass
```

### Nouvelles sections RCP
```python
class ExtendedRCPParser(RCPParser):
    def __init__(self):
        super().__init__()
        self.sections_map.update({
            'RcpNouvelleSection': 'nouvelle_section'
        })
```

### Pipelines de données
```bash
#!/bin/bash
# Pipeline quotidien automatisé
DATE=$(date +%Y%m%d)

# Extraction
extraction-cli extract /html/files -o data/output/rcp_${DATE}.jsonl

# Analytics
extraction-cli analytics data/input/matomo_${DATE}.csv -c 80 -o data/output/top_${DATE}.txt

# Archive
gzip data/output/rcp_${DATE}.jsonl
```

## 📋 Roadmap et évolutions

### Version actuelle (1.0)
✅ Module extraction complet
✅ CLI interface complète
✅ Tests unitaires de base
✅ Documentation architecture

### Versions futures

#### v1.1 - Amélioration performance
- [ ] Optimisation parsing HTML
- [ ] Cache disque pour mappings
- [ ] Streaming pour gros volumes
- [ ] Métriques détaillées

#### v1.2 - Fonctionnalités avancées
- [ ] Support nouveaux formats (XML, Parquet)
- [ ] API REST pour intégration
- [ ] Dashboard monitoring temps réel
- [ ] Validation données automatisée

#### v1.3 - Intelligence artificielle
- [ ] Classification automatique sections
- [ ] Détection anomalies contenu
- [ ] Extraction entités nommées
- [ ] Suggestions amélioration qualité

## 🆘 Support et contribution

### Problèmes courants
- **Erreur connexion MySQL** : Vérifier configuration DB
- **Fichiers HTML corrompus** : Utiliser `--enable-images false`
- **Performance lente** : Augmenter `--processes`
- **Erreurs encoding** : Vérifier fichiers source

### Contribution
1. **Issues** : Reporter bugs et demandes fonctionnalités
2. **Pull requests** : Améliorations et corrections
3. **Documentation** : Mises à jour et exemples
4. **Tests** : Couverture de nouveaux cas

### Contact
- **Documentation** : `docs/architecture.md`
- **Issues** : GitHub repository
- **Tests** : `pytest tests/ -v`
- **Code** : `extraction/` modules