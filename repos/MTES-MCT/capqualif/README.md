<!-- Backend quality scan : [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=capqualif_capqualif-poc-v1-back&metric=alert_status)](https://sonarcloud.io/dashboard?id=capqualif_capqualif-poc-v1-back)

Frontend quality scan : [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=capqualif_capqualif-poc-v1-front&metric=alert_status)](https://sonarcloud.io/dashboard?id=capqualif_capqualif-poc-v1-front) -->

# Capqualif

Voici la marche à suivre pour faire tourner l'application sur votre machine !

Pré-requis : pour faire tourner l'application sur votre ordinateur, vous devez installer node et npm (https://phoenixnap.com/kb/install-node-js-npm-on-windows), ainsi que Java et le JDK.

## Installer la base de données

- Télécharger PostegreSQL et l'installer sur son ordinateur. L'outil d'interface graphique pgAdmin s'installe en même temps - c'est lui qui sera utilisé par la suite.

- Télécharger le fichier SQL permettant de créer dans la base de données les tables nécessaires au bon fonctionnement de l'application (disponible ici : https://github.com/MTES-MCT/capqualif/blob/capqualif-mobile/database/capqualif.sql).

- Utiliser ce fichier dans pgAdmin en suivant ce tutoriel : https://youtu.be/S108Rh6XxPs (attention, faire la manip à partir de 3 minutes 11, car tout ce qui est décrit avant a déjà été fait et a abouti au fameux fichier SQL disponible sur GitHub).

- La base de données est peuplée avec les bonnes tables. Joie !

## Installer le backend de CapQualif

- Cloner le projet en tapant dans le terminal : `git clone https://github.com/MTES-MCT/capqualif.git`

- Si ce n'est pas déjà fait, installer IntelliJ sur son ordinateur (la version gratuite suffit). Il est possible de faire tourner l'application avec un autre IDE, mais la suite du processus suppose que c'est IntelliJ qui est utilisé.
- Avec IntelliJ, ouvrir le dossier capqualif>backend (et non capqualif, qui comprend le backend et le frontend, ce qui peut embrouiller IntelliJ qui ne sait plus s'il a affaire à un projet en JS ou en Java).

- Builder le projet en cliquant sur le petit marteau en haut à droite (cf. screenshot, un peu trompeur - c'est bien sur le marteau qu'il faut cliquer) :
 
![Le petit marteau en question.](https://user-images.githubusercontent.com/71322304/124722158-0fa3eb80-df0a-11eb-8911-85d48db89af2.png)
 
 > Si une erreur de type "JDK not found" survient, aller dans file > project structure > SDKs et installer le JDK qui a le mauvais chemin par défaut

- Switcher sur la branche que vous voulez voir : par défaut, vous êtes sur la branch dev.

> Parfois, l'arborescence des fichiers dans IntelliJ ne s'actualise pas automatiquement quand on change de branche. Si vous avez l'impression que rien n'a bougé, pliez et dépliez un dossier dans l'arborescence – ça devrait actualiser les choses !

- Créer des fichiers de variables d'environnement en suivant ce guide : https://drive.google.com/file/d/1XYX7682AQfxvuOXdG-YuV-okJN47jtOo/view?usp=sharing. Il y a aura deux environnements : local (= l'environnement de votre ordinateur) et intégration (= l'environnement du serveur d'intégration, qui ne nous intéressera pas dans ce procédurier).

> Attention, le guide est protégé par un mot de passe. Contacter les personnes responsables de CapQualif pour l'avoir.

- Ajouter le fichier .env.local (et .env.integration si vous souhaitez le faire tout de suite) créé en suivant le guide sus-cité dans src>main>fr.gouv.mte.capqualif>capqualif.

> Si besoin, changer le mot de passe et le port de la BDD dans .env.local.

- Installer le plugin EnvFile : https://plugins.jetbrains.com/plugin/7861-envfile.

- Redémarrer IntelliJ.

- Ouvrir Edit Configurations (cf. screenshot). Ne faites pas attention au fait qu'ici CapqualifApplication est affiché, ce qui n'est probablement pas encore le cas sur votre machine.

![Chez vous aussi, bientôt, ce doux nom éclairera l'écran !](https://user-images.githubusercontent.com/71322304/124722310-382be580-df0a-11eb-8518-06d23fae29bd.png)

- Autoriser EnvFile et ajouter le fichier de configuration .env.local :

![Ajouter le fichier env](https://user-images.githubusercontent.com/71322304/124016506-02f13600-d9e6-11eb-9d3b-eb9b90fd40e6.png)

- Lancer l'application

![run](https://user-images.githubusercontent.com/71322304/124722663-8c36ca00-df0a-11eb-810d-c302524eea97.png)

- Faire un test : dans votre navigateur web, tapez http://localhost:8080/instruction/evaluations/12. Une réponse doit s'afficher dans la console (sous l'onglet Run) d'IntelliJ.

## Installer le frontend de CapQualif
- Ouvrir le dossier frontend dans VSCode.

- Si cela n'a pas déjà été fait lors de l'installation du backend, créer des fichiers de variables d'environnement en suivant le guide de création. Il y a aura deux environnements : local (= l'environnement de votre ordinateur) et intégration (= l'environnement du serveur d'intégration, qui ne nous intéressera pas dans ce procédurier).

> Attention, le guide est accessible en interne et est protégé par un mot de passe. Contacter les personnes responsables de CapQualif pour y accéder.

- Ajouter le fichier .env.local (et .env.integration si vous souhaitez le faire tout de suite) créé en suivant le guide sus-cité à la racine du dossier frontend (cf. screenshot).

![add env files](https://user-images.githubusercontent.com/71322304/124016892-63807300-d9e6-11eb-9d92-e5f510e79b9d.png)

- Ouvrir le Terminal et taper `npm install`.

- Aller se chercher une tisane (c'est un peu long) ☕

- Quand l'installation est terminée, taper `npm start`.

- Pour tester, dans le navigateur web, se rendre sur localhost:3000. Pour voir la version en mobile, ouvrir l'inspecteur du navigateur (dans Chrome, on peut le faire en appuyant sur F12) puis Toggle device toolbar.
