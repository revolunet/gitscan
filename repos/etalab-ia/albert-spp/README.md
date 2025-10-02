# Albert - Services Publics Plus
 
1. Envoi du prompt au modèle

    ```sh
    curl -XPOST  https://spp.etalab.gouv.fr/anonymize  -H "Content-Type: application/json" \
        -H "Authorization: Bearer $API_KEY" \
        -d '{"id":"123", "text":"Merci pour service."}'
    ```

2. Récupération de la réponse du modèle

    ```sh
    curl -XPOST  https://spp.etalab.gouv.fr/prod/run/ditp-get-data  -H "Content-Type: application/json" \
        -H "Authorization: Bearer $API_KEY" \
        -d '{"id":"123"}'
    ```
