# PLUGIN QGIS Asgard Manager
> Plugin pour QGIS, AsgardManager est destiné aux administrateurs de données, propose une interface graphique beaucoup plus conviviale que pgAdmin pour les fonctionnalités les plus courantes d’ASGARD. Il permet de gérer au quotidien les schémas, les droits et les rôles.

---           
## version
- [1.3.0]

---           

## Technologies
- [Python 3.x]

---           

## Environnement
 - Version de QGIS 3.20.2 -Odense (fonctionne en 3.x)
 - Qt 5.15.2 
 - OS Version Windows 10 (10.0)

---

## Installation
### Automatiquement
L’application se trouve sur la ressource du département MSP/DS/GSG (http://piece-jointe-carto.developpement-durable.gouv.fr/NAT002/QGIS/plugins/plugins.xml)
et est donc accessible via le menu Extension : Installer / Gérer les extensions.
Asgard Manager pourra être installé, mis à jour via ce dispositif.

### Manuellement
Procédez via le menu Extension : Installer / Gérer les extensions / item 'Installer depuis un zip'

![Boite de dialogue 'Installer depuis un zip'](flyers/installe_zip.png)
---

## Documentation
La documentation sous scenari au format dokiel [est disponible ici](https://snum.scenari-community.org/Asgard/Documentation/#SEC_AsgardManager).

### Flyers

![](flyers/am1.png)

![](flyers/am2.png)

---

## Structure des fichiers
```bash
.                        # `Racine où se trouve les sources .py`
│
├── i18n                 # `fichiers des langues
└── icons                # `icones de l'application, menu, barre d'outils, IHM`
    └── actions          # `icones des actions`
    └── gif              # `gif pour les boutons actions des rôles`
    └── logo             # `icones dans le menu extension et barre d'outils`
    └── objets           # `icones des objets type postgresql`
    └── treeview         # `icones dans les treeview`
└── qml                  # `dossier de sauvegarde et de chargement des graphiques QML`
```
---

## Crédits

### Production

- [Ministère de la Transition Écologique (MTE)
Ministère de la Cohésion des Territoires et des Relations avec les Collectivités Territoriales(MCTRCT) et de la Mer]

  Secrétariat Général  
  Service du Numérique  
  Sous-direction "Usages du Numérique et Innovations"  
  Département "Relation clients"

### Équipe

- Didier LECLERC, concepteur, développeur MTE/MCTRCT SG/SNUM/UNI/DRC
- leslie LEMAIRE, analyse fonctionnelle MTE/MCTRCT SG/SNUM/UNI/DRC

---

## Licence

AsgardManager (© République Française, 2020-2021) est publié sur le Dépôt interministériel des plugins QGIS sous licence GNU Affero General Public Licence v3.0 ou plus récent.
[AGPL 3 ou plus récent](https://spdx.org/licenses/AGPL-3.0-or-later.html)
