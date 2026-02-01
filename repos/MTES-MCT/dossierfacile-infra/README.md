# Gestionnaire d'Infrastructure OVHcloud avec Pulumi et Nix

Ce projet déploie et gère une infrastructure sur OVHcloud en utilisant Pulumi pour l'Infrastructure as Code (IaC) et Nix pour garantir un environnement de développement reproductible.

Le projet est structuré en deux stacks Pulumi interdépendantes :
1.  **`main_stack`**: Cette stack est responsable de la création du projet Public Cloud OVH, qui sert de conteneur pour toutes les autres ressources.
2.  **`data_stack`**: Cette stack déploie les ressources de stockage. Elle crée plusieurs buckets S3 ainsi que les utilisateurs et les politiques IAM nécessaires pour un accès sécurisé et cloisonné aux données.

---

## Installation de Nix (Prérequis)

Ce projet nécessite Nix avec la fonctionnalité **flakes** activée.

### Étape 1 : Installer Nix

La méthode d'installation recommandée est l'installation multi-utilisateurs, qui assure une meilleure isolation et sécurité. Ouvrez un terminal et exécutez la commande suivante :

```bash
sh <(curl --proto '=https' --tlsv1.2 -L https://nixos.org/nix/install) --daemon
```

Suivez les instructions affichées par le script. Une fois l'installation terminée, **fermez et rouvrez votre terminal** pour que les changements prennent effet.

### Étape 2 : Activer les Flakes

Les flakes sont une fonctionnalité expérimentale qui doit être activée manuellement.

1.  **Créez ou modifiez le fichier de configuration de Nix.**
    -   Sur **macOS** ou d'autres distributions **Linux** (non-NixOS), ce fichier se trouve généralement à `~/.config/nix/nix.conf`.
    -   Créez le répertoire et le fichier s'ils n'existent pas :
        ```bash
        mkdir -p ~/.config/nix
        touch ~/.config/nix/nix.conf
        ```

2.  **Ajoutez la ligne suivante au fichier `nix.conf`** :
    ```
    experimental-features = nix-command flakes
    ```

Après avoir sauvegardé le fichier, Nix est prêt à être utilisé avec ce projet.

---

## Mise en Place de l'Environnement

Le projet utilise un `flake.nix` pour définir et gérer l'environnement de développement. Pour l'activer, exécutez la commande suivante à la racine du projet :

```bash
nix develop
```

