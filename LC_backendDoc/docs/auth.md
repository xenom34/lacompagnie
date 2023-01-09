# Systême d'authentification

Cette section décrit le workflow permettant d'authentifier un utilisateur sur la plateforme.

## Inscritpion

Naturellement, pour qu'un utilisateur puisse accéder à une ressource personnelle restreinte, nécessitant donc une authentification, il faut pouvoir lui permettre de s'inscrire. L'équipe front s'assurera d'implémenter une interface lui facilitant sa démarche.

Voici un exemple de requêtes HTTP à l'API :

```http
POST /compagnie/auth/register HTTP/1.1
Host: api.altair-studios.fr:4318
Content-Type: application/json
Content-Length: 155

{
    "lName": "Zhang",
    "fName": "Wei",
    "email": "zhang.wei@gmail.com",
    "password" : "p4ssw0rd",
    "birtDate" : "1989-11-02"
}
```

!!! info

    - Requête de type ***POST***
    - Format de date yyyy-MM-dd

Dans le corps de la requête, il est donc nécessaire de rentrer un objet JSON comme dans l'exemple ci-dessus.

Exemple d'implémentation :

=== "Curl"

    ``` sh
    curl --location --request POST 'https://api.altair-studios.fr:4318/compagnie/auth/register' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "lName": "Zhang",
        "fName": "Wei",
        "email": "zhang.wei@gmail.com",
        "password" : "p4ssw0rd",
        "birtDate" : "1989-11-02"
    }'
    ```

=== "JS (Fetch)"

    ``` js
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "lName": "Zhang",
    "fName": "Wei",
    "email": "zhang.wei@gmail.com",
    "password" : "p4ssw0rd",
    "birtDate" : "1989-11-02"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://api.altair-studios.fr:4318/compagnie/auth/register", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    ```

=== "JS (Axios)"

    ``` js
    var axios = require('axios');
    var data = JSON.stringify({
        "lName": "Zhang",
        "fName": "Wei",
        "email": "zhang.wei@gmail.com",
        "password" : "p4ssw0rd",
        "birtDate" : "1989-11-02"
    });

    var config = {
    method: 'post',
    url: 'https://api.altair-studios.fr:4318/compagnie/auth/register',
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

Exemple de réponse en cas de succès d'inscription :

```json
{
    "acknowledged": true,
    "insertedId": "63b9b6ec9bb4f926de7e2a86"
}
```

Exemple de réponse en cas d'échec :

```json
{
    "status": "ERROR",
    "error": [
        {
            "field": "email",
            "errorType": "This email address already exists",
            "input": "zhang.wei@gmail.com"
        }
    ]
}
```

## Connection

Ensuite, l'utilisateur peut donc se connecter à l'aide de ses informations d'authentification.

Voici un exemple de requêtes HTTP à l'API :

```http
POST /compagnie/auth/login HTTP/1.1
Host: api.altair-studios.fr:4318
Content-Type: application/json
Content-Length: 77

{
    "email": "zhang.wei@gmail.com",
    "password" : "borgar"
}
```

!!! info

    - Requête de type ***POST***

Dans le corps de la requête, il est donc nécessaire de rentrer un objet JSON comme dans l'exemple ci-dessus.

Exemple d'implémentation :

=== "Curl"

    ``` sh
    curl --location --request POST 'https://api.altair-studios.fr:4318/compagnie/auth/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "zhang.wei@gmail.com",
        "password" : "p4ssw0rd"
    }'
    ```

=== "JS (Fetch)"

    ``` js
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "email": "zhang.wei@gmail.com",
    "password": "p4ssw0rd"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://api.altair-studios.fr:4318/compagnie/auth/login", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    ```

=== "JS (Axios)"

    ``` js
    var axios = require('axios');
    var data = JSON.stringify({
    "email": "zhang.wei@gmail.com",
    "password": "p4ssw0rd"
    });

    var config = {
    method: 'post',
    url: 'https://api.altair-studios.fr:4318/compagnie/auth/login',
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

Exemple de réponse en cas de succès d'inscription :

```json
{
    "email": "zhang.wei@gmail.com",
    "status": "OK"
}
```

Exemple de réponse en cas d'échec :

```json
{
    "status": "ERROR",
    "error": [
        {
            "field": "email or password",
            "errorType": "The email or the password doesn't match",
            "input": "zhang.wei@gmail.com"
        }
    ]
}
```