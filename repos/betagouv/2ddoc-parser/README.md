# 2ddoc-parser

[![Python Version](https://img.shields.io/badge/python-3.13%2B-blue.svg)](https://www.python.org/downloads/)
[![Poetry](https://img.shields.io/badge/package%20manager-poetry-blue)](https://python-poetry.org/)

Bibliothèque Python pour décoder et vérifier les **2D-DOC** de l'ANTS (Agence Nationale des Titres Sécurisés).

Les 2D-DOC sont des codes-barres 2D (DataMatrix) présents sur de nombreux documents administratifs français (avis d'impôts, permis de conduire, cartes grises, etc.). Cette bibliothèque permet de :
- **Parser** la structure DC04 du 2D-DOC
- **Décoder** les champs métier selon le type de document
- **Vérifier** la signature cryptographique (ECDSA) avec la TSL ANTS

## 🚀 Installation

### Avec Poetry (recommandé)

```bash
poetry add git+https://github.com/betagouv/2ddoc-parser.git
```

### Avec pip

```bash
pip install git+https://github.com/betagouv/2ddoc-parser.git
```

### Installation d'une version spécifique (tag)

```bash
# Avec Poetry
poetry add git+https://github.com/betagouv/2ddoc-parser.git#v1.0.0

# Avec pip
pip install git+https://github.com/betagouv/2ddoc-parser.git@v1.0.0
```

## 📖 Utilisation

### Décoder un 2D-DOC

L'API principale se résume à une seule fonction : `decode_2d_doc()`

```python
from fr_2ddoc_parser.api import decode_2d_doc

# Chaîne brute extraite d'un DataMatrix (par exemple avec pyzbar)
raw_2d_doc = "DC04FR000001FFFF23DC2801FR432,75<GS>44227801234567845202146RETI PATRICK<GS>4A310720224Y145 RUE JULLIARD/ZASPECIMEN/78320/LEVIS STNOM<GS>4163198<GS>47300112345678948RETISOPHIE<GS>4907019877654324V3542<GS>4W182<GS>4X3724<GS><US>6W76EBC3I2LWHBVGNNYTL34SC6V32S2GDCIQQZLZNMTKCHNVEUISJYUQH5WE3AJJICBNG3YMQ2NXXHP5ZHVOQE332R6TUJDHNOHQ6BI"

# Décode le 2D-DOC
result = decode_2d_doc(raw_2d_doc)

# Résultat
print(result.header.doc_type)        # "28" (Avis d'impôts)
print(result.is_valid)                # True si la signature est valide
print(result.typed)                   # Objet typé selon le type de document
```

### Structure du résultat

Le résultat retourné est un objet `Decoded2DDoc` contenant :

#### 1. **header** : En-tête DC04
```python
result.header.marker         # "DC" (identifiant 2D-DOC)
result.header.version        # 4 (version du format)
result.header.doc_type       # Type de document (ex: "28" pour avis d'impôts)
result.header.perimeter      # Périmètre (ex: "01")
result.header.country        # Pays (ex: "FR")
result.header.ca_id          # ID de l'autorité de certification (ex: "FR06")
result.header.cert_id        # ID du certificat
result.header.issue_date     # Date d'émission (objet date)
result.header.signature_date # Date de signature (objet date)
```

#### 2. **fields** : Champs bruts (dict)
```python
result.fields  # Dict[str, str] - Tous les champs parsés
# Exemple : {"43": "2", "44": "1442569", "45": "2024", "46": "DOE JOHN", ...}
```

#### 3. **signature** : Bloc de signature
```python
result.signature.present     # True si une signature est présente
result.signature.raw         # bytes - Signature brute
result.signature.alg_hint    # Algorithme détecté (P-256, P-384, P-521)
```

#### 4. **typed** : Données typées (selon le type de document)
```python
result.typed  # Objet spécifique au type de document
# Pour un avis d'impôts (type 28) :
result.typed.annee_revenue                # 2024
result.typed.reference_avis               # "1442569"
result.typed.declarant1                   # "DOE JOHN"
result.typed.revenue_fiscal_de_reference  # 30000
result.typed.adresse.full                 # "123 RUE DE PARIS, 75001 PARIS"
```

#### 5. **is_valid** : Validité de la signature
```python
result.is_valid  # True/False - Signature cryptographique vérifiée
```

### Exemple complet : Avis d'impôts (type 28)

```python
from fr_2ddoc_parser.api import decode_2d_doc

raw = "DC04FR000001FFFF23DC2801FR432,75<GS>44227801234567845202146RETI PATRICK<GS>4A310720224Y145 RUE JULLIARD/ZASPECIMEN/78320/LEVIS STNOM<GS>4163198<GS>47300112345678948RETISOPHIE<GS>4907019877654324V3542<GS>4W182<GS>4X3724<GS><US>6W76EBC3I2LWHBVGNNYTL34SC6V32S2GDCIQQZLZNMTKCHNVEUISJYUQH5WE3AJJICBNG3YMQ2NXXHP5ZHVOQE332R6TUJDHNOHQ6BI"

result = decode_2d_doc(raw)

# Vérifier le type de document
if result.header.doc_type == "28":
    avis = result.typed  # AvisImposition
    
    print(f"Année des revenus : {avis.annee_revenue}")
    print(f"Référence : {avis.reference_avis}")
    print(f"Déclarant : {avis.declarant1}")
    print(f"Revenu fiscal de référence : {avis.revenue_fiscal_de_reference} €")
    print(f"Nombre de parts : {avis.nombre_parts}")
    
    # Adresse
    if avis.adresse.full:
        print(f"Adresse : {avis.adresse.full}")
    else:
        print(f"Adresse : {avis.adresse.voie}, {avis.adresse.code_postal} {avis.adresse.commune}")
    
    # Signature valide ?
    if result.is_valid:
        print("✅ Signature valide")
    else:
        print("❌ Signature invalide")
```

### Gestion des erreurs

```python
from fr_2ddoc_parser.api import decode_2d_doc
from fr_2ddoc_parser.exception.exceptions import (
    TwoDDocFormatError,
    TwoDDocUnsupportedVersion,
    TwoDDocSignatureError
)

try:
    result = decode_2d_doc(raw_data)
except TwoDDocFormatError as e:
    print(f"Format invalide : {e}")
except TwoDDocUnsupportedVersion as e:
    print(f"Version non supportée : {e}")
except TwoDDocSignatureError as e:
    print(f"Signature invalide : {e}")
except ValueError as e:
    print(f"Erreur de validation : {e}")
```

## 📋 Types de documents supportés

| Type | Description | Classe typée |
|------|-------------|--------------|
| **28** | Avis d'impôts sur le revenu | `AvisImposition` |
| _Autres_ | Document générique | `GenericDoc` |

Pour ajouter de nouveaux types de documents, consultez le [CONTRIBUTING.md](CONTRIBUTING.md).

## 🔐 Vérification cryptographique

La bibliothèque vérifie automatiquement la signature ECDSA du 2D-DOC en utilisant :
- La **TSL (Trusted Service List)** ANTS embarquée dans le package
- L'algorithme détecté automatiquement (P-256, P-384 ou P-521)
- Le certificat correspondant au CA ID et Cert ID du header

La vérification se fait automatiquement lors de l'appel à `decode_2d_doc()`.

### Résolution automatique des certificats

Le `KeyResolver` charge automatiquement les certificats publics depuis le fichier **`tsl_signed.xml`** embarqué dans le package. Ce fichier contient la liste de confiance (Trusted Service List) ANTS au format ETSI TS 102 231.

**Processus de résolution :**

1. **Chargement de la TSL** : Au démarrage, le fichier `tsl_signed.xml` est parsé pour extraire tous les certificats X.509 des autorités de certification (CA) ANTS.

2. **Indexation intelligente** : Pour chaque certificat, plusieurs identifiants candidats sont générés :
   - 4/6/8 derniers caractères hexadécimaux du **numéro de série** du certificat
   - 4/6/8 derniers caractères hexadécimaux du **SKI** (Subject Key Identifier)
   - 4/6 premiers caractères de l'empreinte **SHA-1** de la clé publique (SPKI)

3. **Résolution lors du décodage** : Lors de la vérification, le `KeyResolver` :
   - Récupère le **CA ID** (ex: "FR06") et le **Cert ID** (ex: "FPE6") depuis le header DC04
   - Recherche le certificat correspondant dans l'index
   - Si un seul certificat existe pour ce CA, il est utilisé automatiquement (fallback)
   - Extrait la clé publique du certificat pour vérifier la signature ECDSA

**Exemple de résolution :**
```python
from fr_2ddoc_parser.crypto.key_resolver import local_key_resolver

# Résoudre une clé publique manuellement
public_key = local_key_resolver.resolve(ca_id="FR06", cert_id="FPE6")

# Lister les cert_id disponibles pour un CA donné
cert_ids = local_key_resolver.available_cert_ids("FR06")
print(f"Certificats disponibles pour FR06 : {cert_ids}")
# Exemple : {'FPE6', '1442', '569A', ...}
```

Cette approche permet une résolution robuste même si le `cert_id` dans le 2D-DOC utilise différentes stratégies d'identification (serial, SKI, ou empreinte).

## 🏗️ Architecture

```
fr_2ddoc_parser/
├── api.py              # Point d'entrée principal (decode_2d_doc)
├── parser/
│   ├── parser.py       # Parsing de la structure DC04
│   ├── spec.py         # Spécifications du format
│   └── helper.py       # Fonctions d'aide (conversions)
├── crypto/
│   ├── crypto.py       # Vérification de signature ECDSA
│   ├── key_resolver.py # Résolution des clés depuis la TSL
│   └── keys/
│       └── tsl_signed.xml  # TSL ANTS embarquée
├── type/
│   ├── base.py         # GenericDoc (fallback)
│   └── doc28_avis_impots.py  # Avis d'impôts (type 28)
├── model/
│   └── models.py       # Modèles de données (Decoded2DDoc, Header, etc.)
├── registry/
│   └── registry.py     # Registre des handlers de types
└── exception/
    └── exceptions.py   # Exceptions personnalisées
```

## 🧪 Tests

```bash
# Lancer tous les tests
poetry run pytest

# Tests avec verbose
poetry run pytest -v

# Tests d'un fichier spécifique
poetry run pytest tests/test_avis_impots.py

# Coverage
poetry run pytest --cov=fr_2ddoc_parser
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez [CONTRIBUTING.md](CONTRIBUTING.md) pour :
- Ajouter un nouveau type de document
- Corriger un bug
- Améliorer la documentation

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🔗 Ressources

- [Spécification 2D-DOC ANTS](https://ants.gouv.fr/Les-solutions/2D-Doc)
- [Format DC04](https://pub.ants.gouv.fr/2D-DOC/DOCUMENTATION/04_Specifications_Techniques/FranceTitres_DCAT_2D-DOC_V1_04_Specifications_Techniques_V.3.3.7.pdf?lang=fr)
- [TSL ANTS](https://pub.ants.gouv.fr/2D-DOC/V1/PRD/01_TSL/tsl_signed.xml?lang=fr)

## 💡 À savoir

### Extraction du DataMatrix

Cette bibliothèque **ne lit pas** les codes-barres depuis des images. Elle attend une chaîne de caractères déjà extraite.

Pour extraire le DataMatrix d'une image, utilisez une bibliothèque comme :
- **pyzbar** (recommandé)
- **pylibdmtx**
- **opencv + pyzbar**

Exemple avec pyzbar :
```python
from pyzbar.pyzbar import decode
from PIL import Image
from fr_2ddoc_parser.api import decode_2d_doc

# Lire l'image
img = Image.open("avis_impots.jpg")

# Extraire les DataMatrix
barcodes = decode(img)

for barcode in barcodes:
    if barcode.type == 'DATAMATRIX':
        raw_data = barcode.data.decode('utf-8')
        
        # Décoder le 2D-DOC
        result = decode_2d_doc(raw_data)
        print(result.typed)
```

### Format des dates

- Les dates dans le **header** sont au format `date` Python
- Les dates dans les **champs typés** sont au format `date` Python
- Les dates brutes dans `fields` sont des strings (format `DDMMYYYY`)

### Champs facultatifs

Certains champs sont optionnels selon le type de document. Les champs non présents auront la valeur `None`.

Les champs inconnus ou non mappés sont disponibles dans `typed.extras` (dict).
