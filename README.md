# Hackathon - GFI Informatique - GESDIW2017

## Installation

L'application fonctionne avec ReactJS côté front-end, et avec NodeJS côté back-end.
Pour installer l'application il faut donc installer ces deux technologies.

Un fichier `docker-compose.yml` est disponible à la racine dans le but de faciliter leur installation.
Si vous souhaitez l'utiliser (auquel cas il n'est pas nécessaire de les installer manuellement), exécutez la commande suivante à la racine du projet :
```sh
$ docker-composer up -d
```

Le serveur web sera alors accessible depuis le port 3000.

Enfin pour installer toutes les dépendences :
```sh
$ npm install
$ webpack ([-d --watch] pour le développement)
```
