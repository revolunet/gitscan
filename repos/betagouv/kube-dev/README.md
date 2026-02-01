# argocd resources

For [argo.kube-dev.incubateur.net](https://argo.kube-dev.incubateur.net)

## Apps of apps

| app                                                      | purpose                                                                    |
| -------------------------------------------------------- | -------------------------------------------------------------------------- |
| [kube-resource-report](./apps/kube-resource-report.yaml) | [kube-resource-report](https://codeberg.org/hjacobs/kube-resource-report)  |
| [manifests](./apps/manifests.yaml)                       | various kubernetes resources in [./manifests](./manifests)                 |
| [metabases](./apps/metabases.yml)                        | metabase deployments defined in [./metabases](./metabases)                 |
| [oauth2-proxy](./apps/oauth2-proxy.yaml)                 | Shared [oauth2-proxy](https://oauth2-proxy.github.io) server               |
| [oauth2-routes](./apps/oauth2-routes.yml)                | oauth2-proxy as a service as defined in [./oauth2-routes](./oauth2-routes) |
| [pgs](./apps/pgs.yml)                                    | PostgreSQL instances defined in [./pgs](./pgs)                             |

## Conventions

### Ingress

Add oauth2 protection with:

```yaml
ingress:
  annotations:
    nginx.ingress.kubernetes.io/auth-response-headers:
      X-Auth-Request-Email,X-Auth-Request-Preferred-,X-Auth-Request-Access-Token,
      X-Auth-Request-Roles,X-Auth-Request-User,X-Auth-Request-Groups,X-Forwarded-Groups,
      Authorization
    nginx.ingress.kubernetes.io/auth-signin: https://oauth.[CLUSTER_HOST]/oauth2/start?rd=https%3A%2F%2F$host$escaped_request_uri
    nginx.ingress.kubernetes.io/auth-url: https://oauth.[CLUSTER_HOST]/oauth2/auth
```

### [matomo-to-pg](https://github.com/betagouv/matomo-to-pg) CronJobs

Add a cronjob and associated secret somewhere :

```sh
kubectl create secret generic matomo-to-pg-xxx -n ns \
    --from-literal=SOURCE_DATABASE_URL='mysql://user:pass@host:3306/db' \
    --from-literal=TARGET_DATABASE_URL='postgresql://user:pass@host:5432/db' \
    --from-literal=SITE_ID='xxx'
```
