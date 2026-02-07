## Changelog : assistant-declaration (derniers 30 jours)

### Résumé
Ce changelog présente les récentes améliorations apportées à l'assistant de déclaration. Les modifications se concentrent sur la correction de bugs liés à l'importation de données depuis certains logiciels de billetterie (Billetweb) et la gestion des événements, ainsi que sur l'amélioration de la documentation interne pour faciliter le développement futur.

### Évolutions fonctionnelles
- Correction d'un bug sur Billetweb où le type de paiement était parfois vide pour les billets gratuits, empêchant le préremplissage correct. (#20)
- Correction d'un problème lors de la suppression d'une série d'événements qui empêchait la requête de s'effectuer correctement.

### Évolutions techniques
- Mise à jour de la documentation interne pour décrire les deux fonctionnalités principales du projet, facilitant l'onboarding de nouveaux développeurs.
- Ajout d'informations sur les outils utilisés dans la documentation.

### Autres changements
- Correction d'un lien incorrect dans le fichier README concernant le fichier `security.txt`.
- Mise à jour du composant `OrganizationPage.tsx` (détails non spécifiés).
