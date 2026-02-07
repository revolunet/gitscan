## Changelog : jeveuxaider-front (derniers 30 jours)

### Résumé
Ce mois-ci, l'équipe a travaillé sur l'amélioration de la performance, la correction de fuites mémoire et l'amélioration de l'expérience utilisateur. Des corrections ont été apportées pour assurer la réactivité de l'interface, la gestion des erreurs et l'accessibilité. Des fonctionnalités ont également été ajoutées pour la campagne "Février pour protéger" et l'amélioration de la gestion des missions.

### Évolutions fonctionnelles
- Ajout d'une page de quiz pour la campagne "Février pour protéger" (#240).
- Amélioration de la gestion des missions avec des suggestions de titres générés par l'IA (#207).
- Correction de l'affichage des vignettes de missions (#06f78e6).
- Correction du formulaire de création de mission : le formulaire est maintenant vidé après la création (#241).
- Correction du chemin de la route du tableau de bord (#7d6ab3d).
- Amélioration de la description et des tags des notifications de validation de participation (#7ca5251).
- Amélioration de la mise en page de la carte de mission et ajout d'une vue de débogage pour les détails de la mission (#7b33d6f).

### Évolutions techniques
- Refactorisation de la composition de la carte mission pour utiliser l'API de composition (#246).
- Simplification de la gestion des requêtes avec `useFetcher` (#243).
- Refactorisation de l'utilisation des stores Vuex pour utiliser directement les stores (#235).
- Suppression de MixinUsetiful et implémentation du plugin Usetiful (#229).
- Suppression de Hotjar mixin et implémentation du plugin Hotjar (#227).
- Suppression de la compression des assets Nitro et mise à jour de la compatibilité à 2026 (#219).
- Mise à jour de la version de Nuxt à 3.20.2 (#208).
- Correction de fuites mémoire en nettoyant les watchers, les timeouts et les URL blob (#234, #232, #230, #20f477).
- Amélioration de la gestion des erreurs et réduction du bruit des logs (#b52d1c4, #fd2bdce).
- Suppression de Sentry (#463bcc8).
- Correction de problèmes de performance CPU (#215).
- Mise à jour de la version de Node.js à 24 dans package.json (#220).
- Suppression de la compression h3 (#216).

### Autres changements
- Amélioration du texte d'infobulle pour la fonctionnalité d'amélioration du texte par l'IA dans CKEditor (#0f20f2e).
- Suppression de l'élément `maximum-scale` dans la configuration de Nuxt pour améliorer l'accessibilité (#236).
- Ajout du composable `usePlausible` (#228).
- Correction de l'encodage des noms d'activité dans les URL (#8bb1fcf).
- Amélioration de la gestion du focus pour les composants de carte après un changement de page (#209).
- Ajout de commentaires pour clarifier le code (#b52d1c4).
- Mise à jour de diverses dépendances (lodash, tar, h3, preact) (#239, #238, #237, #223, #222, #221, #211).
