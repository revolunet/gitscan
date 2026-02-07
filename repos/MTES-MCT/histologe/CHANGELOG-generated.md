## Changelog : histologe (derniers 30 jours)

### Résumé
Les dernières mises à jour d'histologe apportent des améliorations significatives à l'expérience utilisateur, notamment au niveau du suivi des signalements, de la gestion des injonctions et de l'accessibilité. Des corrections de bugs et des optimisations techniques ont également été réalisées pour améliorer la stabilité et la performance de l'application.

### Évolutions fonctionnelles
- Ajout d'un cron pour envoyer des rappels concernant les injonctions liées aux signalements. (#5322, #5323)
- Possibilité pour les bailleurs de répondre après la clôture d'un signalement rouvert. (#5320)
- Amélioration de l'accessibilité pour les connexions SI externes. (#5259, #5318)
- Ajout d'une option pour permettre aux bailleurs de répondre aux signalements. (#5315)
- Correction de redirections après certaines actions dans le back-office. (#5314)
- Prévention de soumissions multiples de formulaires. (#5248, #5316)
- Corrections de réactions aux formulaires dans le back-office. (#5313)
- Ajout d'un mail automatique de rappel pour le suivi mensuel dans le cadre de la démarche accélérée. (#5304)
- Modification des messages flash dans le back-office pour une meilleure clarté. (#5307)
- Activation de l'envoi d'injonctions par courrier pour les RT (Réseaux de Travaux). (#5273)
- Limitation de la longueur de certains champs en se basant sur les spécifications. (#5245, #5292)
- Sélection par défaut de la compétence "Visite" pour certains partenaires dans le back-office. (#5293)
- Amélioration de l'interface utilisateur des formulaires professionnels. (#5282, #5306)
- Ajout de textes incitatifs dans la démarche accélérée. (#5275)
- Ajout de la possibilité de télécharger les photos d'un dossier en format zip. (#5137)
- Ajout d'un filtre pour la provenance des signalements dans la liste des signalements du back-office. (#5249)
- Mise en place du responsive design pour les tableaux de listes dans le back-office. (#5232)
- Ajout d'un mail de notification lors de la bascule d'une injonction. (#5260)
- Ajout d'une note dans le suivi d'un signalement refusé par l'ARS (Agence Régionale de Santé). (#5224)
- Correction d'un dysfonctionnement du champ de recherche libre dans la recherche de signalements. (#5227)
- Alerte lors de l'import de signalements si des désordres ne sont pas trouvés. (#5225)
- Remplacement des alertes "fr-alert" par des notifications "fr-notice" pour une meilleure cohérence visuelle. (#5222)
- Correction de liens de titres (#5197)
- Permettre au bailleur de signer en ligne son engagement de travaux (#5158)
- Rendre inactif un compte utilisateur pour un SA (#5170)

### Évolutions techniques
- Mise à jour de Symfony vers la version 7.4. (#5208)
- Stabilisation de la synchronisation avec Metabase. (#5212)
- Restriction de l'activation de SecurityApiExceptionListener aux URLs de l'API. (#5183, #5205)
- Amélioration de la gestion des règles de visualisation des clubs pour les RT. (#5207, #5215)
- Correction d'un problème de permissions pour les manipulations de fichiers lors de la clôture d'un signalement. (#5196, #5203)
- Correction d'un bug lié à l'affectation des signalements aux Deux-Sèvres pour la synchronisation avec l'ARS. (#5241, #5244)

### Autres changements
- Mise à jour de la documentation de l'API v1.3.0. (#5190, #5347)
- Suppression d'un fichier suspect. (#5200, #5204)
- Fusion de la branche `main` dans `develop` à plusieurs reprises. (#5236, #5237, #5244, #5304, #5315, #5340)
- Mise à jour de la librairie PHPUnit. (#5343)
