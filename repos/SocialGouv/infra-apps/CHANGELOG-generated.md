## Changelog : infra-apps (derniers 30 jours)

### Résumé
Ce changelog résume les modifications apportées à l'infrastructure au cours des 30 derniers jours. Les principales évolutions concernent l'ajout et la configuration de nouvelles instances Metabase pour le SRDT, ainsi que des corrections et améliorations concernant l'instance Metabase existante pour le CDTN, notamment en termes de taille de stockage et d'accès. Des ajustements de politiques réseau et de configuration ont également été effectués.

### Évolutions fonctionnelles
- Ajout d'une instance Metabase pour le SRDT, incluant la configuration des secrets nécessaires et l'intégration avec Matomo (#296f963, #03ba605, #0b9ce16, #296f963).
- Intégration de la synchronisation Matomo pour les instances Metabase (CDTN et SRDT) (#17610d3).
- Correction d'un problème lié au secret de l'instance Metabase SRDT (#b1fec1e).

### Évolutions techniques
- Augmentation de la taille du disque pour l'instance Metabase du CDTN afin d'améliorer sa capacité et sa performance (#875928f, #588d540).
- Mise à jour de la politique réseau (netpol) pour l'instance Elasticsearch du CDTN (#3793ccd).
- Mise à jour de Greenmask (#c926944).
- Mise à jour de token-bureau (#7522736).
- Autorisation de l'accès de l'instance Metabase du SRDT à son namespace (#f07c6fb).
- Corrections et réversions temporaires concernant le rafraîchissement d'une vue dans l'instance Metabase du CDTN (#72c4a57, #90caac4, #554f840).
