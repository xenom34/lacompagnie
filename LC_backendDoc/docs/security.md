# Sécurité
Voici dans cette section tout ce qui est à savoir concernant la sécurité de l'application.

## MongoDB
La base de données **nécessite** une connexion SSL/TLS avec certificat. La configuration interne directe à la base de données ne concerne que les personnes habilitées par l'administrateur du serveur.

Aussi, en plus du certificat de connection, chaque utilisateur dispose de son propre accès avec identifiant et mot de passe.

## API
L'application peut échanger des données particulièrement sensibles, tel que des coordonnées bancaires ou des informations personnelles. Se connecter à l'API nécessite une connection HTTPS.