## Installation de l'environnement

### Installation avec conda

Vérifier l'installation de conda avec `conda --version`, puis créer un environnement `formIAble` avec: <br>
```
conda create -n formIAble -y python=3.8
conda activate formIAble
pip install -r requirements.txt
```

### Installation de paddleOCR

Python 3.8 est requis.

#### MacOS: installation de PyMuPDF

Vérifier l'installation de homebrew: `brew help` <br>
Pour installer homebrew: https://brew.sh <br>
Puis installer les dépendances:
```
brew install swig freetype
pip install PyMuPDF
``` 

#### Ubuntu (notamment pour les images du [SSP Cloud](https://www.sspcloud.fr)): installation des librairies système
```
sudo apt-get update && sudo apt-get -y install libgl1
sudo apt-get -y install libglib2.0-0
```

#### Installation de cargo (prérequis):

Vérifier l'installation de cargo avec `cargo help` <br>
Si cargo n'est pas installé, l'installer avec:
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

#### Installation de paddlepaddle (prérequis):

Installation via pip:
```
pip install paddlepaddle
```

#### Installation de paddleocr (dernière étape)

Installation via pip:
```
pip install paddleocr
```

### Installation de MMOCR

```
pip install openmim
mim install mmengine
mim install mmcv
mim install mmdet
mim install mmocr
```

## Annotation d'images

### Pré-annotation avec Doctr

`python3 -m src.data.labeling.label_images projet-formiable/data/ls_data/ projet-formiable/data/ls_prelabels/`

## Génération de formulaires synthétiques

Pour générer des formulaires synthétiques, 
il faut partir d'un formulaire vide comme [celui-ci](data/empty_forms/non-editable/cerfa_14011_03.png) et spécifier la liste des champs à remplir, 
en précisant les coordonnées et le type de chaque champ comme dans [ce fichier json](data/elements_to_fill_forms/non-editable/cerfa_14011_03_id.json).
<br>
Le script suivant permet de lancer la génération de formulaires synthétiques:
```
python src/util/generate_cerfa.py
```

## Classification des formulaires - exemples

Pour ajouter une référence
```
python "src/models/classify-form/PaddleOCR_TextMatch/classify.py" add_form_reference "data/synthetic_forms/cerfa_14011_03_fake1.jpg" "src/models/classify-form/PaddleOCR_TextMatch/references_accepted.txt"
```
Pour extraire une référence
```
python "src/models/classify-form/PaddleOCR_TextMatch/classify.py" get_form_reference "data/synthetic_forms/cerfa_14011_03_fake1.jpg"
```
Pour classer un formulaire (extraction de la référence puis recherche dans le fichier `references_accepted.txt`):
```
python "src/models/classify-form/PaddleOCR_TextMatch/classify.py" classify_form_image "data/synthetic_forms/cerfa_14011_03_fake1.jpg" "src/models/classify-form/PaddleOCR_TextMatch/references_accepted.txt"
```

## Transformation affine automatique

Pour lancer un exemple.
```
python "src/models/auto-rotation-translation/PaddleOCR.py"
```
Appliquer le paramètre `cls = False` permet de supprimer la détection automatique du sens du texte et d'améliorer les performances, mais cela rend impossible la détection de documents dont le sens est inversé.
