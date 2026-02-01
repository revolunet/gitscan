# Keycloak Client IP WhitelistExecutor

Ce projet implémente un ClientPolicyExecutor personnalisé pour Keycloak qui permet de restreindre l'authentification des clients à des plages d'adresses IP spécifiques (blocs CIDR).

## Fonctionnalités

- **Validation d'adresses IP** : Vérifie que l'adresse IP du client est dans les plages autorisées
- **Support des blocs CIDR** : Prend en charge la notation CIDR (ex: 192.168.1.0/24)
- **Support des proxies** : Gère les en-têtes X-Forwarded-For et X-Real-IP
- **Configuration flexible** : Les plages IP sont configurées via les attributs du client
- **Logging détaillé** : Fournit des logs pour le débogage et la surveillance

## Configuration

### Attribut du client

Le ClientPolicyExecutor utilise l'attribut `allowed.ip.ranges` du client pour définir les plages IP autorisées.

**Format** : Liste de blocs CIDR séparés par des virgules
**Exemple** : `192.168.1.0/24,10.0.0.0/8,203.0.113.0/24`

### Configuration dans Keycloak

1. **Déployer le ClientPolicyExecutor** :
   ```bash
   ./deploy-client-ip-restriction.sh
   ```

2. **Configurer le ClientPolicyExecutor** :
   - Se rendre dans "Realm settings"
   - Aller dans l'onglet Client policies
   - Créer un nouveau "client profile" (bouton "Create client profile")
   - Renseigner le nom (ex: "IP Restriction Profile")
   - Dans "Executors" il faut ajouter "df-ip-whitelist-client"
   - Ensuite il faut créer une "Client policy" onglet Policies (bouton "Create client policy")
   - Renseigner le nom (ex: "IP Restriction Policy")
   - Pour savoir sur qu'elle client appliquer la politique, dans la partie "Conditions" ajouter une condition
   - Choisir "Client attribute" dans le menu déroulant
   - Renseigner comme clé : "has.ip.restriction" et comme valeur "true"

3. **Ajouter l'attribut au client** :
    - Utiliser le script `add-client-attribute.sh` pour ajouter l'attribut `allowed.ip.ranges` au client
    - Utiliser le même script pour ajouter l'attribut `has.ip.restriction` avec la valeur `true` au client

```bash
     ./add-client-attribute.sh "client-id" "realm" allowed.ip.ranges '10.0.0.0/8' "user" "password" "keycloak auth url"
     ./add-client-attribute.sh "client-id" "realm" has.ip.restriction true "user" "password" "keycloak auth url"
```

## Exemples de configuration

### Plages IP privées
```
192.168.0.0/16,10.0.0.0/8,172.16.0.0/12
```

### Plages IP spécifiques
```
203.0.113.0/24,198.51.100.0/24
```

### IP unique
```
192.168.1.100/32
```

## Comportement

- **Sans restriction** : Si aucun attribut `allowed.ip.ranges` n'est configuré, l'accès est autorisé
- **Avec restriction** : Seules les adresses IP dans les plages configurées sont autorisées
- **Erreur d'IP** : Si l'adresse IP ne peut pas être déterminée, l'accès est refusé
- **IP non autorisée** : Si l'adresse IP n'est pas dans les plages autorisées, l'accès est refusé

## Détection de l'adresse IP

Le ClientPolicyExecutor tente de déterminer l'adresse IP du client dans l'ordre suivant :

1. **X-Forwarded-For** : En-tête utilisé par les proxies/load balancers
2. **X-Real-IP** : En-tête alternatif pour les proxies
3. **Remote Address** : Adresse IP directe de la connexion

## Logs

Le ClientPolicyExecutor génère des logs détaillés pour le débogage :

- **DEBUG** : Informations sur la validation des IP
- **WARN** : Avertissements sur les IP non autorisées
- **ERROR** : Erreurs lors de la validation

## Tests

Le projet inclut des tests unitaires complets :

```bash
mvn test
```

Les tests couvrent :
- Validation des plages CIDR
- Gestion des cas limites
- Support des en-têtes de proxy
- Gestion des erreurs

## Développement

### Structure du projet

```
src/main/java/fr/dossierfacile/keycloak/
├── ClientIpRestrictionAuthenticator.java    # Authenticator principal
├── ClientIpRestrictionAuthenticatorFactory.java  # Factory pour l'enregistrement
└── IpValidationService.java                 # Service de validation IP

src/test/java/fr/dossierfacile/keycloak/
├── ClientIpRestrictionAuthenticatorTest.java  # Tests de l'authenticator
└── IpValidationServiceTest.java             # Tests du service de validation
```

### Compilation

```bash
mvn clean compile
```

### Construction du JAR

```bash
mvn clean package
```

## Déploiement

1. **Construire le projet** :
   ```bash
   mvn clean package
   ```

2. **Déployer dans Keycloak** :
   ```bash
   ./deploy-client-ip-restriction.sh
   ```

3. **Redémarrer Keycloak** pour charger le ClientPolicyExecutor

## Compatibilité

- **Keycloak** : Version 22.0.5+
- **Java** : Version 17+
- **Maven** : Version 3.6+