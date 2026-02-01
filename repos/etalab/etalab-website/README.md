<p align="center">
    <a href="https://github.com/etalab/etalab-website/actions">
      <img src="https://github.com/etalab/etalab-website/workflows/ci/badge.svg?branch=main">
    </a>
</p>

🏗 **This is a work in progress.**  

# Code source of www.etalab.gouv.fr  

This is a new implementation of the Etalab's website.  

[Figma](https://www.figma.com/proto/6uu0scYgj04sohMisvZVWn/MAQUETTES-SITE-ETALAB?page-id=134%3A80623&node-id=134%3A80624&viewport=738%2C427%2C0.07&scaling=min-zoom&starting-point-node-id=134%3A80624)

## Docker 

```bash
docker build -t etalab-website .
docker run -p 3000:3000 etalab-website
```

## Deployment  

While it's being worked on the website is deployed at this url: https://etalab.tsafe.dev  
It will eventually be live at https://etalab.gouv.fr  

The website is currently deployed on [the sspcloud](https://www.sspcloud.fr).  
You can find [here](https://github.com/etalab/helm-charts/tree/main/charts/etalab-website) the Helm chart that package this website.  
The GitOps repo that monitor what we have in production, here at Etalab, on the SSPCloud is [here](https://github.com/etalab/paris-sspcloud) (private repo).  
There is a Docker image deployed as [`etalab/etalab-website` on DockerHub](https://hub.docker.com/r/etalab/etalab-website).  

To update production, update the [`package.json` version number](https://github.com/etalab/etalab-website/blob/3207a9065a1e2036d21f14b3904f5d6a670b7bb9/package.json#L3).  
