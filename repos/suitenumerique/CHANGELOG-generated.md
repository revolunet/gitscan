# Synthèse d'activité : suitenumerique (derniers 7 jours)

## Résumé de l'activité
La semaine écoulée a été marquée par une activité soutenue sur l'ensemble des dépôts de l'organisation SuiteNumérique, avec un focus particulier sur l'amélioration de la sécurité, de l'expérience utilisateur et de la robustesse des différentes applications. Plusieurs dépôts ont bénéficié de corrections de vulnérabilités (notamment [docs](/repos/suitenumerique/docs) et [projects](/repos/suitenumerique/projects)), tandis que d'autres ont vu l'ajout de nouvelles fonctionnalités, comme la gestion des alias dans [people](/repos/suitenumerique/people) ou l'amélioration de la cartographie interactive dans [st-home](/repos/suitenumerique/st-home). L'équipe a également continué d'investir dans l'amélioration de l'infrastructure et des outils de développement, avec des migrations vers de nouveaux outils comme `uv` dans plusieurs dépôts ([conversations](/repos/suitenumerique/conversations), [find](/repos/suitenumerique/find), [people](/repos/suitenumerique/people)).

## Sécurité
Plusieurs correctifs de sécurité ont été déployés :

- Correction de vulnérabilités XSS dans [docs](/repos/suitenumerique/docs) et [projects](/repos/suitenumerique/projects).
- Mise à jour de dépendances vulnérables dans [conversations](/repos/suitenumerique/conversations) et [people](/repos/suitenumerique/people).
- Amélioration de la validation des URL dans le proxy CORS de [docs](/repos/suitenumerique/docs).

## Autres changements notables
- Migration vers l'outil de construction `uv` dans plusieurs dépôts ([conversations](/repos/suitenumerique/conversations), [find](/repos/suitenumerique/find), [people](/repos/suitenumerique/people)), simplifiant la gestion des dépendances.
- Suppression de l'outil de sauvegarde PostgreSQL Scalingo dans [projects](/repos/suitenumerique/projects).
- Mise à jour de Next.js dans [st-home](/repos/suitenumerique/st-home) pour bénéficier des dernières fonctionnalités et correctifs.
- Refactorisation du code et suppression de code mort dans plusieurs dépôts ([conversations](/repos/suitenumerique/conversations), [docs](/repos/suitenumerique/docs)).

## Dépôts les plus actifs
- [conversations](/repos/suitenumerique/conversations) : Amélioration de la stabilité, de la sécurité et de l'expérience utilisateur, avec des correctifs et des nouvelles fonctionnalités pour la gestion des documents et la compatibilité avec les modèles auto-hébergés.
- [people](/repos/suitenumerique/people) : Ajout de la gestion des alias de messagerie, avec des fonctionnalités d'ajout, de suppression et de gestion depuis l'interface d'administration.
- [docs](/repos/suitenumerique/docs) : Amélioration de l'accessibilité, correction de vulnérabilités et refactorisation du code.
- [drive](/repos/suitenumerique/drive) : Amélioration de la sécurité, de la performance et de la robustesse de la plateforme, avec des corrections de bugs et des optimisations.
- [ui-kit](/repos/suitenumerique/ui-kit) : Ajout de nouveaux composants (menu contextuel, modal d'onboarding) et amélioration de l'accessibilité.
