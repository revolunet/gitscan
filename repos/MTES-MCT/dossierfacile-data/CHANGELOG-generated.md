## Changelog : dossierfacile-data (derniers 30 jours)

### Résumé
Ce changelog présente les améliorations apportées au projet dossierfacile-data au cours des 30 derniers jours. Les modifications se concentrent sur l'amélioration de la gestion des comptes locataires, la gestion des motifs de refus et l'ajout de nouvelles informations au rapport hebdomadaire des opérations par validation. Ces améliorations visent à fournir des données plus précises et complètes pour l'analyse et le suivi des dossiers.

### Évolutions fonctionnelles
- Amélioration de la gestion des comptes locataires supprimés : une logique a été ajoutée pour gérer correctement les comptes locataires qui ont été supprimés (#56).
- Gestion améliorée des motifs de refus : en cas d'informations manquantes, le système revient aux options de refus par défaut (#55).
- Ajout d'informations sur le funnel, l'origine et le statut des locataires au rapport hebdomadaire des opérations par validation (#54).

### Évolutions techniques
- Refactorisation des tests : le répertoire `tests` a été renommé en `data_tests` dans les modèles YAML pour une meilleure organisation (#58).

### Autres changements
Aucun autre changement significatif à signaler.
