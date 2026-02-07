## Changelog : document-ia (derniers 30 jours)

### Résumé
Ce mois-ci, les améliorations se concentrent sur l'optimisation du traitement des documents et l'ajout de nouvelles capacités d'OCR.  Des corrections ont été apportées pour améliorer la gestion des préfixes S3 et la parallélisation des workers, permettant un traitement plus rapide et fiable des pièces justificatives. L'intégration de Deepseek OCR offre une alternative performante et a entraîné une simplification de l'interface utilisateur en supprimant les workflows rapides.

### Évolutions fonctionnelles
- Implémentation de l'OCR Deepseek, offrant une nouvelle option pour la reconnaissance de texte dans les documents. (#42)
- Simplification de l'interface utilisateur suite à la suppression des workflows rapides.
- Correction du format de préfixe S3 utilisé pour les datasets, améliorant la gestion et l'organisation des documents stockés. (#42)
- Correction du format de préfixe S3 lors de la création de datasets.

### Évolutions techniques
- Correction de la parallélisation des workers pour une meilleure utilisation des ressources et une accélération du traitement des documents. (#42)