Cette commande va automatiquement :
- Installer toutes les dépendances requises (`pulumi`, `python`, `nodejs`, `poetry`, etc.).
- Configurer un environnement virtuel Python (`.venv`).
- Installer les dépendances Python du projet avec Poetry.
- Vous authentifier sur le CLI Bitwarden pour récupérer les secrets nécessaires (clés d'API OVH, backend S3 Pulumi, etc.).
- Configurer Pulumi pour utiliser le backend S3 approprié.

**Note importante :** Au premier lancement, le script vous demandera vos identifiants Bitwarden si les variables d'environnement ne sont pas définies.

### Configuration Non-Interactive (CI/CD)

Pour une utilisation non-interactive (par exemple, dans un script ou en intégration continue), vous pouvez pré-configurer les variables d'environnement suivantes avant de lancer `nix develop`.

-   `BW_CLIENTID`: Votre "client_id" d'API Bitwarden.
-   `BW_CLIENTSECRET`: Votre "client_secret" d'API Bitwarden.
-   `BW_PASSWORD`: Votre mot de passe principal Bitwarden.

En définissant ces variables, le script d'initialisation n'aura pas besoin de vous les demander de manière interactive.

```bash
# .envrc
export BW_CLIENTID="votre_client_id"
export BW_CLIENTSECRET="votre_client_secret"
export BW_PASSWORD="votre_mot_de_passe_principal"
```

---

## Structure du Projet

```
.
├── flake.nix              # Fichier de configuration de l'environnement Nix
├── package.json           # Dépendances Node.js (pour le CLI Bitwarden)
└── ovh-server/
    ├── pyproject.toml     # Dépendances Python gérées par Poetry
    ├── data/              # Stack Pulumi pour les ressources de données (S3, utilisateurs)
    │   ├── __main__.py
    │   └── Pulumi.yaml
    └── main_stack/        # Stack Pulumi pour le projet Public Cloud OVH
        ├── __main__.py
        └── Pulumi.yaml
```
---

## Déploiement de l'Infrastructure

Le déploiement doit se faire dans un ordre précis, car la stack `data` dépend des ressources créées par la `main_stack`.

### Étape 1 : Déployer la `main_stack`

Cette stack crée le projet Public Cloud OVH.

1.  Assurez-vous d'être dans l'environnement Nix (`nix develop`).
2.  Placez-vous dans le répertoire de la stack :
    ```bash
    cd ovh-server/main_stack
    ```
3.  Déployez la stack avec Pulumi :
    ```bash
    pulumi up
    ```
    Pulumi vous montrera un aperçu des ressources à créer. Confirmez pour lancer le déploiement.

### Étape 2 : Déployer la `data` stack

Cette stack crée les buckets S3 et les utilisateurs.

1.  Placez-vous dans le répertoire de la stack :
    ```bash
    cd ../data
    ```
2.  Déployez la stack :
    ```bash
    pulumi up
    ```
    Cette commande déploiera les buckets et les utilisateurs en se basant sur l'identifiant du projet créé à l'étape précédente.

---

## Gestion des Dépendances

-   **Environnement** : Géré par `flake.nix`.
-   **Python** : Gérées par `Poetry` via le fichier `ovh-server/pyproject.toml`. Les dépendances sont installées automatiquement par le `shellHook` de Nix.
-   **Node.js** : Gérées par `npm` via `package.json`, principalement pour le CLI Bitwarden.

---

## Pulumi

### Gestion des Stacks

La gestion de la configuration et des sorties des stacks Pulumi se fait via des commandes CLI simples. Assurez-vous d'être dans le répertoire de la stack concernée (`ovh-server/main_stack` ou `ovh-server/data_stack`) avant d'exécuter ces commandes.

#### Consulter la Configuration

La configuration d'une stack contient les paramètres nécessaires à son déploiement (par exemple, des identifiants de projet ou des noms de ressources).

-   **Pour voir la configuration (valeurs chiffrées pour les secrets)** :
    ```bash
    pulumi config
    ```

-   **Pour voir la configuration en clair (déchiffrer les secrets)** :
    > **Attention** : Cette commande affiche des informations sensibles en clair. Utilisez-la avec précaution.
    ```bash
    pulumi config --show-secrets
    ```

#### Consulter les Sorties (Outputs)

Les sorties d'une stack représentent les valeurs exportées par l'infrastructure après son déploiement. Elles sont souvent utilisées comme entrées pour d'autres stacks ou pour connecter des applications.

-   **Pour voir les sorties de la stack actuelle** :
    ```bash
    pulumi stack output
    ```

-   **Pour voir les sorties au format JSON (utile pour les scripts)** :
    ```bash
    pulumi stack output --json
    ```

### Documentation des Stacks

#### `main_stack`

Cette stack provisionne le projet Public Cloud OVH.

-   **Configuration** :
    -   Cette stack n'a pas de configuration personnalisable.

-   **Sorties (`outputs`)** :
    -   `project_id`: (String) L'identifiant unique du projet Public Cloud créé.

#### `data_stack`

Cette stack déploie les ressources de stockage S3, ainsi que les utilisateurs et les politiques IAM associés.

-   **Configuration** :
    -   `project_id`: (String, **secret**) L'identifiant du projet Public Cloud dans lequel les ressources doivent être créées. Cette valeur est généralement récupérée depuis la sortie de la `main_stack`.

-   **Sorties (`outputs`)** :
    -   `bucket_names`: (Array<String>) La liste des noms des buckets S3 créés.
    -   `s3_users`: (Array<Object>) Une liste d'objets représentant les utilisateurs S3 créés, avec pour chacun :
        -   `user_name`: (String) Le nom de l'utilisateur.
        -   `access_key_id`: (String) L'Access Key ID de l'utilisateur.
        -   `secret_access_key`: (String, **secret**) La Secret Access Key de l'utilisateur.