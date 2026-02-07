## Changelog : reva (derniers 30 jours)

### Résumé
Les dernières mises à jour de reva apportent des améliorations significatives à l'expérience utilisateur, notamment sur les pages de candidature et d'administration. Des corrections de bugs et des optimisations ont été apportées, ainsi que des fonctionnalités attendues comme l'archivage de candidatures et la gestion des comptes collaborateur. Des travaux importants ont également été réalisés sur la génération du DFF (Dossier de Formation) et l'intégration de FranceConnect.

### Évolutions fonctionnelles
- Amélioration de l'expérience mobile sur les pages de statut du candidat (Cédric Soulas).
- Ajout de la possibilité d'archiver une candidature par le candidat (Florian Bonniec).
- Implémentation de l'auto-login après réinitialisation du mot de passe (Cédric Soulas).
- Ajout de la gestion de la désactivation des comptes collaborateur pour les gestionnaires d'AAP (Alexandre Garbe).
- Amélioration de la page de sélection des certifications pour les cohortes VAE collectives, avec ajout d'un toggle pour afficher uniquement les certifications ajoutées (Alexandre Garbe).
- Ajout d'une confirmation modale lors de la sélection d'une certification non disponible pour la cohorte AAP (Alexandre Garbe).
- Ajout de la possibilité de rechercher des organismes ayant plusieurs certifications (Alexandre Garbe).
- Amélioration de la gestion des candidatures FranceConnect (ThomasDos).
- Ajout de la possibilité de s'inscrire avec un mot de passe (Cédric Soulas).
- Refonte de la page de connexion (Cédric Soulas).
- Amélioration de la page de confirmation d'inscription (Cédric Soulas).
- Ajout de la possibilité d'ajouter des commentaires pour l'AAP dans les pages de certification (Florian Bonniec).
- Amélioration de la présentation des informations sur les expériences du candidat dans le DFF (Alexandre Garbe).
- Ajout de sections "Objectifs du candidat" et "Statut" au DFF (Alexandre Garbe).
- Ajout d'une section "Contacts" au DFF (Alexandre Garbe).
- Ajout d'une section "Avis et documents" au DFF (Alexandre Garbe).

### Évolutions techniques
- Mise à jour des dépendances Next.js, React et types associés sur plusieurs packages (ThomasDos).
- Refactorisation de la gestion des erreurs et des descriptions de réponses dans l'interop (ThomasDos).
- Intégration des plugins Fastify cookie et rate limit pour une meilleure sécurité (ThomasDos).
- Amélioration de la gestion des variables d'environnement (ThomasDos).
- Mise à jour de la version de PostgreSQL dans les fichiers docker-compose (ThomasDos).
- Amélioration de la configuration CI pour une exécution plus efficace (ThomasDos).
- Suppression du code lié aux rendez-vous (Alexandre Garbe).
- Suppression du feature flag AAP_USER_ACCOUNT_V2 (Alexandre Garbe).
- Refactorisation de la gestion des comptes utilisateurs et des organismes (Alexandre Garbe).
- Ajout de logs d'audit pour les opérations sur les comptes utilisateurs et les organismes (Alexandre Garbe).
- Génération des types GraphQL lors du linting et du pre-push (Pierre A).
- Amélioration de la structure des tests E2E (Alexandre Garbe, Pierre A).
- Mise à jour des images Docker (ThomasDos).

### Autres changements
- Correction de liens Notion obsolètes (ThomasDos).
- Amélioration de la documentation (Florian Bonniec).
- Correction de problèmes de typographie et de mise en page (Alexandre Garbe, Pierre A).
- Correction de bugs mineurs et améliorations de la qualité du code.
- Ajout de tests unitaires et E2E pour les nouvelles fonctionnalités (Alexandre Garbe, ThomasDos, Pierre A).
- Mise à jour des dépendances (dependabot).
- Amélioration de la gestion des erreurs et des logs (ThomasDos).
- Ajout de commentaires et documentation (Florian Bonniec).
- Correction de problèmes de performance (ThomasDos).
- Amélioration de la sécurité (ThomasDos).
- Correction de problèmes d'accessibilité (Cédric Soulas).
- Ajout de tests pour les nouvelles fonctionnalités (Alexandre Garbe).
- Amélioration de la structure du projet (ThomasDos).
- Correction de problèmes de compatibilité (ThomasDos).
- Mise à jour des dépendances (dependabot).
