# Streamer Extension

Merci à Pentiminax pour son travail, mais sa vidéo étant incomplète ou complexe...

# Comment ça marche ?

Vous allez d'abord avoir ces prérequis :
+ Un compte Twitch avec la double authentification activée (obligatoire)
+ 15 minutes ou 30 minutes (selon votre niveau en bidouillage)
+ [Postman](https://www.postman.com/downloads/) (obligatoire si vous ne connaissez pas votre token.)

Ceci peut vous aider
+ [Get Users (Twitch API Reference)](https://dev.twitch.tv/docs/api/reference#get-users)
+ [Get Streams (Twitch API Reference)](https://dev.twitch.tv/docs/api/reference#get-streams)

# ATTENTION !
Cette extention demandera un token tout les 60 jours (environ), il faudra le regénérer et le mettre à jour.
Si quelqu'un sait comment y remédier, je l'invite à m'aider et aider de futurs utilisateurs.

# Developpers Twitch Console

Créez une application : https://dev.twitch.tv/console/apps
URL : https://localhost

Gardez le Client ID et générez un Secret.

# Postman
+ Pas besoin de créer de compte, à vous de voir si vous souhaitez en créer un ou non.
+ Créer un workspace/collection (nommez le comme vous le voulez).

# Récupérer TOKEN
+ Créez une requête HTTP POST https://id.twitch.tv/oauth2/token?client_id= VOTRE CLIENT ID &client_secret= VOTRE CLIENT SECRET &grant_type=client_credentials.
+ Copiez ce token dans popup.js

# Récupérer user_id
+ Créez une requête HTTP GET https://api.twitch.tv/helix/users?login= VOTRE PSEUDO TWITCH (sensible à la casse)
+ Dans Postman, allez sur Headers, ajoutez une KEY Authorization et une KEY Client-Id
+ Mettez la valeur Bearer votreToken en face de la clé Authorization
+ Mettez votre Client ID en face de la clé Client-Id
Si tout ce passe bien, vous récupèrerez toutes vos informations (id, login, displayname, etc...). Récupérez le user_id et copiez le dans popup.js

# Optionnel: streams
+ Créer une requête HTTP GET https://api.twitch.tv/helix/streams?user_id= VOTRE USER ID
+ Dans Postman, allez sur Headers, ajoutez une KEY Authorization et une KEY Client-Id
+ Mettez la valeur Bearer votreToken en face de la clé Authorization
+ Mettez votre Client ID en face de la clé Client-Id

Le logiciel va vous sortir trois types de données.
La première étant une erreur 403, non autorisé, vous avez oublié une étape.
La seconde étant "{"data":[],"pagination":{}}", ce qui signifie que vous n'êtes pas en live (ce n'est pas une erreur en gros, c'est juste qu'il n'y a rien à récupérer si vous n'envoyez aucune donnée à Twitch = votre stream)
La troisème étant toutes vos informations concernant votre stream.
Si vous voyez les deux dernières, alors la suite devrait être assez simple.


# popup.js
Modifiez les valeurs indiquées plus haut :
- userId
- clientId
- token
- tiwtchUrl

# Dossier Images
Uploadez deux images.
- 32x32
- ON.png quand vous êtes en stream.
- OFF.png quand vous êtes hors-ligne.

# Utiliser votre Extension.
La publier sur Google Extension Webstore :
- Créer et valider le compte (5$)
- Modifier votre compte.
- À vous de bidouiller, je vais pas tout vous apprendre aussi !

L'utiliser en version non empaquetée/empaquetée.
Accédez à chrome://extensions.
Cherchez les ... verticaux, activez le Mode développeur puis cliquez sur "Charger l'extension non empaquetée", puis cherchez-là dans vos dossiers.

# Fork, edit, shares, updates, fixs
Merci à ceux qui vont contribuer à ce projet.

### Credits going to Pentiminax, Twitch, Chrome & me (for publishing & editing a little the file.)