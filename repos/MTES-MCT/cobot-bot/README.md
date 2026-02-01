# Co-Construisons - BOT

Co-Bot est un bot ayant pour but d'animer une communauté de micro-contributeur autour de différents jeux de données.

Dans cette version ce bot permet d'intéragir avec les utilisateurs de [Slack](http://www.slack.com). Par la suite celui-ci sera connecté à Facebook Messenger et Ariane, basé sur [Rocket Chat](http://rocket.chat), un Slack-like libre.

Co-Bot est la pièce maitresse du projet "Co-Construisons". De plus amples informations peuvent être trouvées ici [https://co-construisons.beta.gouv.fr](https://co-construisons.beta.gouv.fr)

# Préambule

Cet API nécessite que vous disposiez d'un environnement NodeJS (v9.10)
Co-Bot nécessite que vous disposiez d'une "Slack App" correctement configuré de sorte à ce que vous disposiez des différents identifiants recquis pour dialoguer avec les APIs Slack.
Co-Bot nécessite également l'accès à l'API co-coconstruisons, disponible ici [https://co-construisons.beta.gouv.fr](https://github.com/MTES-MCT/cobot-api.git). Cet API permet notamment de définir les éléments de langage du BOT ainsi que les actions de celui-ci.

# Installation (dev mode)

1. Récupérer le code source du bot :
```
git clone https://github.com/betagouv/co-constuisons-bot.git
```

2. Installer les dépendances :
```
npm install
```

3. Configurer les variables d'environnements  
A la racine du projet créer le fichier ```.env``` et créez les variables suivantes :

	| VAR                     | Type           | Commentaire                                                             			|
	| ----------------------- |----------------| -----------------------------------------------------------------------------|
	| NODE_ENV        				| string         | development|production																									 			|
	| API_URL                 | string         | L'url de l'API co-construisons                                          			|
	| BOT_EMAIL               | string         | Email du bot user (cf. documentation de l'API)																|
	| BOT_PASSWORD            | string         | Mot de passe du bot user (cf. documentation de l'API)                   			|
	| WEB_SITE				        | string         | La page sur laquelle sera redirigée l'utilisateur après installation du bot	|		
	| SLACK_CLIENT_ID         | string         | Le client id de votre slack APP                                         			|
	| SLACK_CLIENT_SECRET     | string         | Le client secret de votre slack APP                                     			|
	| SLACK_REDIRECT_URI      | string         | L'url de retour une fois l'application Slack installée sur un workspace 			|

4. Lancer le bot (dev mode)

```
npm run dev
```

# Note
Lors du démarrage du serveur, le bot lance une tâche "cron" permettant d'intéragir avec les utilisateurs. Cette tâche est lancée tous les jours du Lundi au Vendredi à 12h15 et vérifie la liste des utilisateurs disponible. La fréquence d'exécution de cette tâche est modifiable dans `src/lib/bot/scheduledJob.js`

Pour faciliter le dévelopement local du bot et compte tenu des besoins de configuration de Slack, nous vous conseillons d'utiliser [ngrok](https://ngrok.com) qui vous permettra de créer un tunnel pour vos applications locales.

# Slack API
Documentation : [https://api.slack.com](https://api.slack.com)