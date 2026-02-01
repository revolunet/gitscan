# Co-Construisons - API

Co-Bot API permet de gérer le comportement du chat bot de Co-Construisons dont le code source est disponible ici https://github.com/betagouv/co-constuisons-bot.git.
Cet API est réalisée en NodeJS + GraphQL (base de donnée MongoDB).

# Préambule

Cette API nécessite que vous disposiez d'un environnement NodeJS (v9.10) et MongoDB (3.6)

# Installation (dev mode)

1. Récupérer le code source de l'API :
```
git clone https://github.com/MTES-MCT/cobot-api.git
```

2. Installer les dépendances :
```
npm install
```

3. Configurer les variables d'environnements  
A la racine du projet créez le fichier ```.env``` et créez les variables suivantes :

	| VAR                     | Type           | Commentaire                                                             			|
	| ----------------------- |----------------| -----------------------------------------------------------------------------|
	| NODE_ENV        				| string         | development|production																									 			|
	| DB_USER                 | string         | Le nom d'utilisateur de la base de donnée                                    |
	| DB_PWD                  | string         | Le mot de passe utilisateur de la base de donnée                             |
	| DB_HOST                 | string         | L'url/ip du serveur de base donnée                                           |
	| DB_PORT 				        | string         | Le port de la base de donnée                                                 |
	| DB_NAME                 | string         | Le nom de la base de donnée (coconstruisons)                                 |
	| JWT_SECRET              | string         | Permet de signer le token                                                    |
	| HOST                    | string         | L'url/ip du serveur d'API                     			                          |
    | PORT                    | string         | Le port du serveur d'API                     			                          |


4. Lancer l'API (dev mode)

```
npm run dev
```

# Note
Les APIs étant sécurisées via un JSON WEB TOKEN (http bearer), il est impératif de créer un prermier compte dans la collection "user" de la base donnée "coconstruisons". Notez que le mot de passe doit être chiffré (utilisation de [bcrypt](https://www.npmjs.com/package/bcrypt])).

Cet utilisateur devra être renseigné dans la configuration du [Bot Co-construisons](https://github.com/MTES-MCT/cobot-bot.git)

# GraphQL
Documentation : [https://graphql.org](https://graphql.org)

