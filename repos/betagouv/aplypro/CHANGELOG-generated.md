## Changelog : aplypro (derniers 30 jours)

### Résumé
Les dernières mises à jour d'aplypro se concentrent sur le blocage des demandes de paiement pour différents programmes (ENPR, MASA, BOP MER) afin d'assurer une gestion plus précise des allocations. Des améliorations ont également été apportées à l'infrastructure de test et à la configuration de l'application.

### Évolutions fonctionnelles
- Blocage des demandes de paiement ENPR (#1886)
- Blocage des demandes de paiement du MASA (#1882)
- Blocage des demandes de paiement sur le BOP MER (plusieurs commits, dont #1878)
- Ajout de la gestion des classes dans la section "Académie" (#1874)

### Évolutions techniques
- Ajout de la couverture de code (code coverage) avec Simplecov et intégration dans la CI (#1885, #1876)
- Mise à jour de `connection_pool` et `sidekiq` (#1876)
- Correction de paramètres pour le cache store (#1875)
- Correction de violations Rubocop et amélioration de la lisibilité des tests (#1873)
- Mise à jour des dépendances avec `bundle update` (#1873, #1890)

### Autres changements
- Rétrogradation d'une modification précédente ("Fix parameters") (#1876)
- Bump de la version Ruby à 2.8.4 (#1874)
