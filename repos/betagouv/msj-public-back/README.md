# Installation

Pour pouvoir runner l'application en local, il vous faudra créer la base de données Postgres manuellement.

Depuis PSQL:
```
CREATE USER your_username WITH PASSWORD 'your_password';
CREATE DATABASE your_database_name;
GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_username;
```

Ensuite, vous pouvez effectuer les migrations et potentiellement seeder la DB:
```
npm run migrate:up
npx sequelize-cli db:seed:all
```