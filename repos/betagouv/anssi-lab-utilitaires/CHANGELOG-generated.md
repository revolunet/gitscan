## Changelog : anssi-lab-utilitaires (derniers 30 jours)

### Résumé
Ce changelog présente les récentes améliorations apportées à l'application backend anssi-lab-utilitaires. Les modifications incluent des corrections liées au service SOIN, l'ajout de notifications de déploiement sur le PaaS, et des améliorations techniques concernant la gestion des paquets et la configuration de l'environnement.

### Évolutions fonctionnelles
- Ajout d'un webhook pour notifier les déploiements sur le PaaS (#41c4c08)
- Correction des valeurs extraites de la payload reçue par le PaaS dans le service SOIN (#8cc4e30)
- Correction du message de notification des déploiements PaaS dans le service SOIN (#d7246e9)

### Évolutions techniques
- Remplacement de `npm` par `pnpm` pour la gestion des paquets (#23f9f89)
- Prévention des glissades en forçant l'utilisation de `pnpm` (#35e7782)
- Déclaration de la version de `node` à utiliser pour assurer la cohérence de l'environnement (#0c6b087)
- Avancement de la version mineure de la dépendance `yaml` (#4ee9de5)
- Suppression de code inutile (#f7c5019)

### Autres changements
- Suppression d'une variable d'environnement dupliquée (#9a6e5a8)
- Suppression du webhook d'alertes Brevo MAC (#9ea97a0)
- Prévention des mises à jour automatiques des versions mineures des dépendances (#171c156)
