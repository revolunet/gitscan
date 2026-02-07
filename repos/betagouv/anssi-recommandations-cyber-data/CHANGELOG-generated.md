## Changelog : anssi-recommandations-cyber-data (derniers 30 jours)

### Résumé
Ce projet a connu des améliorations significatives concernant l'indexation des documents PDF de l'ANSSI, notamment avec l'ajout d'un indexeur Docling et des optimisations de l'indexeur Albert. Des corrections de sécurité ont également été apportées pour résoudre des vulnérabilités identifiées. Plusieurs améliorations de la robustesse et de la gestion des erreurs ont été implémentées.

### Évolutions fonctionnelles
- Ajout d'un indexeur Docling pour l'indexation des documents PDF (#275ad69).
- Amélioration de la transformation des tableaux PDF en format Markdown (#cfabc1c).
- Correction de la génération des URLs des guides (#356fda0).
- Extraction d'une représentation des parties d'une page PDF pour une meilleure indexation (#5ecb2d6).

### Évolutions techniques
- Implémentation d'une instance unique de Docling pour optimiser l'indexation (#7ffb3dc).
- Amélioration de la fusion des blocs en se basant sur la catégorisation des textes (#e74583c).
- Catégorisation plus fine du contenu des textes pour une indexation plus précise (#2234e04).
- Utilisation de PyPdf pour la lecture des documents PDF (#275ad69).
- Refonte de l'extraction et de la gestion des réponses document, avec une distinction entre succès et erreur (#b63de3c, #3c89e86).
- Implémentation d'un indexeur Albert (#635f249).
- Exécution de l'indexation avec Docling en lançant plusieurs processus pour une meilleure performance (#42ca4cc).
- Initialisation d'un indexeur (Albert ou Docling) en fonction de la configuration (#14fc9c2).
- Amélioration de la gestion des erreurs lors de l'indexation, permettant de continuer même en cas d'exception (#42f4a38).
- Impression du résultat de l'indexation sur la sortie standard pour le débogage (#3e41af6).

### Autres changements
- Mise à jour de la dépendance `wheel` pour corriger une vulnérabilité de sécurité (#2cb892c).
- Mise à jour de la dépendance `filelock` pour corriger une alerte Dependabot (#e4f6de2).
- Correction d'autres alertes Dependabot (#83e5c9b).
- Ajout des dossiers locaux au fichier `.gitignore` (#a0834b0).
- Variabilisation de l'URL vers MSC (#843faa4).
- Modifications des chemins et de la sortie pour faciliter les tests sur différents systèmes d'exploitation (#e0a17c2).
