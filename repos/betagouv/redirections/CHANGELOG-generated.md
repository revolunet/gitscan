## Changelog : redirections (derniers 30 jours)

### Résumé
Ce changelog détaille les modifications apportées à l'outil de gestion de redirections au cours des 30 derniers jours. Les mises à jour concernent principalement l'ajout et la modification de configurations de redirection pour différents services et domaines, notamment pour les plateformes API et EVA, ainsi qu'une redirection pour standards.incubateur.net.

### Évolutions fonctionnelles
- Ajout de redirections pour les services MRS (Ministères) (#66).
- Redirection de `standards.incubateur.net` vers `standards.beta.gouv.fr` (#69).
- Modification des URLs de redirection dans la configuration principale (#71).
- Mise à jour des paramètres proxy pour `/jeu location` (#72).

### Évolutions techniques
- Ajout de nouvelles configurations serveur pour API et EVA (#70).
- Ajout de configurations EVA pour les redirections (#68).
- Suppression de la configuration serveur pour `eva.incubateur.net` (#75).
- Mise à jour de la configuration des serveurs (`servers.conf.erb`) à plusieurs reprises (#73, #74).
