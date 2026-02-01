# Site AIC - Accélérateur d'initiatives citoyennes

## Fonctionnement général

### Code

Le code du site fonctionne à travers deux branches : `master` et `prepod-v2`. 
- La branche `master` est la production, à laquelle est connectée le back-office. Un `push` sur cette branche déploie le site sur https://eig.etalab.gouv.fr.
- La branche `prepod-v2` permet de tester les développements avant de les basculer sur la branche `master`. Un `push` sur cette branche déploie le site sur https://preprod.eig.etalab.gouv.fr (identifiants disponibles dans la documentation privée).

*Remarque : la branche `master` est en cours de renommage en `main`.*

### Contenus

Il existe deux façons de modifier les contenus (textes du site, biographies, articles, etc.) du site :

- Soit en modifiant directement les fichiers. Dans ce cas, le changement est à faire sur une branche créée pour l'occasion, puis à intégrer à `preprod-v2` pour visualiser les changements, et enfin à passer sur la branche `master` pour que envoyer les changements en production.

- Soit en passant par le [back-office](https://eig.etalab.gouv.fr/admin) du site. En effet, le site fonctionne comme un CMS. Chaque modification opérée via le back-office a d'abord le statut de `draft`. Une branche est automatiquement créée pour chaque draft. Lorsque l'auteur(e) change le statut de la modification de `draft` à `publié`, la branche est automatiquement mergée à `master`. *Note : pour accéder au back-office, les contributeur·trice·s doivent être membres du répertoire Github.*

## Fonctionnement technique : Hugo template for Netlify CMS

### Lancer le projet en local (= sur son ordinateur)

1. Cloner le repository
2. Installer les dépendances avec la commande `npm install`.
3. Utilisez une version antérieure de openssl avec `export NODE_OPTIONS=--openssl-legacy-provider` (sinon le projet ne se lance pas)
4. Lancer le projet avec la commande `npm run start`.

### Généralités

La documentation qui suit est en anglais car elle provient de Netlify directement.

This is a small business template built with [Victor Hugo](https://github.com/netlify/victor-hugo) and [Netlify CMS](https://github.com/netlify/netlify-cms), designed and developed by [Darin Dimitroff](http://www.darindimitroff.com/), [spacefarm.digital](https://www.spacefarm.digital).

### Layouts

The template is based on small, content-agnostic partials that can be mixed and matched. The pre-built pages showcase just a few of the possible combinations. Refer to the `site/layouts/partials` folder for all available partials.

Use Hugo’s `dict` functionality to feed content into partials and avoid repeating yourself and creating discrepancies.

### CSS

The template uses a custom fork of Tachyons and PostCSS with cssnext and cssnano. To customize the template for your brand, refer to `src/css/imports/_variables.css` where most of the important global variables like colors and spacing are stored.

### SVG

All SVG icons stored in `site/static/img/icons` are automatically optimized with SVGO (gulp-svgmin) and concatenated into a single SVG sprite stored as a a partial called `svg.html`. Make sure you use consistent icons in terms of viewport and art direction for optimal results. Refer to an SVG via the `<use>` tag like so:

```
<svg width="16px" height="16px" class="db">
  <use xlink:href="#SVG-ID"></use>
</svg>
```

## Contributions

Les contributions relevant de bugfix sur le code sont les bienvenues.
La modification des contenus textuels reste à la charge de l'équipe EIG.

## Licences

### Données et contenus

![Licence ouverte 2.0. Etalab](https://github.com/entrepreneur-interet-general/site-eig-v2/blob/master/documentation/resources/images/Logo_Licence_Ouverte_bleu_blanc_rouge.png?raw=true)

En ce qui concerne les données et les contenus, la licence utilisée est la [licence ouverte 2.0. Etalab](https://www.etalab.gouv.fr/wp-content/uploads/2018/11/open-licence.pdf), encourageant la réutilisation des données publiques mises à disposition gratuitement. Cette licence introduit une réutilisation obligatoire des données publiques (articles D.323-2-1 et D. 323-2-2 du Code des relations entre le public et l’administration). Cette licence donne un droit non exclusif et gratuit de réutilisation libre de l’information à des fins commerciales, ou non, pour le monde entier, et pour une durée illimitée. Il s’agit d’une licence permissive, comprenant toutefois une contrainte importante, nécessitant la mention de la paternité et la date de la dernière mise à jour (article L. 322-1 du Code des relations entre le public et l’administration). L’utilisateur est en droit de « reproduire l’information, de la copier, de l’adapter, de la modifier, de l’extraire et de la transformer pour créer des informations dérivées, de la communiquer, la diffuser, la redistribuer, la publier et la transmettre ; de l’exploiter à titre commercial ». La présente licence a vocation à être utilisée par les administrations pour la réutilisation de leurs informations publiques. Elle peut également être utilisée par toute personne souhaitant mettre à disposition de l’« Information » dans les conditions définies par la présente licence. La France est dotée d’un cadre juridique global visant à une diffusion spontanée par les administrations de leurs informations publiques afin d’en permettre la plus large réutilisation. Le droit de la « Réutilisation » de l’« Information » des administrations est régi par le code des relations entre le public et l’administration (CRPA) et, le cas échéant, le code du patrimoine (livre II relatif aux archives).Cette licence facilite la réutilisation libre et gratuite des informations publiques et figure parmi les licences qui peuvent être utilisées par l’administration en vertu du décret pris en application de l’article L.323-2 du CRPA. Etalab est la mission chargée, sous l’autorité du Premier ministre, d’ouvrir le plus grand nombre de données publiques des administrations de l’État et de ses établissements publics. Elle a réalisé la Licence Ouverte pour faciliter la réutilisation libre et gratuite de ces informations publiques, telles que définies par l’article L321-1 du CRPA. Cette licence est une version 2.0 de la Licence Ouverte. Etalab se réserve la faculté de proposer de nouvelles versions de la Licence Ouverte. Cependant, les « Réutilisateurs » pourront continuer à réutiliser les informations disponibles sous cette licence s’ils le souhaitent.
	
### Code
  
En ce qui concerne le code source du dépôt du répertoire, il est publié sous la licence MIT. Permission est accordée, sans frais, à toute personne obtenant une copie de ce logiciel et des fichiers de documentation associés (le « Logiciel »), pour traiter dans le Logiciel sans restriction, y compris, sans limitation, les droits d’utiliser, copier, modifier, fusionner, publier, distribuer, sous-licencier et/ou vendre copies du Logiciel et de permettre aux personnes auxquelles le Logiciel est fourni à cet effet, sous réserve des conditions suivantes : L'avis de droit d'auteur ci-dessus et cet avis d'autorisation doivent être inclus dans tous les des copies ou des parties substantielles du Logiciel.
