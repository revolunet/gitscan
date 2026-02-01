# trackdechets-backups

Backups journaliers des bases de données suivantes :
- prisma prod
- prisma sandbox
- metabase

### Déploiement

Sur l'application Scalingo `trackdechets-backups`

### Administration

Si vous recevez le message "Part number must be an integer between 1 and 1000", il faut augmenter la valeur de la variable d'environnement
S3_ENDPOINT_PART_SIZE (en doublant la valeur par exemple).

