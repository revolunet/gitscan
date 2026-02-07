## Changelog : api-engagement (derniers 30 jours)

### Résumé
Cette mise à jour apporte des améliorations significatives à l'accessibilité de l'application, notamment avec l'ajout de composants et de fonctionnalités respectant les normes RGAA. Des corrections de bugs et des optimisations de performance ont également été apportées, en particulier au niveau de la gestion des connexions à la base de données et de l'importation des missions. Enfin, l'infrastructure d'analyse des données a été revue et améliorée.

### Évolutions fonctionnelles
- Ajout de composants d'interface utilisateur accessibles (tooltips, tabs, skiplinks) respectant les normes RGAA (#699, #712, #719, #720).
- Amélioration de l'affichage des données dans le tableau de bord, notamment pour les graphiques empilés (#723).
- Correction d'un bug empêchant la création de campagnes en double (#727).
- Amélioration de la gestion de la modération des organisations et des missions dans l'interface utilisateur.
- Ajout de la possibilité d'ajouter des attributs personnalisés à l'écran de temps réel (#704).
- Ajout de support pour l'ID client d'événement (#714).
- Ajout de nouveaux attributs pour le service civique dans les analyses (#700).
- Amélioration de l'affichage des informations de mission avec les informations de l'organisation (#702).

### Évolutions techniques
- Résolution de problèmes de connexion au pool Prisma et de consommation de mémoire (#726).
- Suppression d'un pipeline legacy dans les jobs (#706).
- Refactorisation de l'importation des missions pour améliorer les performances (#693).
- Migration de la logique de gestion des logos de domaine vers le schéma de mission (#692).
- Suppression de jobs et de modèles d'analyse obsolètes (#630, #681).
- Mise à jour de la gestion des connexions PostgreSQL pour éviter les fuites (#665).
- Amélioration de la détection des changements de mission lors de l'importation (#701, #689).
- Ajout de workflows Claude pour la revue de code et l'amélioration de la qualité du code (#716, #717).
- Mise à jour des dépendances (Express, eslint, jsdom, etc.) (#651, #652, #653, #654, #655, #695, #696).

### Autres changements
- Suppression de l'ancien champ d'état du tableau de bord des jobs (#711).
- Uniformisation de l'unicité du tableau de bord des missions (#709).
- Correction d'un problème d'incompatibilité de couleurs dans l'application (#705).
- Amélioration du monitoring des statistiques LinkedIn (#726).
- Ajout d'une image par défaut pour le logo du domaine (#705).
- Suppression de la configuration autoscaling en production (#716).
- Mise à jour de la documentation et du changelog.
