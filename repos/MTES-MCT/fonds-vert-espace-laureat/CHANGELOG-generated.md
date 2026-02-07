## Changelog : fonds-vert-espace-laureat (derniers 30 jours)

### Résumé
Cette mise à jour améliore l'expérience utilisateur en permettant un filtrage plus précis des dossiers de subvention, en actualisant automatiquement les données et en affichant des informations plus claires sur l'état d'avancement des projets. Des corrections ont également été apportées pour gérer correctement les nouveaux états de paiement renvoyés par l'API.

### Évolutions fonctionnelles
- Possibilité de filtrer les dossiers de subvention DS par date de création (#1d3bbc2)
- Actualisation automatique des données lorsque l'onglet du navigateur reprend le focus (#a5ac3b1, #95b9e6a, #6b79a47)
- Affichage d'un indicateur de rafraîchissement pendant le rechargement des statuts (#a5ac3b1)
- Ajout d'un fallback pour l'état d'impact si l'API Fonds Vert ne renvoie pas d'information (#519edc9)
- Amélioration de l'affichage et des actions disponibles pour les statuts des projets (#3ea4437, #9e8582b)
- Ajout d'un lien pour mettre à jour le statut d'un projet lors du pré-remplissage de l'impact (#9e8582b)
- Affichage de la date de dernière modification et du statut d'avancement du projet (#20d40a5)
- Gestion du nouvel état "sans paiement" renvoyé par l'API (#9119a14)

### Évolutions techniques
- Refactorisation des fonctions d'aide de la page de dossier pour une meilleure organisation du code (#3f5f56e)
- Sélection du dossier d'impact récent et limitation de la recherche aux 4 dernières heures (#262cf54)
- Suppression de l'état "revu" sur le formulaire de mise à jour (#8e59f75)
- Utilisation des timestamps DS pour l'affichage de l'état d'impact dans la barre latérale (#74392eb)

### Autres changements
- Mise à jour des paquets (packages) du projet (#009c029)
