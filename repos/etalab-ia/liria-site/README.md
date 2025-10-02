## Build

### Install Yarn

```
sudo npm install --global yarn
export PATH="$PATH:/opt/yarn-[version]/bin"
```

### Install vuepress

```
cd liria-site
yarn install
```

### dev

```
yarn vuepress dev
```

Go to http://localhost:8080/

### static

```
yarn vuepress build
```
