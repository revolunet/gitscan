# Localiser Parcelle Adresse (BAN)
**Une extension pour QGIS**  
Cette extension interroge des services réseau (par http)  

pour localiser :  

**Une commune, une section ou une parcelle cadastrale**  
Cette fonction communique avec le service web de géolocalisation du Ministère de la Transition Ecologique et Solidaire. Il fournit plusieurs échelles administratives : Région, Département, Commune, Section, Parcelle.  

**Une adresse postale**  
En interrogeant le service web de géolocalisation à l'adresse Etalab.gouv.fr-BAN.  


Ces deux outils permettent de zoomer la carte sur le lieu localisé.  
Ils fonctionnent depuis des postes de travail ayant un accès internet, en utilisant la configuration réseau de qgis pour le protocole HTTP et le système de projection courant du projet pour toute transformation des coordonnées.  
