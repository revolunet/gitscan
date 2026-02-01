# Storybook de l'Espace Membre

Voici le storybook de l'espace-membre de l'incubateur.
Il s'agit d'un submodule git qui fonctionne uniquement en étant utilisé avec le projet [espace-membre](https://github.com/espace-membre-next).
Les instructions d'installation sont définies dans le README du projet espace-membre.

Nous utilisons **Storybook** principalement pour documenter l’apparence des emails, et potentiellement d'autres composants à l’avenir. Afin de garder la base de code principale propre et bien organisée, Storybook est configuré comme un **sous-module Git** dans un dépôt séparé.

### Commandes disponibles une fois le projet installé

Vous pouvez exécuter les commandes suivantes, définies dans le `package.json` :

-   `npm run storybook` : Lance l’application Storybook — elle devrait s’ouvrir automatiquement dans votre navigateur.
-   `npm run chromatic` : Si vous avez un token Chromatic (voir ci-dessous), cette commande construit et envoie votre Storybook à Chromatic.
-   `npm run build-storybook` : Génère la version statique de Storybook.

### Chromatic

Pour activer Chromatic, créez un fichier `.env` dans le dossier `storybook` et ajoutez-y la variable d’environnement suivante :

```bash
CHROMATIC_PROJECT_TOKEN=your_token_here
```

Vous pouvez obtenir un token gratuitement en créant un projet sur [chromatic.com](https://www.chromatic.com).
