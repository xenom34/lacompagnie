# Systême de recherche de vol

Cette section traite en détail les appel à API nécessaire, en partant d'une recherche de vols disponibles, jusqu'à la validation complète d'un dossier (dans l'ordre 😊)

## Recherche de vols disponibles

La première étape pour un potentiel client sur le site de la compagnie, c'est de pouvoir faire ses propres recherches de vols, analyser les prix, les disponibilités, les destinations etc... Dans cette partie nous allons traiter de l'appel API nécessaire pour faire cette recherche, en utilisant l'endpoint `https://api.altair-studios.fr:4318/compagnie/reqFlights`

Voici un exemple de requêtes HTTP à l'API :

``` http
GET /compagnie/reqFlights?departureDate=2023-07-31&departureAirport=3682&arrivalAirport=3830&nbPassengers=4&cabin=f HTTP/1.1
Host: api.altair-studios.fr:4318
Content-Type: application/json
```

!!! info

    - Requête de type ***GET***
    - Format de date yyyy-MM-dd

Dans le corps de la requête, il est donc nécessaire de rentrer un objet JSON comme dans l'exemple ci-dessus.

Les paramètres qui seront obligatoirement à renseigner dans cette requête sont :

- ***'departureDate'***, la date de départ voulue
- ***'departureAirport'***, l'aéroport de départ pour ce vol (on attends ici une clef étrangère référençant un objet de la collection 'airport'(le champ 'objectID'), représentant l'aéroport de départ)
- ***'airport_arrival'***, l'aéroport d'arrivé pour ce vol (on attends ici une clef étrangère référençant un objet de la collection 'airport'(le champ 'objectID'), représentant l'aéroport d'arrivé)
- ***'nbPassengers'***, le nombre de passagers pour cette réservation
- ***'cabin'***, la classe de voyage sélectionnée par le client.

!!! warning

    Les classes doivent être renseigné par une seule lettre.
    - 'e' pour la classe économique
    - 'p' pour la classe premium économique
    - 'b' pour la classe business
    - 'f' pour la première classe

!!! warning

    Cette requête est donc valable pour un seul aller. Elle devra être refaîte si le voyage concerne aussi un retour (ou plus)

Exemple d'implémentation :

=== "Curl"

    ``` sh
    curl --location --request GET 'https://api.altair-studios.fr:4318/compagnie/reqFlights?departureDate=2023-07-31&departureAirport=3682&arrivalAirport=3830&nbPassengers=4&cabin=f' \
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

    fetch("https://api.altair-studios.fr:4318/compagnie/reqFlights?departureDate=2023-07-31&departureAirport=3682&arrivalAirport=3830&nbPassengers=4&cabin=f", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    ```

=== "JS (Axios)"

    ``` js
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'https://api.altair-studios.fr:4318/compagnie/reqFlights?departureDate=2023-07-31&departureAirport=3682&arrivalAirport=3830&nbPassengers=4&cabin=f',
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

Exemple de réponse en cas de succès pour une recherche :

```json
{
    "request": [
        {
            "_id": "63989842f0298246cc397fed",
            "airport_departure": 3682,
            "airport_arrival": 3830,
            "date_departure": "2023-07-31T00:00:00.000Z",
            "date_arrival": "2023-08-01T00:00:00.000Z",
            "time_departure": 480,
            "time_arrival": 670,
            "duration": 190,
            "aircraft": 9586237,
            "price_first": 1500
        },
        {
            "_id": "6398a55db40bf28c593d5bb7",
            "airport_departure": 3682,
            "airport_arrival": 3830,
            "date_departure": "2023-07-31T00:00:00.000Z",
            "date_arrival": "2023-08-01T00:00:00.000Z",
            "time_departure": 480,
            "time_arrival": 670,
            "duration": 190,
            "aircraft": 9586237,
            "price_first": 850
        },
        {
            "_id": "6398a817b40bf28c593d5bff",
            "airport_departure": 3682,
            "airport_arrival": 3830,
            "date_departure": "2023-07-31T00:00:00.000Z",
            "date_arrival": "2023-08-01T00:00:00.000Z",
            "time_departure": 480,
            "time_arrival": 670,
            "duration": 190,
            "aircraft": 9586237,
            "price_first": 1000
        }
    ],
    "askToken": "63badf650d24deaf068012c6"
}
```

Exemple de réponse en cas d'échec :

```
    Please give a departure date
```

!!! warning

    Remarquez l'éxistance de `askToken` dans la requête. En effet, lors de chaque nouvelle recherche, l'API vous fournit un jeton de recherche. Ce jeton est représentatif de la création d'un nouveau dossier client en cache, au sein du systême. Il est important de sauvegarder ce jeton, et de le redonner en argument lors de nouveaux appels concernant la même recherche (pour la recherche du vol retour par exemple.)

    Si vous ne redonnez pas le jeton, un nouveau dossier sera créé systématiquement. Ce jeton est central, et permettra la validation du dossier client, ainsi que le booking temporaire des vols. 

    Le jeton doit être renseigné avec le paramètre de même nom : `askToken`

## Sélection d'un vol par le client

Lorsque le client a analysé le résultat de la recherche, et que celui-ci souhaite sélectionner un vol particulier, il est nécessaire de faire un appel API pour faire savoir au serveur que ce siège a potentiellement déjà été réservé (en utilisant l'endpoint `https://api.altair-studios.fr:4318/compagnie/trip/:askToken/submitBooking`). Ce vol va donc apparaître en tant que résevration de manière temporaire, pour être comptabilisé lors des prochaines recherches, afin d'éviter de réserver un vol qui ne sera plus déjà disponible, à cause d'une recherche en simultanée d'un autre client. (Dans l'idée, on bloque le vol pour quelques minutes)

