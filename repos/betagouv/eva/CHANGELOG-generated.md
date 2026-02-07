## Changelog : eva (derniers 30 jours)

### Résumé
Les dernières mises à jour d'eva se concentrent sur l'amélioration de l'interface utilisateur, notamment avec l'intégration progressive du Design System de la République Française (DSFR). Des corrections de bugs graphiques et des ajustements d'accessibilité ont également été apportés, ainsi que des améliorations concernant le parcours utilisateur et la gestion des réponses aux questions.

### Évolutions fonctionnelles
- Remplacement du bouton "Je passe" par une case à cocher "Je ne sais pas" (#a1dd529)
- Possibilité de décocher "Je ne sais pas" si un choix est effectué (#e800906)
- Amélioration de l'accessibilité : les liens d'accès aux situations sont maintenant des boutons pour la page de résultat (#4dcc3d4) et le bouton de déconnexion sur l'écran final est maintenant un bouton (#0e9c170).
- Ajout du hash 'toutes' pour la numératie et le positionnement en littératie (#4d78b6a, #1709071)
- Correction du bouton de lecture (#02339a7)
- Les questions de type "clique-sur-mot" et les consignes sont maintenant passables (#ff65e1c, #812d584, #0780efc)
- Effacement des choix précédents lors du cocher de "Je ne sais pas" (#559c912)

### Évolutions techniques
- Intégration du Design System de la République Française (DSFR) (#a0cdc00, #97cc303) et mock des scripts JS du DSFR pendant les tests (#ce28c4b)
- Factorisation de la méthode `carteSuivanteParcours` entre "Café de la place" et "Place du marché" (#64e33a9)
- Renommage de `carteActive` en `questionActive` sur "Café de la place" (#aaeed94)
- Correction des erreurs du linter (#688f5f3)
- Affichage de l'ID de la question courante dans la console navigateur pour le débogage (#e9a3e31)

### Autres changements
- Correction de divers bugs graphiques liés à l'introduction du DSFR (#8bb5ea5, #802a157)
- Ajustements de l'aspect visuel : remplacement d'une constante de couleur par une variable, correction de l'aspect des icônes des réponses audios, suppression du soulignement du lien "Je donne mon avis" sur l'écran final, correction de l'aspect des boutons de déconnexion (#cb79bf6, #e013845, #b35d2d7, #60e2cea)
- Changement du texte explicatif d'introduction de la littératie pour clarifier l'option "Je ne sais pas" (#98bdabf)
- Correction d'une faute de frappe et formatage d'un fichier de test (#a576c25)
- Changement de la couleur du haut-parleur et de la pagination (#22ec573)
- Passage de la palette de couleurs au bleu France (#02718eb)
- Revert d'un changement de couleur sur la calculatrice (#917b903)
