DiDoscalim
================

<!-- README.md is generated from README.Rmd. Please edit that file -->
<!-- badges: start -->

[<img src="https://www.repostatus.org/badges/latest/wip.svg"
target="_blank"
alt="Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public." />](https://www.repostatus.org/#wip)
<!-- badges: end -->

Un package R pour :

- générer des fichiers CSV au format DiDo (CSV augmenté)
- automatiser l’alimentation l’outil de diffusion de données DiDo du
  [CGDD/SDES](https://www.statistiques.developpement-durable.gouv.fr/).

Ce package est en cours de développement.

## Installation

Vous pouvez installer ce package depuis GitHub :

``` r
# Install from GitHub
library(devtools)
devtools::install_github("mtes-mct/didoscalim")

library(didoscalim)
```

## Exemple

Générer un fichier CSV augmenté à partir d’un fichier CSV normal et le
charger dans un dataset.

``` r
library(didoscalim)

params = list(
  OPERATEUR = list(description = "Nom de l'opérateur"),
  FILIERE = list(description = "Filière"),
  CODE_CATEGORIE_CONSOMMATION = list(description = "Catégorie de la consommation"),
  CODE_SECTEUR_NAF2 = list(description = "Code NAF à 2 positions du secteur (NAF rev2 2008)", type = "naf_division"),
  CONSO = list(description = "Consommation (en MWh)", unit = "MWh")
)

temp_file <- tempfile(fileext = ".csv")
dido_read_delim(dido_example("exemple.csv")) %>%
  dido_csv(params = params, cog_year = "2019") %>%
  dido_write_csv(temp_file)
```

L’intégrer dans DiDo :

``` r
dataset <- add_or_update_dataset(
  title = "Un jeu de données fictif",
  description = "Un jeu de données énergie fictif",
  topic = "Transports",
  temporal_coverage_start = "2020-01-01",
  temporal_coverage_end = "2020-12-31",
  frequency = "annual",
  frequency_date = "2021-10-10"
)

add_or_update_datafile(
  dataset = dataset,
  file_name = temp_file,
  title = "Données de consommation fictive – gaz – année 2020",
  description = "Consommations annuelles et nombre de points de livraison de chaleur et froid, par secteur d'activité",
  temporal_coverage_start = "2020-01-01",
  temporal_coverage_end = "2020-12-31",
  millesime = "2021-10"
)
```

## Configuration

La configuration de didoscalim se fait dans votre .Renviron. Vous
trouverez la documentation nécessaire dans la vignette [utiliser les
environnements](articles/les-environnements.html)

## Documentation

Vous pouvez trouver l’ensemble de la documentation sur [la page du
projet](https://mtes-mct.github.io/didoscalim/) et en particulier :

- [comment générer un fichier
  augmenté](https://mtes-mct.github.io/didoscalim/articles/csv-augmente.html)
- [comment charger et/ou mettre à jour des données dans
  DiDo](https://mtes-mct.github.io/didoscalim/articles/charger-et-mettre-a-jour-des-donnees.html)
- [utiliser les
  environnements](https://mtes-mct.github.io/didoscalim/articles/les-environnements.html)

## Pour les développeurs

Avant de publier une version assurez-vous que `check()` fonctionne

``` r
source("populate.R")
check()
```

Pour gagner du temps vous pouvez lancer séparément les tests unitaires
et de couverture :

``` r
library(devtools)
test()
library(covr)
report()
```

Ainsi que les exemples :

``` r
run_examples()
```

Tester sous d’anciennes versions :

``` bash
docker run -it -e TZ=Europe/Paris -v $HOME/.Renviron:/root/.Renviron -v /etc/hosts:/etc/hosts -v $(pwd):/root/didoscalim rocker/tidyverse:4.1 Rscript /root/didoscalim/rocker_test.R
```

### Les tests

Les tests de ce package nécessitent pour le moment un environnement de
développement DiDo configuré pour tester les interactions avec l’API.

### Documentation en ligne

La documentation ne peut pas (encore ?) être généré par les github
actions, il faut donc pour le moment générer le site statiquement à
partir d’un poste qui a accès à un environnement DiDo de développement.

Si vous avez modifié la documentation, avant de pousser une nouvelle
vous devez la valider en local :

``` r
source('populate.R')
devtools::build_readme()
devtools::document()
devtools::build_vignettes()
devtools::build_site()
```

Évidemment lancer un `R CMD check()`

Et quand vous êtes satisfait, videz la base de test, chargez les données
de base en lançant `populate.R` puis la commande qui publiera le site
sur les github pages :

``` r
source('populate.R')
library(pkgdown)
deploy_to_branch()
```