Voici un exemple de requêtes HTTP à l'API :

``` http
POST /compagnie/trip/63ab0bc23af4b28c3ec38e5c/submitBooking HTTP/1.1
Host: api.altair-studios.fr:4318
Content-Type: application/json
Content-Length: 87

{
    "flight": "63989842f0298246cc397fed",
    "passengers": 2,
    "class": "f"
}
```

!!! info

    - Requête de type ***POST***

Dans le corps de la requête, il est donc nécessaire de rentrer un objet JSON comme dans l'exemple ci-dessus.

Les paramètres qui seront obligatoirement à renseigner dans cette requête sont :

- ***'flight'***, l'identifiant du vol (celui-ci est donné dans le résultat de la recherche précédente)
- ***'passengers'***, donne au serveur le nombre de siège à bloquer
- ***'class'***, rappel la classe de voyage voulu par le client

!!! warning

    Le jeton de recherche doit être renseigné dans le path de l'URL même (juste après `trip`)

!!! warning

    Les classes doivent (toujours) être renseigné par une seule lettre.
    - 'e' pour la classe économique
    - 'p' pour la classe premium économique
    - 'b' pour la classe business
    - 'f' pour la première classe

Exemple d'implémentation :

=== "Curl"

    ``` sh
    curl --location --request POST 'https://api.altair-studios.fr:4318/compagnie/trip/63ab0bc23af4b28c3ec38e5c/submitBooking' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "flight": "63989842f0298246cc397fed",
        "passengers": 2,
        "class": "f"
    }'
    ```

=== "JS (Fetch)"

    ``` js
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "flight": "63989842f0298246cc397fed",
    "passengers": 2,
    "class": "f"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://api.altair-studios.fr:4318/compagnie/trip/63ab0bc23af4b28c3ec38e5c/submitBooking", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    ```

=== "JS (Axios)"

    ``` js
    var axios = require('axios');
    var data = JSON.stringify({
    "flight": "63989842f0298246cc397fed",
    "passengers": 2,
    "class": "f"
    });

    var config = {
    method: 'post',
    url: 'https://api.altair-studios.fr:4318/compagnie/trip/63ab0bc23af4b28c3ec38e5c/submitBooking',
    headers: { 
        'Content-Type': 'application/json'
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
    ```

Exemple de réponse en cas de succès pour une recherche :

```json
    {
        "status": "OK"
    }
```

Exemple de réponse en cas d'échec :

```json
    {
        "status": "ERROR"
    }
```

## Validation d'un dossier

Une fois que le client valide sa recherche dans sa totalité, le dossier sera validé, et en attente de paiement. Pour cela, il faut en faire la demande au serveur, en utilisant l'endpoint `https://api.altair-studios.fr:4318/compagnie/trip/:askToken/validate`

Voici un exemple de requêtes HTTP à l'API :

``` http
GET /compagnie/trip/63ab0bc23af4b28c3ec38e5c/validate HTTP/1.1
Host: api.altair-studios.fr:4318
```

!!! info

    - Requête de type ***GET***

!!! warning

    Le jeton de recherche doit être renseigné dans le path de l'URL même (juste après `trip`)

Exemple d'implémentation :

=== "Curl"

    ``` sh
    curl --location --request GET 'https://api.altair-studios.fr:4318/compagnie/trip/63ab0bc23af4b28c3ec38e5c/validate'
    ```

=== "JS (Fetch)"

    ``` js
    var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch("https://api.altair-studios.fr:4318/compagnie/trip/63ab0bc23af4b28c3ec38e5c/validate", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    ```

=== "JS (Axios)"

    ``` js
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'https://api.altair-studios.fr:4318/compagnie/trip/63ab0bc23af4b28c3ec38e5c/validate',
    headers: { }
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
    ```

Exemple de réponse en cas de succès pour une recherche :

```json
[
    {
        "_id": "63ab0bc23af4b28c3ec38e5c",
        "status": "validated",
        "bookings": [   
            [
                "63b97dd51bacd792db6e870a",
                "63b97dd51bacd792db6e8709"
            ],
            [
                "63b97dd51bacd792db6e870a",
                "63b97dd51bacd792db6e870b"
            ],
            [
                "63bae25d0d24deaf068012c8",
                "63bae25d0d24deaf068012c7"
            ],
            [
                "63bae25d0d24deaf068012c8",
                "63bae25d0d24deaf068012c9"
            ]
        ]
    }
]
```

Ici, on peut constater que le statut de la réservation passe en 'validé'. Afin d'afficher un récapitulatif des vols sélectionnés, l'API donne en retour la liste des vols/passagers correspondant au dossier (dans chaque tableau, première case étant l'ID du vol, la deuxième case étant l'ID du passager.) L'ID du passager sera stocké côté front, afin de mettre à jour les informations passagers.

Exemple de réponse en cas d'échec :

```json
    {
        "status": "ERROR"
    }
```