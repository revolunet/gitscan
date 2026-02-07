## Changelog : lettabot (derniers 30 jours)

### Résumé
Les dernières mises à jour de lettabot se concentrent sur l'amélioration de l'expérience utilisateur, notamment avec l'ajout d'un assistant de configuration interactif pour Slack et une meilleure gestion des modèles d'IA. De nouvelles options de configuration via un fichier YAML ont été introduites, offrant plus de flexibilité. Des corrections de bugs et des améliorations de la journalisation ont également été apportées pour une meilleure stabilité et un diagnostic plus facile.

### Évolutions fonctionnelles
- Ajout d'un assistant de configuration interactif pour Slack, basé sur un manifeste, facilitant la mise en place de l'intégration. (#33, #12)
- Intégration de la prise en charge des canaux Discord. (#16)
- Ajout de la possibilité d'envoyer des réactions sur Telegram, Slack et Discord via la CLI. (#20)
- Amélioration de l'onboarding Discord avec des instructions de configuration détaillées. (#22)
- Amélioration de l'onboarding pour préserver les sélections de canaux existantes. (#21)
- Ajout de documentation pour Home Assistant. (#18)
- Ajout d'une option pour héberger lettabot en auto-hébergement (self-hosted). (#5)
- Amélioration de l'interface utilisateur du menu de configuration et de la sélection des modèles, avec pagination. (#11)
- Possibilité de sélectionner des modèles BYOK (Bring Your Own Key) pour les utilisateurs du plan gratuit. (#4)
- Ajout d'un exemple de fichier de configuration YAML et d'une gestion des secrets via un fichier `.gitignore`. (#2)

### Évolutions techniques
- Refonte du système de configuration pour utiliser un fichier `lettabot.yaml` au lieu du fichier `.env`.
- Amélioration de la journalisation pour faciliter le débogage et le suivi des événements.
- Correction de bugs liés au chemin d'accès des fichiers et à la gestion des variables d'environnement.
- Correction d'un bug empêchant la mise à jour correcte des fournisseurs BYOK.
- Correction d'un bug où le modèle était écrasé à chaque message. (#32)
- Correction d'un bug lié à la gestion des bulles de messages et de l'approbation des outils. (#35)
- Correction d'un bug lié à l'utilisation du chemin correct pour le fallback `tsx` dans la commande serveur. (#10)
- Correction d'un bug lié à la vérification de l'appairage dans le chat WhatsApp. (#27)
- Correction d'un bug lié à la lecture du bon champ du store dans la CLI `lettabot-message`.

### Autres changements
- Ajout d'un fichier de licence Apache 2.0. (#30)
- Suppression des logs de débogage inutiles. (#17)
- Mise à jour de la documentation README.md. (#8, #9, #28)
- Correction du lien vers les issues GitHub dans le prompt système. (#3)
- Ajout de documentation pour la planification (scheduling). (#3)
