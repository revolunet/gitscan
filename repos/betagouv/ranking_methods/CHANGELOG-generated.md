## Changelog : ranking_methods (derniers 30 jours)

### Résumé
Ce projet a récemment bénéficié d'optimisations significatives visant à réduire son empreinte mémoire. La suppression d'une dépendance lourde et la possibilité de rendre certaines dépendances optionnelles permettent de faciliter le déploiement et l'utilisation du projet, notamment dans des environnements aux ressources limitées.

### Évolutions techniques
- Suppression de la dépendance `berttopics` qui était particulièrement gourmande en ressources (4GB) (#9629822)
- Rendre les dépendances lourdes optionnelles, permettant une installation plus légère si certaines fonctionnalités ne sont pas requises (#e5d6ee0)
- Mise à jour du fichier `poetry.lock` et du fichier JSON des modèles (#25d0341)
