This repository contains the helm chart to deploy albert-api and its components on Kubernetes.

## Repository structure

In `albert-stack` folder, we referenced the helm chart to deploy manually albert-api v0.1.1 and its components on Kubernetes. You can base your deployment on Scalweway infrastructure using the tofu files provided in `tofu/scaleway` folder.
In `opengatellm-stack` folder, we referenced the the helm chart to deploy manually albert-api v0.2.0 and its components on Kubernetes. You can base your deployment on Scalweway infrastructure using the tofu files provided in `tofu/scaleway` folder.
In `tofu/scaleway` folder, you will find the tofu files to create a kubernetes cluster on Scaleway. Please adapt it according your needs.

## Provisioning

### Manually
- Create a kubernetes cluster with the provider of your choice. To fo so, you can use the Terraform module available in this repository, or use the Scaleway console to create a managed kubernetes cluster.
- We recommend having at least 3 nodes, including one with a GPU sized for the LLM you wish to use.
- Add the following label to your gpu node : `k8s.scaleway.com/pool-name: "gpu"`, and for your other nodes : `k8s.scaleway.com/pool-name: "cpu-ram"` so that each deployment goes to the appropriate node.
- Verify that the connection with your cluster is functional and that the nodes are available with `kubectl get nodes`

### Using Terraform (Scaleway provider)

We are provisioning the kubernetes cluster with Terraform, using the Scaleway provider. You can use this module to create a kubernetes cluster with the provider of your choice.
> **Note**: We are storing the tfstate locally.

In order to use Terraform, you need to create a file `scaleway.auto.tfvars` in the root of the repository with the following content:

```hcl
# scaleway.auto.tfvars
access_key = "XXXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
secret_key = "XXXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
organization_id = "cae0ea36-fd89-47c3-9a9f-5dd2b2db3de3"
project_id = "ffc1bdea-2094-4dc6-848a-8ca9d1d001b7"
```

Run the Terraform commands to initialize the provider, plan and apply the configuration.

Then go to the Scaleway interface in order to download the new kubeconfig from Scaleway console and update your local kubeconfig file with the following command:

```bash 
export KUBECONFIG=<path_to_your_kubeconfig_file>
```

## Deployment
- Create a kubernetes cluster with the provider of your choice. We provide tofu files to easily create an adequate cluster with an H100 on scaleway.
- To do so, create a `tofu/scaleway/scaleway.auto.tfvars` file and fill it with your credentials.
- Run `tofu apply` from the `tofu/scaleway` folder. 
- In `opengatellm-stack/values.yaml`, replace the secrets and API key with values of your choice. You can also customize your deployment via this file, for example the tag of the API version to deploy, rate limiting, API keys for the different deployed services (redis, elastic search, Qdrant, etc), ports, hardware configuration requested by each pod, etc.
- From the `opengatellm-stack` folder, install the helm chart with the command `helm install opengatellm-stack .`
- Monitor the deployment via the kubernetes dashboard, or via a tool like `k9s`.
- If some components don't start, or are stuck in "Pending", check why with `kubectl describe <pod_name>`.
- If they start but remain in error, you can check the logs with `kubectl logs <pod_name>`
- The entire stack can take 15-20 minutes to deploy
- The "opengatellm" deployment will fail in a loop until the two deployments "embedding" and "vllm" are in "Running" status.
- Once all services are "Running", you can get the public IP of the load balancer with `kubectl describe svc opengatellm`.
- Use the value of `LoadBalancer Ingress` to contact the API, for example:


To list the available models, you can use the following command:
```
curl http://YOUR_LOAD_BALANCER_INGRESS_IP/v1/models \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer changeme" \
```

To test the API, you can use the following command to send a chat completion request:
```
curl http://YOUR_LOAD_BALANCER_INGRESS_IP/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer changeme" \
  -d '{
    "model": "mistralai/Mistral-Small-3.1-24B-Instruct-2503",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Qui es tu ?"
      }
    ]}'
```

```bash 
curl -X 'POST' 'http://YOUR_LOAD_BALANCER_INGRESS_IP.fr/v1/embeddings' \
  -H 'accept: application/json' \
    -H "Authorization: Bearer changeme" \
    -H 'Content-Type: application/json' \
    -d '{
        "input": [0],
        "model": "embeddings-small",
        "dimensions": 0,
        "encoding_format": "float",
        "additionalProp1": {}
    }'
```
