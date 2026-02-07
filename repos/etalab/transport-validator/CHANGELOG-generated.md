## Changelog : transport-validator (derniers 30 jours)

### Résumé
Ce validateur de données GTFS a reçu des améliorations concernant la validation des informations de calendrier et de langue. Ces mises à jour permettent de garantir une meilleure qualité des données de transport en commun et de détecter plus précisément les erreurs de conformité aux spécifications GTFS.

### Évolutions fonctionnelles
- La validation de l'absence de calendrier est maintenant signalée comme une erreur critique (#230).
- La présence de la langue du flux (feed_info.feed_lang) est maintenant obligatoire et est validée (#229).

### Autres changements
- Mise à jour de la documentation (#227).
- Correction de la mise en forme de l'entrée "MissingLanguage" dans le fichier README (#227).
