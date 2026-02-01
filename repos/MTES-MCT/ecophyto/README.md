# bd-recherche-ecophyto
Pesticides - Projets de recherche


# Journal

26/02/2021
* Mise à jour de l'intitulé ministère
* Mise à jour du logo marianne
* Mise à jour de l'inventaire
* Ajout date de mise à jour
* Correction champ "subvention2" dans index.html
* Enregistrement DNS en CNAME



# Mode opératoire pour mettre à jour les données

* Exporter les données en CSV (veiller à ce que les textes soient protégés par des double-quotes).
* Vérifier s'il y a des colonnes ou lignes indésirables (vides). Dans ce cas les supprimer et sauvegarder de nouveau en CSV.
* Remplacer les noms des colonnes par la liste ci-dessous
* Vérifier que le fichier est au format UTF8 (avec NotePad++). Le convertir si besoin.
* Convertir le CSV en JSON (cf. outil csvjson)
* Remplacer tout le contenu du bdphyto.json par le résultat de la conversion (copier/coller)


## Liste des variables pour le CSV

"ID";"SIGLE";"TITRE";"RESUME";"PROGRAMME";"MOTSCLEFS";"ORGANISME";"PARTENAIRES";"ANNEE_DEBUT";"ANNEE_FIN";"ETAT";"FINANCEUR1";"FINANCEUR2";"APPEL";"SUBVENTION1";"SUBVENTION2";"COUTPROJET";"RESULTATS"


## Lien pour la transformation CSV -> JSON

https://csvjson.com


## URL 

https://bd-recherche-ecophyto.developpement-durable.gouv.fr/




