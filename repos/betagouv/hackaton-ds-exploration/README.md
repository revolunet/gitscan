# Exploration des données Démarches Simplifiées

[Document résumé d'analyse](https://github.com/betagouv/hackaton-ds-exploration/tree/main/resume%20analyse.md)

En résumé pour ceux qui ont la flemme de lire : 
- [Résumé des résultats de recherches](https://github.com/betagouv/hackaton-ds-exploration/tree/main/search_summary.csv)
- [Séquences de 2 mots pondérées](https://github.com/betagouv/hackaton-ds-exploration/blob/main/words_analysis/sequences_of_2_words_-_weighted.json)

## Requirements & docs

Créé avec `ruby 3.0.2p107`

Le json de données est disponible [sur data.gouv.fr](https://www.data.gouv.fr/fr/datasets/descriptif-des-demarches-publiees/)

La description des champs est disponible [ici](https://www.demarches-simplifiees.fr/graphql/schema/index.html#definition-ChampDescriptor)


## Usage

Il faut avoir le jeu de données dézippé à côté du dossier `hackaton-ds-exploration` et lancer les commandes depuis le dossier `hackaton-ds-exploration` pour qu'elles fonctionnent.

## Compter les séquences de N mots parmi les labels et descriptions des pièces jointes

```sh
ruby get_ngrams.rb
```

[→ Voir les résultats](https://github.com/betagouv/hackaton-ds-exploration/tree/main/words_analysis)

Produit 4 fichiers pour compter simplement les mots :
- `words_analysis/sequences_of_1_words.json` Compte tous les mots un par un
- `words_analysis/sequences_of_1_words.json` Compte toutes les paires de mots
- `words_analysis/sequences_of_1_words.json` Compte tous les paquets de 3 mots
- `words_analysis/sequences_of_1_words.json` Compte tous les paquets de 4 mots

Et 4 autres fichiers pour compter les mots _pondérés par le nombre de dossiers_:
- `words_analysis/sequences_of_1_words_-_weighted.json` Somme les dossiers avec chaque mot
- `words_analysis/sequences_of_1_words_-_weighted.json` Somme les dossiers avec chaque paire de mots
- `words_analysis/sequences_of_1_words_-_weighted.json` Somme les dossiers avec chaque groupe de 3 mots
- `words_analysis/sequences_of_1_words_-_weighted.json` Somme les dossiers avec chaque groupe de 4 mots

On ignore les mots "inutiles" de la liste contenue dans [app/french_stop_words.yml](https://github.com/betagouv/hackaton-ds-exploration/blob/main/app/french_stop_words.yml)

On ignore aussi un max de caractères de ponctuations, ainsi que les chiffres (voir `Ngrams::SPLIT_REGEX`)



## Rechercher parmi les labels et descriptions des pièces jointes

Accepte des regex en argument.

Pour chercher parmi les pièces jointes :

```sh
ruby search.rb "quotient familial"
```
Produit un fichier `search_attachments/{query}.json`

---
Pour chercher parmi les champs non piècesjointes :

```sh
ruby search.rb "effectifs" all
```

Produit un fichier `search_non_attachments/{query}.json`


---
Pour chercher en masse parmi les pièces jointes :
```sh
ruby bulk_search.rb csv_file
```
A besoin d'une colonne `regex`. Utilise par défaut le fichier `./bulk_searches.csv`.


### Recherches effectuées

[→ Voir les résultats](https://github.com/betagouv/hackaton-ds-exploration/tree/main/search_attachments)

En s'inspirant des plus gros résultats de séquences de mots (principalement `sequences_of_2_words_-_weighted.json`), j'ai effectué des recherches dont les résultats sont présents dans le dossiers `search_attachments`. 

### Produire le résumé des recherches

Effectuer une recherche met aussi à jour le résumé des recherches dispo dans [search_summary.csv](https://github.com/betagouv/hackaton-ds-exploration/blob/main/search_summary.csv).

On peut aussi le générer à part avec :

```sh
ruby search_summary.rb
```