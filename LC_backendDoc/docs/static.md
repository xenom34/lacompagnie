# Informations statiques

Afin de permettre l'affichage de certaines données, le front peut faire appel à l'API pour générer ses listes dynamiquement.

## Cabines

Ce point d'accès permet d'acquérir la liste des cabines disponibles pour le client, lorsque celui-ci réalise une réservation. 

Voici un exemple de requêtes HTTP à l'API :

```http
GET /compagnie/reqCabines HTTP/1.1
Host: api.altair-studios.fr:4318
Content-Type: application/json
```

!!! info

    - Requête de type ***GET***

Faire appel à cette ressource ne nécessite pas de renseigner d'autres paramètres supplémentaires.

Exemple d'implémentation :

=== "Curl"

    ``` sh
    curl --location --request GET 'https://api.altair-studios.fr:4318/compagnie/reqCabines' \
    --header 'Content-Type: application/json'
    ```

=== "JS (Fetch)"

    ``` js
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://api.altair-studios.fr:4318/compagnie/reqCabines", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    ```

=== "JS (Axios)"

    ``` js
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'https://api.altair-studios.fr:4318/compagnie/reqCabines',
    headers: { 
        'Content-Type': 'application/json'
    }
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
    ```

Exemple de réponse en cas de succès d'inscription :

```json
[
    {
        "cabine": "Economy"
    },
    {
        "cabine": "Premium Economy"
    },
    {
        "cabine": "Business"
    },
    {
        "cabine": "Première"
    }
]
```

## Aéroports

Ce point d'accès permet d'acquérir la liste des aéroports disponibles pour le client, lorsque celui-ci réalise une réservation. 

Voici un exemple de requêtes HTTP à l'API :

```http
GET /compagnie/reqAirports HTTP/1.1
Host: api.altair-studios.fr:4318
Content-Type: application/json
```

!!! info

    - Requête de type ***GET***

Faire appel à cette ressource ne nécessite pas de renseigner d'autres paramètres supplémentaires.

Exemple d'implémentation :

=== "Curl"

    ``` sh
    curl --location --request GET 'https://api.altair-studios.fr:4318/compagnie/reqAirports' \
    --header 'Content-Type: application/json'
    ```

=== "JS (Fetch)"

    ``` js
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://api.altair-studios.fr:4318/compagnie/reqAirports", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    ```

=== "JS (Axios)"

    ``` javascript
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'https://api.altair-studios.fr:4318/compagnie/reqAirports',
    headers: { 
        'Content-Type': 'application/json'
    }
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
    ```

Exemple de réponse en cas de succès d'inscription :

```json
[
    {
        "name": "Hartsfield Jackson Atlanta Intl",
        "country": "United States",
        "iata_code": "ATL"
    },
    {
        "name": "Chicago Ohare Intl",
        "country": "United States",
        "iata_code": "ORD"
    }
]
```