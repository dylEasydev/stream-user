# Service de gestion d'utilisateur de Stream Cam

## Description du projet

Il sagit d'un serveur destinée aux opérations CRUD sur un utilisateur . Dans l'optique d'appliquer notre architecture **micro-service** , ce service utilise comme jeton de securité de ses **end-point** , le token fournis par le service d'authentification disponnible [stream-auth]() .


## Prérequis
Avant de se lancer à coeur joie vers le demarage de se projet rassurez vous d'avoir:

**Node js** et **npm** installer sur votre ordinateur lien du site [ici](node.org).

**PostgreSQL** installer sur votre ordinateur [ici](postgres.org)

**git** installer sur votre ordinateur [ici](git.org)

**openssl** installer sur votre ordinateur [ici](openssl.org)


## Installation 

pour commencer effectuer un pull du depôt
>[!NOTE]
>Commande au niveau du terminale
>```
>  $ mkdir stream_camer
>   $ cd ./stream_camer
>   $ git init
>   $ git remote add origin git@github.com:dylEasydev/Streamserver.git
>   $ git branch -M main
>   $ git pull -u origin main
>```
vous pouvez effectuer un **clone** ou un **fork** à votre choix .

Installer les dependances  `npm install`

## configuration

Créer un fichier `.env`à la racine du projet puis copiez le code si dessous à l'interieur .

```js

PORT = 3003//
DB_NAME = 
DB_HOST = localhost
DB_DRIVER = 
DB_PASSWORD = 
DB_USER = 
NODE_ENV = developemnent
HOSTNAME = 127.0.0.1
COMPANING_MAIl = 
PASSWORD_MAIL=
PRIVATE_KEY = 
ADMIN_NAME =
ADMIN_PASS = 

```

Généré les clés pour sécurisé le serveur HTTP/2 . Vous auriez besion d'[openssl]() .

```
openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr
openssl x509 -req -days 365  -in server.csr -signkey server.key -out server.crt
```
## demarage du serveur
ouvrez le terminal et lancez la commande `npm run dev` .

pour les adepte de javascripts vous pouvez compiler grâce à la commande `npm build`.
Puis lancer le serveur avec la commande `node -r dotenv/config ./dist/index.js`

## Documentation
la documentation est à l'adresse ``https://127.0.0.1:${process.env.PORT}/docs`` .
son fichier markdow [ici](./doc.md) à enrichir si vous voulez bien . 


## colaborateur

