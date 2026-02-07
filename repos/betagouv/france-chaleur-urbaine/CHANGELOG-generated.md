## Changelog : france-chaleur-urbaine (derniers 30 jours)

### Résumé
Ce mois-ci, l'équipe a travaillé sur l'amélioration des performances de l'application, la correction de bugs et l'ajout de nouvelles fonctionnalités, notamment une page dédiée aux données et une meilleure gestion des réseaux de chaleur ouverts aux raccordements. Des efforts importants ont également été consacrés à la refactorisation du code et à la modernisation des dépendances.

### Évolutions fonctionnelles
- Ajout d'une page "Données" avec des informations sur les sources de données utilisées (#1186).
- Amélioration de l'affichage des réseaux de chaleur ouverts aux raccordements dans l'interface utilisateur et l'administration.
- Correction d'un bug empêchant l'enregistrement de modèles d'email sans objet (#1190).
- Correction d'un bug lié à la réinitialisation des tags (#1192).
- Possibilité de masquer l'encart pour les réseaux de froid (#1194).
- Correction d'un bug dans le formulaire de test d'éligibilité en masse (#1198).
- Amélioration de l'affichage des informations sur les raccordements sur la fiche réseau.

### Évolutions techniques
- Migration de Knex vers Kysely pour une meilleure typage et une plus grande cohérence (#1187).
- Refactorisation du code pour supprimer des dépendances inutilisées et des fichiers obsolètes (#1191, #1148).
- Mise à jour de Next.js de la version 16.0.7 à la version 16.1.1 (#1185).
- Amélioration des performances de la carte et des outils en évitant les rerenders inutiles (#1193).
- Utilisation de `fetch` natif au lieu d'Axios.
- Migration de Vitest de la version 3 à la version 4.
- Intégration de Vitest UI pour faciliter le débogage des tests.
- Refactorisation de l'intégration de l'IA, avec documentation et modularisation.

### Autres changements
- Suppression de l'intégration tracking Facebook.
- Suppression des tables Airtable obsolètes.
- Ajout d'un script pour dumper proprement la base de données.
- Mise à jour des dépendances de la carte.
- Suppression de fichiers de configuration et de code obsolètes.
- Ajout de commentaires et documentation pour clarifier certaines parties du code.
- Suppression des emojis dans le code.
- Correction de typos et amélioration de la lisibilité du code.
- Ajout de tests unitaires pour l'éligibilité legacy.
- Amélioration de la gestion des chemins de fichiers pour Docker sur macOS et Windows.
