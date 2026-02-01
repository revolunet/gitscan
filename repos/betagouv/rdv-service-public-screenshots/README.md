# RDV Service Public Screenshots

Script permettant de réaliser des screenshots avant-après de la partie usagers de
l’appli [RDV Service Public](https://github.com/betagouv/rdv-service-public/)

## Usage

- Clonez ce dépôt par exemple vers `~/dev/rdv-service-public-screenshots`
- Déplacez vous dans le dépôt principal `~/dev/rdv-service-public`
- Créez un lien symbolique, par exemple `ln -s ~/dev/rdv-service-public-screenshots scripts/screenshots`
- Ajoutez `scripts/screenshots` dans vos git ignore locaux par exemple `vim .git/info/exclude`
- Depuis une branche clean, lancez le script `bundle exec rails runner scripts/screenshots/run.rb`
