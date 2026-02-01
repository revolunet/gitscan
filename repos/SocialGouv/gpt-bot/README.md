# gpt-bot
A ChatGPT bot for Mattermost

## Development

```shell
yarn install
yarn build
node ./dist/index.js
```

## Docker

```shell
docker build . -t gpt-bot
```

```shell
docker run -d \
  -e MATTERMOST_BOT_NAME="@name_of_your_bot" \
  -e MATTERMOST_TOKEN=xxxxxxxxxxxxxxxxxxxxxxx \
  -e MATTERMOST_URL=https://my.mattermost.server.url \
  -e OPENAI_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx \
  --name gpt-bot \
  gpt-bot
```
