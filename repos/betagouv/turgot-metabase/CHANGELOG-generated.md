## Changelog : turgot-metabase (derniers 30 jours)

### Résumé
Ce mois-ci, le script de réplication de la base de données pour Metabase a été mis à jour pour inclure une fonctionnalité d'anonymisation des données, améliorant ainsi la protection de la vie privée. De plus, une planification automatique (cron) a été ajoutée pour exécuter régulièrement la réplication, assurant ainsi la disponibilité des données les plus récentes dans Metabase.

### Évolutions fonctionnelles
- Ajout d'une fonctionnalité d'anonymisation des données lors de la réplication de la base de données (#2cfb317).
- Mise en place d'une planification automatique (cron) pour l'exécution du script de réplication (#cc94d9b).

### Évolutions techniques
- Intégration d'un cron pour automatiser l'exécution du script.
