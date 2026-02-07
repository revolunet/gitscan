## Changelog : portail-rse (derniers 30 jours)

### Résumé
Ce mois-ci, le portail RSE a connu des améliorations significatives pour le reporting VSME, notamment l'ajout de nouveaux indicateurs et l'amélioration de l'export des données au format Excel. Des corrections de bugs et des ajustements d'interface ont également été apportés pour une meilleure expérience utilisateur, en particulier concernant les calculs et l'affichage des données. Enfin, des pages statiques ont été ajoutées et des améliorations ont été apportées à la gestion des rapports.

### Évolutions fonctionnelles
- Ajout de la page statique ADM (#627ac6d)
- Ajout d'une page intercalaire pour le rapport dans le tableau de bord (#7774bb1)
- Ajout des indicateurs de l'exigence de publication C8 et C9 (#aa341dc, #774809e)
- Ajout des indicateurs de l'exigence de publication C6 (#a9bb6cb, #83f8b6f)
- Export des indicateurs de C6 et C8 dans l'export excel VSME (#73d30fd, #f373702)
- Amélioration de l'affichage des indicateurs du module complet VSME (#af24c8b)
- Amélioration de l'affichage et de la recherche des rapports VSME dans l'admin (#985b575)
- Correction du calcul d'énergie et ajout d'unités dans le tableau de consommation de combustibles (#b1c9205, #165c0db)
- Correction du fonctionnement des années des rapports VSME sur Chrome (#ba5417b)
- Correction de l'affichage des boutons radio pour respecter le DSFR (#c41a11a)
- Correction de l'affichage du texte dans le premier onglet du template VSME en fonction du module choisi (#67073ae)

### Évolutions techniques
- Refactoring pour généraliser la gestion des marges des checkboxs (#0979416)
- Décodage et ajout systématique des données calculées lors de l'accès aux données en base (#0f1ab98)
- Amélioration des tests sur les nombres décimaux (#7e4d181)
- Correction des calculs sur les nombres décimaux (#6be1906)
- Suppression d'un hack spécifique à une checkbox (#0979416)
- Extraction d'une fonction pour améliorer la lisibilité du code (#0351b81)
- Gestion des colonnes non trouvées lors du décodage des nombres décimaux (#586d676)

### Autres changements
- Amélioration de la documentation pour la mise à jour de Sites Faciles (#e64fdc9)
- Correction de fautes de frappe et homogénéisation des noms dans les fils d'ariane (#1e5a57e, #79a07d3)
- Correction d'une mauvaise description d'un bloc HTML (#65f10d6)
- Mise à jour de la dépendance `weasyprint` de la version 66.0 à la version 68.0 (#cf94a38)
- Mise à jour de la dépendance `virtualenv` de la version 20.34.0 à la version 20.36.1 (#edbafef)
- Mise à jour de la dépendance `aiohttp` de la version 3.12.15 à la version 3.13.3 (#2a64279)
- Mise à jour de la dépendance `urllib3` de la version 2.6.0 à la version 2.6.3 (#dcf0c37)
