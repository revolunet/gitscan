# Grist AV

A proxy for Grist handling antivirus scans using [Je clique ou pas ?](https://jecliqueoupas.cyber.gouv.fr/accueil). Meant to be used on Kubernetes with nginx-ingress.

## Local dev setup

To test locally with the live API you can use the provided `docker-compose.yml`.

```bash
cp .env.sample .env
# then adjust .env to your needs

# build and start the service
# along with a basic server that listens for forwarded requests
docker compose up --build -d

# create test file to upload
dd if=/dev/random of=/tmp/random.1k bs=1024 count=1
# post file with curl
curl -X POST -F 'upload=@/tmp/random.1k' localhost:8080/dw/dw/v/v/uploads
# check the logs for grav and for the forwarded service
docker compose logs grav
docker compose logs testforward
```

## Testing integration locally

Set up a minikube node with KVM and mount the project directory on the node.

```bash
minikube start --cni calico --mount=true --mount-string=$(pwd):/grav --addons=ingress,metrics-server
```

Prepare Grist's dependencies (S3, PostgreSQL, Redis) and deploy Grist's Helm chart. This can all be done using [the Terraform example in the chart's repository](https://github.com/numerique-gouv/helm-charts/tree/main/charts/grist/examples/terraform).

Create the grav deployment,service and ingress with the deployment mounting the project directory from the node. An example implementation can be found under `integration/grav.tf`.

Run `start.sh` to install dependencies and run the current working directory's code in minikube.
