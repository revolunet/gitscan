# 💃 ADEGAL 🕺

> Automatisation de la Déclaration EGALité professionnelle “D’égale à égal”

Dépôt pour le [Hackathon DSN](https://www.numerique.gouv.fr/agenda/hackathon-declaration-sociale-nominative-dsn/) organisé par la Direction interministérielle du numérique.

## Description

Toutes les entreprises de plus 50 salariés (~40k) doivent déclarer annuellement leur index d'égalité professionnelle, ce qui les oblige à se replonger dans le détail de leurs données RH pour en extraire les données spécifiques demandées par l'administration afin de pouvoir calculer l'index d'égalité H/F via une [plateforme dédiée](https://egapro.travail.gouv.fr/).

Ce projet a pour but de calculer l'index d'égalité pro d'une entreprise **automatiquement** à partir de la DSN.

## Solution

1. Extraction des données DSN nécessaires de l'entreprise via SQL + Python
2. Envoi des paramètres au moteur de calcul [publi.codes](https://publi.codes)
3. Restitution et explication des résultats

## Impact envisagé

- réduire la charge des entreprises avec le DLNUF : des dizaines de milliers d'heures gagnés par an !
- réduire la charge de l'administration quant à la gestion de la plateforme et des déclarations
- améliorer la qualité et couverture des index (on part des données réelles de la DSN)
- publier régulièrement les données sur data.gouv

## Ressources

- La [présentation jury](./Présentation%20ADEGAL.pdf)
- [Le jupyter notebook](./egapro_python/egapro.ipynb)
- Un pad de travail pour [quelques notes](https://pad.numerique.gouv.fr/E6f6QzEYTySMdUVbZEa0Mw?both#Variables-Publicodes-)
- [Les requêtes de test](./drafts.md)
- Le [code de l'algorithme de calcul de l'index](./front/src/publicodes/modele.yaml) et [les paramètres nécessaires](./parametres-publicodes.md)

## Equipe

- Christiphe Cuq, URSSAF
- Mélanie Ullmo, DINUM
- Jeremy Sirugue, URSSAF
- Alain Foret, [ZenDSN](https://zendsn.com/)
- Alexandre Caruso, [ZenDSN](https://zendsn.com/)
- Arnaud Robin, beta.gouv.fr
- Julien Bouquillon, beta.gouv.fr
- Maxime Golfier, Fabrique ministère sociaux

## [Facultatif] Retours sur la qualité des données exploitées

- Une interface dédiée à la doc/schemas de la base aurait été bienvenue
- Quelques IDs d'entreprises ou assurés de "référence" pourraient être utiles pour tester nos requêtes sur des cas "propres"; On ne sait pas si on tombe sur des cas "éxotiques" ou "obsolètes" qui peuvent nous faire douter.
