## Changelog : ComparIA (derniers 30 jours)

### Résumé
Les dernières mises à jour de ComparIA incluent l'ajout de nouveaux modèles d'IA pour la comparaison, notamment Kimi K2.5 et Apertus OLMo, ainsi que des corrections pour identifier correctement ces derniers comme étant open source. Les données de classement des modèles ont également été mises à jour régulièrement. Enfin, des améliorations ont été apportées à l'infrastructure de développement et à la gestion des données.

### Évolutions fonctionnelles
- Ajout du modèle Kimi K2.5 pour la comparaison (#282).
- Identification correcte des modèles Apertus et OLMo comme étant open source (#280, #272).
- Mise à jour des données de classement des modèles d'IA (#281, #272, #264).

### Évolutions techniques
- Refactoring du code lié au classement pour une meilleure clarté et une meilleure maintenance (#264).
- Ajout de commandes `makefile` pour initialiser la base de données Docker et réinitialiser complètement les données de développement (#280).

### Autres changements
- Mise à jour des traductions en estonien via Weblate (#239, #40188af, #f2ffc82, #d35cb54).
- Mises à jour régulières des données de classement via les workflows automatisés (build_models script).
