# Outil de génération de situation OpenFisca à partir d'un XML de demande de logement social

Des informations techniques sont disponibles à [la page suivante](http://sne.info.application.logement.gouv.fr/cahier-des-interfaces-gestion-partagee-de-la-a492.html).

## Installation

Les commandes suivantes permettent l'installation de ce paquet :
```bash
git clone https://github.com/betagouv/openfisca-demande-logement-social.git &&
cd openfisca-demande-logement-social &&
virtualenv .venv &&
source .venv/bin/activate &&
pip install --editable .
```

## Usages

### Pas à pas

`python OpenFisca_demande_logement_social/script.py generate OpenFisca_demande_logement_social/examples/JDD_OPENFISCA.XML` permet de générer un payload JSON compréhensible par l'API Web d'OpenFisca. Ce payload correspond à une demande de calcul des aides au logement.

`python OpenFisca_demande_logement_social/script.py generate OpenFisca_demande_logement_social/examples/JDD_OPENFISCA.XML > request.json` permet de sauvegarder dans le fichier `request.json` le payload JSON.

`curl -X POST https://fr.openfisca.org/api/v21/calculate -d @request.json --header 'Content-Type: application/json'` permet d'utiliser l'instance publique de l'API Web d'OpenFisca (avec OpenFisca-France) pour faire le calcul.

Le résultat du calcul peut là encore être sauvegardé avec un `>` par exemple `curl -X POST https://fr.openfisca.org/api/v21/calculate -d @request.json --header 'Content-Type: application/json' > response.json`.

Enfin pour extraire le montant des aides au logement calculé on peut utiliser la commande suivante :
`python OpenFisca_demande_logement_social/script.py extract response.json`


### Tout à la fois

`python OpenFisca_demande_logement_social/script.py generate OpenFisca_demande_logement_social/examples/JDD_OPENFISCA.XML | curl -X POST https://fr.openfisca.org/api/v21/calculate -d @- --header 'Content-Type: application/json' | python OpenFisca_demande_logement_social/script.py extract -`


## Correspondances

Code    Libellé
civilite
1   Monsieur
2   Madame
nationalite
1   Française
2   Union Européenne
situationFamiliale
M   Marié
typeContratTravail
CDI CDI
ModeleLogement
LP  Locataire dans le privé
sexe
M   Masculin
F   Féminin
lienParente
E   Enfant
coparentalite
G   Garde alternée
D   Droit de visite
lienDemandeur
M   Conjoint
categorieLogement
A   Appartement
typeLogementActuel
T3  3 pièces
