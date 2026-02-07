## Changelog : trackdechets-data (derniers 30 jours)

### Résumé
Ce changelog résume les améliorations apportées à la plateforme trackdechets-data au cours des 30 derniers jours. Les modifications concernent principalement l'ajout de nouvelles données et d'améliorations au niveau des pipelines de données, notamment dans dbt et Airflow, pour une meilleure qualité et clarté des informations.

### Évolutions fonctionnelles
- Ajout de la colonne `ecoOrganismePartnersIds` au modèle `Company` dans dbt, permettant d'identifier les partenaires des éco-organismes. (#62)
- Ajout de la colonne `is_dormant` aux modèles `cartographie_etablissements` dans dbt, indiquant si un établissement est inactif. (#59)
- Ajout d'une colonne dans le modèle `unite_legal` dans Airflow et validation des en-têtes dans la fonction `el_base_sirene`. (#56)

### Évolutions techniques
- Standardisation des noms de colonnes dans le modèle `installations_rubriques_2026` dans dbt pour une meilleure cohérence. (#57)
- Amélioration de la condition de rafraîchissement du token dans Airflow, ajustée à 100 secondes avant expiration. (#55)
- Amélioration de la journalisation (logging) dans la fonction `extract_companies` d'Airflow pour faciliter le débogage et le suivi. (#54)
- Ajout de descriptions aux modèles `cartographie_icpe` dans dbt pour une meilleure compréhension et contextualisation. (#62)

### Autres changements
- Mise à jour du modèle de pull request pour supprimer les sections "contexte" et "motivation", simplifiant ainsi le processus de contribution. (#58)
