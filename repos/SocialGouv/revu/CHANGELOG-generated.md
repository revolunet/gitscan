## Changelog : revu (derniers 30 jours)

### Résumé
Les dernières mises à jour de Revu se concentrent sur l'amélioration de la qualité des suggestions de revue de code, la correction de bugs liés à l'affichage et la gestion des suggestions redondantes, ainsi que des optimisations internes pour une meilleure stabilité et performance.

### Évolutions fonctionnelles
- Correction d'un problème d'affichage des numéros de ligne de début et de fin dans les suggestions (#271).
- Amélioration de la qualité des suggestions de code grâce à l'ingénierie des prompts (configuration).
- Suppression des blocs de suggestions redondants (#274).
- Amélioration de la gestion des interactions avec GitHub et ajout d'informations de débogage.
- Intégration et tests avec le modèle GPT-5.1 en environnement de pré-production.
- Avancement du support des discussions sur les pull requests.

### Évolutions techniques
- Migration vers le gestionnaire de paquets pnpm (#268).
- Ajout d'une étape de vérification TypeScript avant le commit (#269).
- Mise à jour de l'infrastructure pour utiliser les nouvelles réponses de l'API OpenAI.

### Autres changements
- Correction de bugs divers liés à la version du projet.
