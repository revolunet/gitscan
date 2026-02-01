# ClassifIA : Système de Classification de Conversations

![ClassifIA Logo](assets/classifia-logo.png)

**Projet Beta Gouv** - Service automatisé de classification de conversations pour les messages de support Crisp. Utilise l'analyse basée sur LLM pour catégoriser les conversations en sujets/thèmes avec correspondance de similarité vectorielle pour identifier les problèmes récurrents et générer des analyses.

## Stack Technique

- **Framework**: [NestJS](https://nestjs.com/) avec [Fastify](https://www.fastify.io/)
- **Langage**: TypeScript
- **LLM**: API Albert (IA du gouvernement français) via OpenAI Agents SDK
- **File d'attente**: [BullMQ](https://docs.bullmq.io/) avec Redis
- **Base de données**: PostgreSQL 16+ avec [Drizzle ORM](https://orm.drizzle.team/)
- **Stockage vectoriel**: [pgvector](https://github.com/pgvector/pgvector)
- **Sécurité**: Hachage SHA256, aucun stockage en texte clair

## Démarrage Rapide

### Prérequis

- Node.js 22+
- pnpm
- Docker & Docker Compose

### Installation

- **Cloner et installer les dépendances :**

```bash
pnpm install
```

- **Configurer les variables d'environnement :**

```bash
cp .env.example .env
# Éditer .env avec vos identifiants réels
```

- **Démarrer l'infrastructure (PostgreSQL + Redis) :**

```bash
pnpm docker:up
```

- **Exécuter les migrations de base de données :**

```bash
pnpm db:push
```

- **Démarrer le serveur de développement :**

```bash
pnpm start:dev
```

L'API sera accessible sur `http://localhost:3000`

## Variables d'Environnement

Voir `.env.example` pour la configuration complète requise. Variables clés :

- **Albert LLM**: `ALBERT_API_KEY`, `ALBERT_URL`
- **Base de données**: `DATABASE_URL` (PostgreSQL avec pgvector)
- **Redis**: `REDIS_URL`
- **Crisp API**: `CRISP_API_KEY`, `CRISP_URL`, `CRISP_WEBHOOK_SECRET`
- **BullMQ**: `BULLMQ_CONCURRENCY`, `BULLMQ_ATTEMPTS`, `BULLMQ_BACKOFF_DELAY`, `BULLMQ_RATE_LIMIT`
- **Limites de traitement**: `MAX_TOKENS_PER_CONVERSATION`, `MAX_LABELS_PER_CONVERSATION`
- **Classification hiérarchique**: `LABEL_SIMILARITY_THRESHOLD` (0.92), `TOPIC_SIMILARITY_THRESHOLD` (0.75), `TOPIC_ASSIGNMENT_MAX_TOPICS` (3), `RAG_RETRIEVE_TOPICS_LIMIT` (5)

Consultez le fichier `.env.example` pour la documentation détaillée de chaque variable.

## Points de Terminaison API

### Vérification de Santé

```http
GET /health
```

Retourne le statut de santé du service.

### Webhook Crisp

```http
POST /crisp/webhook/message-updated?secret={CRISP_WEBHOOK_SECRET}
Content-Type: application/json
```

Reçoit les notifications de webhook de Crisp lors de la mise à jour de messages. Nécessite le secret webhook configuré dans `CRISP_WEBHOOK_SECRET`.

**Point d'entrée unique** : L'API ne dispose d'aucun endpoint public pour créer ou consulter des conversations. Toutes les conversations sont automatiquement traitées via le webhook Crisp lorsqu'une conversation est marquée comme résolue (`state:resolved`).

## Architecture

### Modules

- **AiModule**: Intégration LLM et agents de classification
  - `AgentsModule`: Implémentations d'agents de classification
  - `LlmModule`: Modèles de chat et d'embedding Albert
  - Adaptateurs : OpenAI Agents
- **ConversationsModule**: Logique de traitement des conversations
  - Service : Logique métier et orchestration de classification
  - Processors : Workers de jobs BullMQ
- **CrispModule**: Intégration du client API Crisp
- **DrizzleModule**: Couche base de données avec PostgreSQL + pgvector
  - Schémas : `thematics`, `topics`, `labels`, `sessions`, `discussions`

### Schéma de Base de Données - Classification Hiérarchique

Le système de classification hiérarchique à 3 niveaux organise les conversations VAE :

#### Niveau 1 - Thematics (Thématiques)

- 7 grandes catégories : Gestion de Compte, Dossier et Candidature, Accompagnement et Organismes, Procédures et Démarches VAE, Jury et Validation, Aspects Financiers, Technique et Plateforme
- Tables : `thematics`
- Permettent de regrouper les topics par domaine métier

#### Niveau 2 - Topics (Topics conceptuels)

- ~40 groupements conceptuels sous les thématiques
- Exemples : "Authentification et Connexion", "Contestation et Statut", "Frais de Jury"
- Tables : `topics` (avec embeddings vectoriels pour recherche sémantique)
- Un label peut appartenir à plusieurs topics (relation many-to-many)

#### Niveau 3 - Labels (Descriptions spécifiques)

- Labels très spécifiques extraits des discussions par l'agent LLM
- Exemples : "accès compte et mot de passe oublié", "contestation abandon et statut dossier"
- Tables : `labels` (avec embeddings), `label_topics` (relation many-to-many avec topics)
- Seuil de similarité très strict (0.92) pour éviter les doublons

#### Sessions et Discussions

- `sessions` : Représente tout l'historique de conversation d'un utilisateur (1 session = 1 user)
- `discussions` : Threads individuels de conversation au sein d'une session (séparés par événements `state:resolved`)
- `discussion_classifications` : Lie les discussions aux labels avec score de confiance

## Flux de Classification - Multi-stage avec RAG

### Stage 1 : Extraction de Label (Agent LLM enrichi)

1. **Réception du webhook Crisp** → Mise en file d'attente BullMQ
2. **Récupération messages** → Division en discussions individuelles
3. **Classification enrichie** avec agent LLM :
   - Génère un **label** très spécifique (ex: "contestation abandon et statut dossier")
   - Extrait le **contexte sémantique** (type de problématique, étape du parcours VAE)
   - Détecte les **entités** (diplômes, organismes, actions, acteurs)
   - Calcule la **confiance** de classification

### Stage 2 : Assignation de Topics (RAG-Enhanced)

1. **Recherche vectorielle de labels similaires** (seuil 0.92 - très strict)
   - Si label existant trouvé → réutilisation
   - Sinon → création nouveau label
2. **RAG - Retrieval de topics candidats** :
   - Embedding du label + contexte sémantique
   - Recherche vectorielle des 5 topics les plus similaires (seuil 0.75)
   - Enrichissement avec exemples de labels de chaque topic
3. **Assignation par agent LLM** avec few-shot learning :
   - Analyse le label, contexte et entités
   - Compare avec topics candidats et leurs exemples
   - Décide : réutiliser topic existant OU créer nouveau topic
   - Support **multi-topic** : un label peut appartenir à plusieurs topics
   - Désigne toujours un topic **PRIMARY** (le plus pertinent)
4. **Création automatique de nouveaux topics** si nécessaire :
   - Génération du nom et slug du topic
   - Assignation à la thématique appropriée
   - Initialisation avec l'embedding du label
5. **Liaison label → topics** avec méta-données :
   - Confidence score par assignation
   - Flag is_primary
   - Méthode d'assignation (rag_agent, manual, clustering)

### Stage 3 : Stockage Hiérarchique

1. **Création de la discussion** dans la session
2. **Classification discussion → label** avec confiance et méthode
3. **Traçabilité complète** : session → discussion → label → topics → thématique

### Avantages du Système Hiérarchique

- **Organisation en 3 niveaux** : Navigation intuitive du général (thématique) au spécifique (label)
- **Multi-topic par label** : Un label peut appartenir à plusieurs topics (ex: problème d'email lié à dépôt de document)
- **RAG-Enhanced** : Utilise la recherche vectorielle pour trouver les topics similaires avant décision LLM
- **Auto-création de topics** : Le système crée automatiquement de nouveaux topics quand nécessaire
- **Explainability** : Chaque assignation inclut un raisonnement et un score de confiance
- **Seuils optimisés** :
  - Labels : 0.92 (très strict, évite les doublons)
  - Topics : 0.75 (permet regroupement conceptuel)

### Stratégie de Déduplication

- **Niveau session** : Hash SHA256 du contenu complet de la conversation Crisp
- **Niveau discussion** : Hash SHA256 des segments individuels (entre événements `state:resolved`)
- Garantit l'idempotence même lorsque les conversations sont retraitées

## Développement

```bash
# Développement avec mode watch
pnpm start:dev

# Build de production
pnpm build
pnpm start:prod

# Exécuter le linter
pnpm lint

# Formater le code
pnpm format

# Opérations de base de données
pnpm db:generate  # Générer les migrations
pnpm db:push      # Pousser les changements de schéma
pnpm db:studio    # Ouvrir Drizzle Studio
```

## Docker

L'infrastructure Docker expose PostgreSQL sur le port **5999** et Redis sur le port **6999** (non les ports par défaut).

```bash
# Démarrer tous les services (PostgreSQL + Redis)
pnpm docker:up

# Voir les logs
pnpm docker:logs

# Arrêter les services
pnpm docker:down

# Nettoyer les volumes et redémarrer
pnpm docker:clean
pnpm docker:up
```

## Déploiement en Production

Build et exécution avec Docker :

```bash
docker build -t classifia .
docker run -p 3000:3000 --env-file .env classifia
```

Ou utiliser le `docker-compose.yml` fourni pour le déploiement de la stack complète.

## Sécurité & Confidentialité

- **Pas de stockage en texte clair** : Les messages ne sont jamais stockés, uniquement les hashes et métadonnées
- **Confidentialité** : Les prompts LLM interdisent explicitement les PII dans les sujets générés
- **Idempotence** : La déduplication basée sur hash empêche le traitement dupliqué
- **TLS** : Toutes les connexions externes doivent utiliser TLS en production

## À Propos

**ClassifIA** est un projet développé dans le cadre de [Beta Gouv](https://beta.gouv.fr/), l'incubateur de services numériques de l'État français.

## Licence

MIT
