# J'agis - Simulateur voiture

Un client autonome basé sur le modèle [Publicodes](https://publi.codes)
[`@betagouv/publicodes-voiture`](https://github.com/betagouv/publicodes-voiture)
permettant de calculer les coûts et l'empreinte carbone d'une voiture
(possession et utilisation) et de les comparer à d'autres alternatives.

Ce simulateur a été développé dans le cadre du projet
[J'agis](https://jagis.beta.gouv.fr/).

## Développement local

```bash
# Installer les dépendances
yarn install

# Lancer le serveur de développement
yarn start
```

Si vous souhaitez modifier le modèle de calcul (par exemple pour ajouter de
nouvelles options), vous pouvez le faire dans le package
[`@betagouv/publicodes-voiture`](https://github.com/betagouv/publicodes-voiture)
et l'utiliser en local avec les commandes suivantes :

```bash
# Dans le dépôt publicodes-voiture
yarn link

# Dans le dépôt simulateur-voiture
yarn link @betagouv/publicodes-voiture
```

> [!TIP]
> Il est fortement recommandé de lire la [documentation de Elm
> Land](https://elm.land/concepts/) avant de commencer à développer et si vous
> n'êtes pas familier avec Elm, de suivre son
> [guide](https://guide.elm-lang.org/).

L'ordre des questions à afficher et leurs découpage en sections est défini dans
le fichier [`src/ffi/ui.ts`](src/ffi/ui.ts) afin de pouvoir être _type checked_
avec les types générés par le modèle de calcul.

L'interopérabilité de l'app Elm avec le moteur Publicodes est faite dans le
fichier [`src/interop.ts`](src/interop.ts).

## Stack technique

Le modèle de calcul encapsulant la logique métier est défini dans le package
[`@betagouv/publicodes-voiture`](https://github.com/betagouv/publicodes-voiture).
Le modèle est rédigé dans le DSL [Publicodes](https://publi.codes), ce qui
permet une transparence du calcul grâce à une [documentation
interactive](https://agir-voiture.netlify.app/documentation) et une
réutilisation de modèle existant comme celui de l'ADEME [Nos Gestes
Climat](https://nosgestesclimat.fr/).

> [!NOTE]
> Ce même modèle est utilisé pour l'intégration dans J'agis.

Le simulateur est une application [Elm](https://elm-lang.org/) qui utilise le
framework [Elm Land](https://elm.land/) et [Tailwind
CSS](https://tailwindcss.com/). Pour plus d'informations sur ce choix, voir
cette [issue](https://github.com/betagouv/agir-voiture/issues/6).
