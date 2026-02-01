# PLUGIN QGIS Installation de bibliothèques avec PIP à partir d'un plugin Qgis
> Plugin pour QGIS, Installation de bibliothèques avec PIP à partir d'un plugin Qgis. Ce plugin est destiné aux développeurs qui souhaitent intégrer dans leur application, le processus d'installation d'une bibliothèque nécessaire à leur programme.

---           
## version
- [0.2.0]

## Technologies
- [Python 3.x]

---           

## Environnement
 - Version de QGIS 3.18.1-Zürich (fonctionne en 3.x)
 - Qt 5.11.2 
 - OS Version Windows 10 (10.0)

---

## Installation
### Automatiquement
L’application se trouve sur la ressource du département MSP/DS/GSG (http://piece-jointe-carto.developpement-durable.gouv.fr/NAT002/QGIS/plugins/plugins.xml)
et est donc accessible via le menu Extension : Installer / Gérer les extensions.
"Installation de bibliothèques avec PIP" pourra être installé, mis à jour via ce dispositif.

### Manuellement
Procédez via le menu Extension : Installer / Gérer les extensions / item 'Installer depuis un zip'

![Boite de dialogue 'Installer depuis un zip'](flyers/installe_zip.png)
---

## Documentation
En cours

### Flyers

![](flyers/pocbibli1.png)

![](flyers/pocbibli2.png)

---

## Structure des fichiers
```
.                        # `Racine où se trouve les sources .py`
│
├── i18n                 # `fichiers des langues
└── icons                # `icones de l'application, menu, barre d'outils, IHM`
    └── logo             # `icones dans le menu extension et barre d'outils`
└── sites-packages       # `Librairies pour Pypac`
    └── dukpy            
    └── pypac            
    └── tld            
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

- Didier LECLERC, analyse fonctionnelle, concepteur, développeur MTE/MCTRCT SG/SNUM/UNI/DRC

---

## Licence

Installation de bibliothèques (© République Française, 2020-2021) est publié sur le Dépôt interministériel des plugins QGIS sous licence GNU Affero General Public Licence v3.0 ou plus récent.
[AGPL 3 ou plus récent](https://spdx.org/licenses/AGPL-3.0-or-later.html)
