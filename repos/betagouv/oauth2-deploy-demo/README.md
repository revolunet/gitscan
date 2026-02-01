# scalingo oauth2-deploy-demo

sample NodeJS application behind [oauth2-proxy](https://oauth2-proxy.github.io/oauth2-proxy/) for scalingo.

use [oauth2-proxy-buildpack](https://github.com/betagouv/oauth2-proxy-buildpack)

![](oauth2-proxy.png)

Example setup : https://oauth2-deploy-demo.incubateur.net/

## Setup

Choose your OAUTH provider wisely

Add environment variables to your scalingo app:

```sh
# example for GitHub
OAUTH2_PROXY_PROVIDER=github
OAUTH2_PROXY_GITHUB_ORG=betagouv
OAUTH2_PROXY_EMAIL_DOMAINS=*
OAUTH2_PROXY_SCOPE=read:org user:email
# example for ProConnect
OAUTH2_PROXY_PROVIDER=oidc
OAUTH2_PROXY_EMAIL_DOMAINS=beta.gouv.fr
OAUTH2_PROXY_OIDC_ISSUER_URL=https://fca.integ01.dev-agentconnect.fr/api/v2
OAUTH2_PROXY_PROMPT=login
OAUTH2_PROXY_REDIRECT_URL=https://oauth2-deploy-demo.incubateur.net/oauth2/callback
OAUTH2_PROXY_SCOPE=openid given_name usual_name email profile
OAUTH2_PROXY_BACKEND_LOGOUT_URL=https://fca.integ01.dev-agentconnect.fr/api/v2/session/end?id_token_hint={id_token}&state=something42&post_logout_redirect_uri=https%3A%2F%2Foauth2-deploy-demo.incubateur.net
# config
OAUTH2_PROXY_BANNER=private access
OAUTH2_PROXY_COOKIE_DOMAINS=oauth2-deploy-demo.incubateur.net
OAUTH2_PROXY_COOKIE_SECURE=true
OAUTH2_PROXY_CUSTOM_SIGN_IN_LOGO=https://avatars.githubusercontent.com/u/7874148?s=200&v=4
OAUTH2_PROXY_FOOTER=powered by oauth2-proxy
OAUTH2_PROXY_REDIRECT_URL=https://oauth2-deploy-demo.incubateur.net/oauth2/callback
OAUTH2_PROXY_REVERSE_PROXY=false
OAUTH2_PROXY_SET_AUTHORIZATION_HEADER=true
OAUTH2_PROXY_SET_XAUTHREQUEST=true
OAUTH2_PROXY_SKIP_PROVIDER_BUTTON=false
OAUTH2_PROXY_UPSTREAMS=http://127.0.0.1:8080
# exclude n8n webhooks
OAUTH2_PROXY_SKIP_AUTH_ROUTES=/webhook-.*
# exclude metabase public shares
OAUTH2_PROXY_SKIP_AUTH_ROUTES=/app/.*,/public/.*,/api/public/.*
# secrets
OAUTH2_PROXY_CLIENT_ID=[oauth provider client ID]
OAUTH2_PROXY_CLIENT_SECRET=[oauth provider client secret]
OAUTH2_PROXY_COOKIE_SECRET=[instance specific cookie secret]
```

and any other [oauth2-proxy](https://oauth2-proxy.github.io/oauth2-proxy/configuration/overview?_highlight=variables#environment-variables) configuration.

tips:

- see [this page](https://oauth2-proxy.github.io/oauth2-proxy/configuration/overview?_highlight=cookie#generating-a-cookie-secret) to generate the cookie secret.
- create a [GitHub oAuth app](https://github.com/organizations/betagouv/settings/applications/new).
- create a [ProConnect oAuth app](https://partenaires.proconnect.gouv.fr/apps).

For ProConnect, custom claims (ex: given_name, usual_name) will be available when [this upstream PR](https://github.com/oauth2-proxy/oauth2-proxy/pull/2685) will be merged.
