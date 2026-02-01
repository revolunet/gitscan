# explainable-demo

Un dépôt pour proposer et générer une "Carte de modèle" lors de chaque partage d'un modèle (ces cartes de modèles seraient versionnées et retranscriraient l'évolution du modèle), afin de faciliter sa réutilisation et améliorer la qualité des réutilisations.

## Coment contribuer

Voir le [guide de contribution](CONTRIBUTING.md)

## Méthodologie 

Les champs proposés ici constituent un ensemble d'informatins utiles aux réutilisateurs futurs des modèles, pour leur indiquer la license du modèle, ses finalités et cas d'usage pertinents (ou non), son historique de conception, les choix de paramètres, les sources de données, le contact des équipes maintenant le modèle et le contact des équipes instanciant le modèle, etc.

## Motivations

Rendre le modèle transparent au grand public ne se limite pas à l’analyse d’explicabilité, mais repose sur une suite d’exigences à respecter tout au long de la chaîne de traitement, parmi lesquelles sans exhaustivité :

- La publication des codes sources des traitements effectués
- La constitution d’une documentation décrivant précisément les hypothèses implicites de la chaîne de traitement
- L’audit des données d’entrée utilisées lors de l’apprentissage et en production : sont-elles représentatives du cadre réel d’application du modèle ? Le seront-elles encore dans le futur ?
- L’audit des poids du modèle
- L’audit des prédictions de son modèle : comprend-t-il un biais systématique que je souhaite combattre ? Comment diagnostiquer et mesurer vis-à-vis de tel ou tel groupe ?
- L’anticipation des possibles risques de fuite de données personnelles

## Projets open source et articles liés à ce dépôt

[Model Cards for Model Reporting, *Mitchell et alii (2019)*](https://arxiv.org/abs/1810.03993)

## Contact

La maintenance est effectuée par Etalab, au sein de la Direction interministérielle du numérique (DINUM) française. Mais le dépôt est ouvert aux PR et à toute forme de contribution.

[lab-ia@data.gouv.fr](mailto:lab-ia@data.gouv.fr)
