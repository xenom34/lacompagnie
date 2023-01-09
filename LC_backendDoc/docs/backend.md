# Section Backend
Cette section est destiné aux développeurs front souhaitant interragir avec l'API du serveur.

## Architecture
Le serveur héberge une application côté serveur, éxécuté par nodejs, et utilisant la bibliothèque express pour gérer les demandes et réponses HTTP. Elle utilise également MongoClient de la bibliothèque mongodb pour se connecter à une base de données MongoDB situé sur ce même serveur, et effectuer diverses opérations dessus (pour la persistance des données sur le site).

## Informations de connection

- L'hôte à utiliser pour accéder aux ressources de l'API est `api.altair-studios.fr:4318`
- Le endpoint relatif à l'API de la compagnie est '/compagnie/' soit `https://api.altair-studios.fr:4318/compagnie/`