# Monitoring middleware for Hyperping->Mattermost

## How it works

- Hyperping: monitor is down
- => Sends webhook to this app
- => This app sends a message to Mattermost

The goal of the middleware is to send a message that will ping everyone (with @all), and only when specific critical monitors are down (outside of maintenance)

## Routes

- GET / => simple ping (used to monitor this service on Hyperping)
- POST / => webhook

## Deploying & Setup

- Git push on Scalingo. Need to define the env var MATTERMOST_WEBHOOK_URL and the env var PEPPER in the Scalingo dashboard
- You can find the webhook URL in the [mattermost settings](https://mattermost.incubateur.net/betagouv/integrations/incoming_webhooks)
- The app URL needs to be defined in the [Hyperping webhook settings](https://app.hyperping.io/integrations/int_jgnWRJXCbi1TOi) - it contains the PEPPER value
- PEPPER is used to obfuscate the webhook URL

The mattermost webhook configures which channel to ping at creation.

## Testing in local

`bundle install`

Run `ruby app.rb`

then:

```sh
  curl -X POST http://localhost:4567/ \
    -H "Content-Type: application/json" \
    -d '{"event":"check.down","check":{"name":"TestService","url":"https://entreprise.api.gouv.fr/","status":500,"monitorUuid":"test-uuid"}}'
```

If you want to send a real message from local to Mattermost, run the server with `MATTERMOST_WEBHOOK_URL=<real-webhook-url> app.rb`

## Docs

[Doc webhook hyperping](https://hyperping.com/docs/integrations/webhooks)
[Doc webhook mattermost](https://developers.mattermost.com/integrate/webhooks/incoming)
