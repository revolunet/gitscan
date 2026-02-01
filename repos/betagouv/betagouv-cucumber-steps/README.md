# Betagouv::Cucumber::Steps

Cette gem contient des [steps
Cucumber](https://cucumber.io/docs/gherkin/reference#steps)
génériques, surcouche française des matchers Capybara qui vous permet
de contruire votre propre librairie d'actions pour vos tests Cucumber.

Cette gem est fraîchement extraite de plusieurs projets Beta
([APLyPro](https://github.com/betagouv/aplypro/blob/main/features/step_definitions/web_steps.rb),
[Datapass](https://github.com/etalab/data_pass/blob/develop/features/step_definitions/web_steps.rb),
[Auto-audit](https://github.com/betagouv/auto-audit/blob/main/features/step_definitions/web_steps.rb))
et s'attend à une utilisation du DSFR.

## Aperçu

La librairie propose une [batterie
d'actions](./lib/betagouv/cucumber/steps.rb), qui vous permet de
composer vos tests.

### Exemple bête mais pas méchant

```ruby
Alors("la page contient {string}") do |content|
  expect(page).to have_content(content)
end
```

et

```ruby
Quand("je me rends sur la page d'accueil") do
  visit "/"
end
```

vous permet ensuite d'écrire :

```feature
Scénario: la page d'accueil contient le nom du produit
  Quand je me rends sur la page d'accueil
  Alors la page contient "foobar"
```

### Exemple avancé : composition d'une étape à vous (métier)

```ruby
Quand("je rajoute un utilisateur {string}") do |nom|
  steps %(
    Quand je me rends sur la page d'accueil
    Et que je clique sur "Rajoutez un utilisateur" dans le menu principal
    Et que je remplis "Nom" avec "#{nom}"
    Et que je clique sur "Enregistrer"
  )
end
```

```feature
Fonctionnalité: Gestion des utilisateurs
  Scénario: Je peux rajouter un utilisateur
    Quand je rajoute un utilisateur "Marie Curie" # et paf
    Alors la page contient "Marie Curie a bien été rajouté(e)"
```

## Installation

```ruby
gem "betagouv-cucumber-steps"
```

Dans un fichier `features/support/base-steps.rb` (ou autre fichier
chargé par Cucumber) :

```ruby
require 'betagouv/cucumber/steps'
```

## Liste des steps

FIXME: trouver une meilleur doc que [le fichier des
steps](./lib/betagouv/cucumber/steps.rb).

## Debug / Contribution

Si un step ne fonctionne pas vous pouvez :

* utilisez le step `Alors debugger` pour debugger votre page en live
* overridez le step en question dans votre code `Alors("custom je clique sur {string}")`
* trafiquer la gem directement avec bundle open ou [dans Docker](https://freesteph.info/posts/local-gem-development-with-docker.html).

N'oubliez pas de ramener vos contributions ici !
