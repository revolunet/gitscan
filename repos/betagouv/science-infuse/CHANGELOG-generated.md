## Changelog : science-infuse (derniers 30 jours)

### Résumé
Les dernières améliorations de science-infuse se concentrent sur l'enrichissement des fonctionnalités d'aide à la création de contenu pédagogique. Les enseignants peuvent désormais générer des quiz interactifs, incluant des types de questions variés comme les mots croisés et les questions à trous, et affiner la sélection du contexte pour la génération de contenu assistée par IA. Des améliorations de l'interface ont également été apportées pour faciliter la navigation et le chargement de fichiers.

### Évolutions fonctionnelles
- Ajout d'un sélecteur de portée de chunk de document (`DocumentChunkScopePicker`) pour une sélection précise du contexte lors de la génération de contenu par l'IA. (#47e12aea)
- Implémentation de la génération de quiz avec des composants dynamiques et intégration API. (#b48e73cd)
- Ajout de la possibilité de créer des mots croisés. (#c6aacb6c)
- Ajout de la possibilité de créer des questions à trous. (#c24ff49f)
- Simplification de la logique de rendu de la navigation. (#5116a568)
- Ajout de composants pour la sélection et le chargement de fichiers (`DirectFileDocumentPicker` et `FileUploadPicker`). (#64d917a1)

### Évolutions techniques
- Refactorisation de la fonctionnalité de complétion d'image pour utiliser un traitement basé sur des chunks. (#272873ef)
