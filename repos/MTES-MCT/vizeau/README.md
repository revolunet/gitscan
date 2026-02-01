# Viz'eau

## Prérequis

- Node.js 22 LTS ou supérieur
- PostgreSQL 16.9 ou supérieur

## Exécution en mode développement

1. Assurez-vous que votre serveur PostgreSQL est en cours d’exécution.
   Si vous n’en avez pas encore configuré un, vous pouvez exécuter le script `./start_db.sh` pour lancer rapidement une instance PostgreSQL via Docker.

2. Créez un fichier `.env` à la racine du projet à partir du modèle `.env.example` (`cp .env.example .env`), puis définissez la variable `APP_KEY`.
   Il s’agit d’une chaîne aléatoire utilisée pour le chiffrement — sa valeur peut être quelconque en environnement de développement.

3. Installez les dépendances en exécutant :

   ```bash
   npm install
   ```

4. Exécutez les migrations de base de données pour configurer le schéma :

   ```bash
   node ace migration:run
   ```

5. Alimentez la base de données avec ses données initiales :

   ```bash
   node ace db:seed
   ```

6. Démarrez l’application :

   ```bash
   npm run dev
   ```

7. Ouvrez votre navigateur et accédez à `http://localhost:3333` pour utiliser l’application.

## Lancer l'application localement en mode production

Ces instructions vous guideront pour exécuter l’application en mode production sur votre machine locale.
Elles ne sont pas destinées à un déploiement en production réel pour des raisons de sécurité, passez à la section suivante pour cela.

1. Assurez-vous que votre serveur PostgreSQL est en cours d’exécution.
   Si vous n’en avez pas encore configuré un, vous pouvez exécuter le script `./start_db.sh` pour lancer rapidement une instance PostgreSQL via Docker.
2. Comme pour le mode développement, définissez vos variables d'environnement dans un fichier `.env.prod` à la racine du projet. `NODE_ENV` doit être défini sur `production`.
3. Compilez le projet en mode production :

   ```bash
   node ace build
   ```
4. Exécutez les migrations de base de données pour configurer le schéma (si ce n'est pas déjà fait) :

   ```bash
   node ace migration:run
   ```
5. Pour alimenter la base de données avec ses données initiales de production uniquement, exécutez la commande suivante :

   ```bash
   NODE_ENV=production node ace db:seed
   ```
6. Assurez-vous d'être dans le même dossier que ce README et utilisez le script suivant pour démarrer l'application en mode production :

   ```bash
   ./start_local_prod.sh
   ```
   Ce script installera les dépendances de production au premier lancement uniquement puis démarrera l'application en utilisant soit le fichier `.env.prod`, soit le fichier `.env` si le premier n'existe pas.
7. Ouvrez votre navigateur et accédez à `http://localhost:3333` pour utiliser l’application.

## Exécution en production

Lisez d’abord ce guide pour apprendre à construire le bundle de production, à gérer les migrations de base de données et les journaux de l’application :
[https://docs.adonisjs.com/guides/getting-started/deployment](https://docs.adonisjs.com/guides/getting-started/deployment)

Les déploiements doivent être effectués automatiquement à l’aide de pipelines CI/CD.

Quelques notes sur les variables d’environnement :

- `APP_KEY` : Chaîne aléatoire utilisée pour le chiffrement.
  En production, elle doit contenir **au moins 32 caractères**.
- `DB_*` : Paramètres de connexion à la base de données (hôte, port, utilisateur, mot de passe, nom de la base).
  Les valeurs par défaut correspondent à la configuration Docker, **changez leurs valeurs en production**.
- `ADMIN_*` : Identifiants de l’administrateur initial. **Changez ces valeurs en production**.
- `NODE_ENV` : Doit être défini à `'production'` dans un environnement de production ou de préproduction.

Le reste dépend de la logique métier et sort du cadre de ce README.

## Migration en production

Si un déploiement nécessite des modifications du schéma de la base de données, vous devrez exécuter les migrations manuellement après le déploiement.
À l'avenir, cela sera automatisé dans les pipelines CI/CD.

Connectez-vous à votre serveur de production via les commandes suivantes :

```bash
# Remplacez vizeau-dev par le nom de votre application Scalingo, et la région si nécessaire
scalingo -a vizeau-dev --region osc-fr1 run "NODE_ENV=production bash"
# Une fois connecté, naviguez jusqu'au répertoire de l'application
cd build
node ace migration:run
# Adonis vous demandera de confirmer l'exécution des migrations en production. Assurez-vous de les avoir testé sur un environnement de préproduction avant de continuer.
# Si de nouvelles données doivent être seedées, exécutez également la commande suivante :
node ace db:seed
```

## Exécution de Storybook

```shell
npm run storybook
```

Cela lancera Storybook sur `http://localhost:6006`.
