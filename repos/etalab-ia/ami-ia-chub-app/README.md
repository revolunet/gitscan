# DXCARE Webapp


Liens Utiles pour webapp existante
----------------------------------

- code : https://gitub.u-bordeaux.fr/scossi910e/ami-ia-chub/-/tree/master
- documentation architecture : https://gitub.u-bordeaux.fr/scossi910e/ami-ia-chub/-/wikis/home
- Q&R : 
    - API termDetector : c'est un module qui fait quoi exactement ? c'est pour une extension future ?
    
        Dans ElasticSearch, on ne stocke que les phrases de chaque document pour afficher un snippet du document qui contient un terme recherché.
        Quand Mathieu clique sur un document sur la timeline ou un snippet, on affiche le document et les termes recherchés apparaissent en surbrillance. C'est cette API qui est chargée de réaliser la détection des termes recherchés dans un document. A ce que j'ai compris de notre réunion à Bordeaux, vous voulez utiliser les fonctions d'ElasticSearch pour réaliser cette tâche, cette API devient donc inutile. 
    
    - API smarehr_indexation: il me semble qu'on s'était dit qu'on essaierait de réutiliser ce module tel quel. Est-ce que vous auriez de la documentation sur les formats attendus en appel de l'API ?
        
        Actuellement l'API d'indexation reçoit un objet Java (https://gitub.u-bordeaux.fr/scossi910e/ami-ia-chub/-/blob/master/smartehr_indexer/nlpSmartCRFobjects/src/main/java/fr/erias/nlpSmartCRFobjects/Doc2Index.java) ; réalise certaines transformations et puis utilise l'API bulk d'ElasticSearch pour alimenter ce schéma: https://gitub.u-bordeaux.fr/scossi910e/ami-ia-chub/-/blob/master/smartehr_app/elasticsearch/mappingIndexTerms.json
        Si vous voulez réutiliser cette brique, il faudra la modifier pour qu'elle consomme du FHIR ou avoir une brique intermédiaire qui fait la conversion. Dans tous les cas si vous utilisez du Python elle ne pourra pas recevoir un objet Java en entrée.
    
    - Appel à la base neo4j : c'est bien à nous de l'insérer dans cette architecture ?
    
        L'architecture actuelle va être fortement modifiée: l'API données va être remplacée par celle d'Omar, ceci va impacter l'application NodeJs et l'API d'indexation, l'API termDetector sera remplacée par  ElasticSearch qui devra stocker les documents ; la base neo4j s'intégrera dans la nouvelle architecture que vous allez développer, nous n'avons pas besoin qu'elle s'intègre à celle existante actuellement. 



Contenu du projet
-----------------

- **oracle-db** : script pour insérer des données postgres (équivalent base CHU i2b2) 