## Changelog : ecobalyse (derniers 30 jours)

### Résumé
Cette version apporte des améliorations significatives à l'explorateur de données, notamment l'affichage des impacts par pays et l'intégration de données CTCP pour les emballages. Des corrections de bugs ont été implémentées pour améliorer la stabilité et l'expérience utilisateur, notamment concernant la gestion des sessions et l'affichage des données comparatives. Des mises à jour de données et des optimisations techniques ont également été réalisées.

### Évolutions fonctionnelles
- Ajout de l'affichage des ECS (émissions de gaz à effet de serre) pour les invités dans l'explorateur de processus (#1748).
- Intégration de la sélection d'emballages CTCP (#1697).
- Ajout des pays à l'explorateur d'objets/VELI (#1724).
- Possibilité de désélectionner tous les éléments dans le comparateur (#1695).
- Amélioration de l'alignement des impacts dans le simulateur d'objets (#1720).
- Ajout de nouveaux processus d'emballage (#1685).
- Correction de l'affichage de la légende du graphique comparatif lors de l'exportation (#1704).
- Correction d'un bug d'affichage des impacts détaillés pour les objets/VELI (#1709).

### Évolutions techniques
- Refactorisation : remplacement de "step" par "stage" dans le code base (#1738).
- Implémentation de l'utilisation de "stage" pour les objets et VELI (#1710).
- Ajout de la mise en forme automatique du code Elm via un hook git pre-commit (#1736).
- Mise à jour des dépendances Node.js (#1737).
- Distinction des impacts de la phase de matériau et de transformation dans le comparateur (#1734).
- Préservation de l'ordre des transformations (#1700).
- Contrainte de la hauteur des cellules de commentaires dans l'admin des processus (#1712).
- Suppression de dépendances npm inutilisées et obsolètes (#1698).

### Autres changements
- Ajout d'une politique de confidentialité en Markdown (#1747).
- Modification de l'accord de conditions d'utilisation (#1627).
- Documentation : la documentation de l'API n'est plus versionnée (#1742).
- Mise à jour des exemples VELI (#1716).
- Mise à jour des données : lin, élasthanne et laine (#1696).
- Mise à jour de la mixité électrique par défaut vers celle de l'Inde (#1702).
- Correction de l'URL partageable manquante d'un slash (#1741).
- Publication de la version 8.3.0 (#1638).
