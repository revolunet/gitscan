## Changelog : mon-devis-sans-oublis-backend-ocr (derniers 30 jours)

### Résumé
Cette mise à jour apporte des améliorations significatives à la sécurité et à la flexibilité du backend.  Il est désormais possible d'utiliser plusieurs clés API pour l'authentification, ce qui permet une meilleure gestion des accès. De plus, des vulnérabilités potentielles ont été corrigées en mettant à jour les dépendances du projet.

### Évolutions fonctionnelles
- Ajout du support pour plusieurs clés API, permettant une gestion plus fine des accès à l'API. (#8403b6d)

### Évolutions techniques
- Mise à jour de la dépendance `sentry-sdk` vers la version 2.49.0 pour bénéficier des dernières corrections de sécurité et améliorations. (#11)
- Correction du fichier `requirements.txt` pour réduire les vulnérabilités identifiées. (#13)
