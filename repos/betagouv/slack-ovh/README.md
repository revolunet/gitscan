# Slack-ovh

## Pourquoi ?

L'objectif de cette interface est de démocratiser l'accès aux mailing-listes OVH que nous utilisons pour notre organisation.
Toute personne appartenant à l'organisation doit pouvoir:
 - obtenir la liste exhaustive et à jour des listes existantes
 - gérer son inscription à une liste

Chaque modification est enregistrée dans le chan `#incubateur-secretariat` (cf. config.js).

## Commandes

commande                                               | description
:------------------------------------------------------|:------------------------------------------
`/emails list`                                         | liste des listes de diffusions existantes
`/emails list emaildelaliste`                          | liste des personnes dans la liste
`/emails join emaildelaliste nom.prenom@beta.gouv.fr`  | rejoindre la liste
`/emails leave emaildelaliste nom.prenom@beta.gouv.fr` | quitter la liste
