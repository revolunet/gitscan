# euphrosyne-tools-infra

Infrastructure as Code de mise à disposition des outils aux chercheurs NewAGLAE

## TLDR

```
terraform init -backend-config="key=<staging|production>.tfstate" -backend-config="access_key=<access_key>"
terraform apply
```

## Authentification avec Azure

Cette documentation est un condensé du tutoriel [Terraform Azure Example](https://learn.hashicorp.com/tutorials/terraform/azure-build?in=terraform/azure-get-started).

### 1. Paramétrage de la CLI d'Azure

Dans un premier temps, la commande suivante permet de s'authentifier via le navigateur et de paramétrer le compte à utiliser.

```
az login
```

Cette commande retourne une liste d'informations sur les différentes souscriptions Azure disponibles.

Sélectionnez parmi-elles l'`id` de la souscription à utiliser et utilisez la commande suivante pour l'utiliser avec Azure CLI.

```
az account set --subscription "<ID>"
```

### 2. Authentification via un _Service Principal_ d'Azure pour autoriser Terraform

Si ce n'est pas fait, créer un Service Principal sur le portail Azure comme expliqué ici : https://learn.hashicorp.com/tutorials/terraform/azure-build?in=terraform/azure-get-started#create-a-service-principal

Puis, ajouter les variables d'envronnement :

```
export ARM_CLIENT_ID="<APPID_VALUE>"
export ARM_CLIENT_SECRET="<PASSWORD_VALUE>"
export ARM_SUBSCRIPTION_ID="<SUBSCRIPTION_ID>"
export ARM_TENANT_ID="<TENANT_VALUE>"
```

Ces variables seront utilisées lors de l'exécution de la commande `terraform apply`. Le paramétrage du backet et `terraform init` utilise la `access_key` (voir section Initalisation de Terraform).

## Préparation du `backend` azurem pour Terraform

Un [backend](https://www.terraform.io/language/settings/backends/configuration) définit où Terraform sauvegarde l'état des ressources qu'il gère.
Nous stockons cette information sur un containeur dédié chez Azure.

Le backend est défini dans le fichier `main.tf` dans le block `backend "azurerm" { ... }`.

Voici les étapes pour préparer ce stockage :

1. Créer le groupe de ressource / resource group. Par défaut, il doit se nommer `Euphrosyne_tfstate`.
2. Créer le compte de stockage / account storage. Par défaut, il doit se nommer `euphrosynetfstate`.
3. Créer le container `tfstate`.

Tout est prêt pour initialiser Terraform. Avec cette configuration, nous pouvons lui passer le paramètre `key` du backend azurem pour gérer différents environnements.

Voir la documentation [partial configuration](https://www.terraform.io/language/settings/backends/configuration#partial-configuration) sur les backends Terraform pour les différentes manières de configurer le backend azurem.

## Initalisation de Terraform

Pour initialiser terraform, lancez la commande suivante, en passant l'environnement `staging` ou `production`.

```
terraform init -backend-config="key=<staging|production>.tfstate" -backend-config="access_key=<access_key>"
```

Le paramètre `access_key` sert à authentfier Terraform auprès du compte de stockage lors de l'écriture du `state`. Voir le lien suivant pour la récupérer : https://learn.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal#view-account-access-keys

## Paramétrage de la base de données Guacamole

Référence : [documentation Guacamole](https://guacamole.apache.org/doc/gug/guacamole-docker.html#initializing-the-mysql-database)

Une fois la base de données mysql pour Guacamole lancée, il est nécessaire de lancer un script mysql pour l'initialiser.

Le script peut être généré localement :

```
docker run --rm guacamole/guacamole /opt/guacamole/bin/initdb.sh --mysql > initdb.sql
```

D'une machine ou la base de données est accessible, lancez ensuite la commande suivante :

```
sudo mysql --host="{DB_HOST}" --user="euphrosyne" --password="{PASSWORD}" --database="guacamole" < initdb.sql
```

## Mettre à jour le template Bicep

```bash
az ts create --name vmSpec --version "[version]" --resource-group [resourceGroupeName] --location "[location]" --template-file "./bicep/infra.bicep"
```

## Troubleshooting / Résolution des problèmes

> A resource with the ID "/subscriptions/ID/resourceGroups/RG" already exists - to be managed via Terraform this resource needs to be imported into the State.

Le Resource Group existe déjà et doit être importé par terraform avant d'être utilisé.

`terraform import azurerm_resource_group.rg /subscriptions/<SUBSCRIPTION_ID>/resourceGroups/<RESOURCE_GROUP_NAME>`

> The subscription is not registered to use namespace 'X.Y'.

Ajouter les resource providers à la souscription. https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types#register-resource-provider-1
Les resource providers nécessaires sont :

```
Microsoft.KeyVault
Microsoft.Web
Microsoft.Compute
Microsoft.ContainerInstance
Microsoft.DBforMySQL
```

> Guacamole ne peut pas se connecter à la base de données.

Il est parfois nécessaire de lancer une deuxième fois pour les subnets se configures correctement.
Lancez la commande `terraform plan` pour voir s'il y a des changements à apporter à l'infrastructure.
