## Changelog : euphrosyne (derniers 30 jours)

### Résumé
Ce changelog résume les améliorations apportées à Euphrosyne au cours du dernier mois. Les principales évolutions concernent la gestion du stockage de fichiers, l'amélioration de la gestion des métadonnées de projet, la correction de bugs et la mise à jour de plusieurs dépendances pour assurer la stabilité et la sécurité de la plateforme. Des améliorations ont également été apportées à la personnalisation de l'application et à la gestion des emails.

### Évolutions fonctionnelles
- Amélioration de la gestion des métadonnées de projet, notamment pour les projets Aglae, avec une meilleure configuration et documentation (#1668, #1645).
- Possibilité d'exempter un plan de prévention de la signature par l'institution (#1654).
- Ajout de la possibilité de définir une période de validité pour les étapes de workflow Goodflag (#1656).
- Implémentation d'une authentification par email en minuscules (#1659).
- Ajout de la possibilité de personnaliser l'apparence de l'application (branding) avec des variables d'environnement (#1649, #1650).
- Désactivation de la fonctionnalité d'importation POP (#1652).
- Amélioration de l'envoi d'emails d'invitation à un projet (#1653).
- Refonte de la gestion du téléchargement de fichiers avec de nouveaux clients BlobStorage et FileshareStorage (#1706).
- Augmentation du timeout pour les requêtes API dans les commandes `check_long_running_vms` et `check_project_data_availability` (#1c51b6e).
- Correction d'un bug empêchant la poursuite du processus de signature électronique en cas d'exception (#1703, #28aaf99, #ec64d04).
- Correction d'un problème lié à l'ID de template Goodflag, avec ajout de logging pour les cas manquants (#1704).
- Mise à jour des versions de React et React-DOM pour corriger un problème de compatibilité (#1705, #6b04364).

### Évolutions techniques
- Refactorisation de la gestion du stockage de fichiers pour utiliser les nouveaux clients BlobStorage et FileshareStorage (#1706).
- Mise à jour de plusieurs dépendances npm et yarn, notamment `@azure/storage-blob`, `@sentry/browser`, `@typescript-eslint/eslint-plugin`, `@types/react`, `vitest`, `webpack`, `prettier`, et les librairies FullCalendar (#1711, #1709, #1708, #1710, #1707, #1675, #1673, #1672, #1671, #1655, #1653, #1652, #1623, #1622, #1621, #1620).
- Mise à jour de la version de `wheel` à 0.46.2 (#1674).
- Suppression de la dépendance `@h5web/app` (#1636).
- Amélioration de la configuration et de la documentation pour les métadonnées de run (#1668).

### Autres changements
- Ajout de documentation sur le workflow webhook Tally (#1651).
- Correction de problèmes de linting et de style de code (#1634, #61dd0f7).
- Ajout de tests pour l'idempotence et la logique de retry pour les processus de signature électronique (#1703).
- Correction de l'affichage de balises HTML dans les templates footer et unauthorized (#1649).
- Suppression de l'utilisation de `facility_short_name` au profit de `facility_name` (#1650).
- Suppression de références à l'ancienne application H5web (#1636).
- Amélioration des messages et de la documentation (#1668).
