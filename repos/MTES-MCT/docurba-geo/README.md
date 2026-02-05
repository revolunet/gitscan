# Guide creation du referentiel Docurba

## Étape 1 - Télécharger les données régionales de Banatic

- Rendez-vous sur : [https://www.banatic.interieur.gouv.fr/export](https://www.banatic.interieur.gouv.fr/export).
- Sélectionnez **"Intercommunalité"** puis l’échelon **"Export National ou Régional"**.
- Téléchargez chaque région individuellement. Le fichier national est trop volumineux pour être traité en une seule fois.
- Placez tous les fichiers `.xlsx` téléchargés dans le dossier suivant : `inputs/xlsx/Membres_regions`.

---

## Étape 2 - Conversion des fichiers XLSX en JSON
- Assurez-vous de créer un dossier `inputs/json` avant de lancer le script.
- Lancez le script `convertXlsxToJson.js` pour convertir les fichiers `.xlsx` en JSON.

---

## Étape 3 - Exporter les codes SIREN des communes

- Sur [Banatic Export](https://www.banatic.interieur.gouv.fr/export), sélectionnez :
  - Périmètre des données : **Zone géographique**,
  - Échelon : **France**,
  - Type d’information : **Données de toutes les communes de France**.
- Dans les données à sélectionner :
  - **Indispensables** : Code INSEE et N° SIREN.
  - **Dans le futur** : On pourrait être intéresser par des méta-données comme les zonages (montagne, quartiers prioritaires, etc.).
- Téléchargez le fichier `.xlsx` et exportez la feuille en `.csv` avec un logiciel compatible dans `inputs/csv/communes_siren.csv`.

---

## Étape 4 - Télécharger le COG

- Téléchargez les fichiers suivants :
  1. [Liste des communes](https://www.insee.fr/fr/information/2560452) (format : CSV) dans `inputs/csv/communes_2024.csv`
  2. [Base des EPCI](https://www.insee.fr/fr/information/2510634) (format : XLSX) dans `inputs/csv/Composition_communale-Table 1.csv`
  3. [Base des EPT](https://www.insee.fr/fr/information/2510634) (format : XLSX) dans `inputs/csv/Composition_communale-Table_EPT.csv`
- Pour les EPCI et les EPT, exportez les feuilles de composition communale en format `.csv` en supprimant les 5 premières lignes.

---

## Étape 5 - Lancer le script `convertCSVInputsToReferentiel.js`

- Avec une variable d'environnement `SUPABASE_ADMIN_KEY`.
- Ce script est nécessaire pour lire les procédures.  
  > Objectif : Si Banatic n'indique pas une collectivité comme porteuse mais qu’il existe une procédure sur ce périmètre, cette collectivité doit apparaître dans le référentiel de recherche/dashboard.
