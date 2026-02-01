# Fichier de suivi DTNUM

Ce programme sert à mettre à jour le fichier de suivi DTNUM avec les données de DataPass, via l'API DataPass dont voici [la documentation](https://datapass.api.gouv.fr/developpeurs/documentation).


## Description de l'algorithme

Voir [le fichier décrivant l'algorithme](./documentation_algorithme.md) de mise à jour du fichier de suivi DTNUM avec les données de DataPass.


## Instructions pour installer le projet

1. Create a virtual environment:
```bash
python3 -m venv venv
```

2. Activate the virtual environment:
- On Linux/Mac:
```bash
source venv/bin/activate
```
- On Windows:
```bash
.\venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Add environnment variables
```
# Si besoin de proxy, typiquement pour la dgfip
PROXY_URL

# Credentials d'accès à l'API Datapass à récupérer dans le profil utilisateur sur Datapass
DATAPASS_CLIENT_ID
DATAPASS_CLIENT_SECRET
```

## Usage via ligne de commande

### Exécuter le programme

Placer le fichier de suivi dans le dossier `sources`, et le renommer `fichier_suivi_dtnum.ods`

Exécuter le programme avec :
```bash
python3 main.py
```

Le programme génèrera un fichier avec un nom de la forme `20250519-184529-fichier-suivi-maj.xlsx` dans le dossier `sources`.

### Lancer les tests

```bash
pytest test_update_suivi_dtnum.py
```

## Usage IHM via executable windows

Lancer le script de génération de l'exe avec : 
```bash
make_app.bat
```

# Initialisation du fichier post-migration

Fait le 19/05/2025 entre la DINUM et la DTNUM

1. Récupérer la dernière version du fichier de suivi
2. Renommer la colonne "N° DataPass" en "N° DataPass v1"
3. Renommer la colonne "Date de création / réception" en "Date de réception"
4. Renommer la colonne "Date de dernière modification" en "Date de dernière soumission ou instruction"
5. Ajouter la colonne "Erreurs"
6. Renommer la colonne "N° DataPass rattaché (BAS ou FC)" en "N° DataPass FC rattaché"

7. Insérer les ids de `matched_ids_post_bascule.csv` dans les colonnes `N° DataPass v1` et `N° Demande v2` et	`N° Habilitation v2`
8. Insérer les dates de `suivi_dtnum_dates.csv` dans les colonnes `Date de réception` et	`Date de dernière soumission ou instruction`
9. Générer des credentials d'accès à l'API pour un user dgfip -> Quel user ? (maimouna ?) (à faire par Valentin)

10. Faire tourner le script `main.py` et le fichier de suivi pour générer un nouveau fichier à jour
