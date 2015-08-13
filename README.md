------------------------------------------------------------------------------------------------------------------------
# MeanStack by Michael KANGAH 

repertoire pour faire le tutorial  de https://thinkster.io/mean-stack-tutorial/

------------------------------------------------------------------------------------------------------------------------

Ce projet a pour but la création d'une application de type reddit/hacker au travers de l'utilisation de tous les outils de la pile MEAN --> 

MongoDB : Base de données NoSQL
ExpressJS :
AngularJS :
NodeJS : Pour gerer le Back-end

Prérequis :

il vous faudrait des connaissance basic en programmation Javascript , ainsi qu'être familier aux applications webs , et aux concepts tels que  REST et CRUD

Avant de commencer assurez vous d'avoir installer 
	NodeJS -->  https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager
	MongoDB --> http://docs.mongodb.org/manual/installation/


SPECIFICATIONS FONCTIONNELS :

Il es toujours bon de commencer à travailler sur un projet en listant les fonctionnalités que vous voulez avoir. Cela permet d'avoir une vue générale de ce que vous voulez construire pour les utilisateurs :) 
 
 Ainsi pour ce projet , l'utilisateur sera capable de : 
		- [x] Créer de nouveaux posts
		- [x] Voir tous les posts ordonnées par nombre de voix décroissants
		- [x] Ajouter un commentaire à un post
		- [x] Voir tous les commentaires d'un post
		- [x] Voter pour les posts et les commentaires

En plus ce projet va permettre de toucher à : 
		Mongoose.js for adding structure to MongoDB
		Angular ui-router for client-side routing
		Twitter Bootstrap for some quick styling


- [x] Commencer par AngularJS : On commence par le Front-End en construisant tout d'abors la facade de l'app  
	
	- [x] Creer :
		- [x] index.html (for writing the template) 
		- [x] app.js (définir la logique angular) 
		- [x] repertoire controllers : pour y mettre tous les controleurs qui vont gerer la vue index.html
		- [x] MainCtrl.js controleur principal
	
	- [x] interaction avec l'utilisateur 
		- [x] Creer une fonction dans le controleur et la rattacher à scope
		- [x] ajouter le bouton à la vue avec l'event angular ng-click="fonctionX()"
		- [x] utilisation de ng-hide et ng-show 
	
	- [x] ajout d'un peu de beauté BOOTSTRAP :)
	
	- [x] Angular service --> afin de stocker des données qui pouront etre manipulable par tous les controlleurs 
		- [x] création d'un dossier services + le services posts.js
	
	- [x] Angular Routing 
		- [x] commencer par inclure le lien pour activer le routing ! il est a part :p , ici on utilise ui-router c'est plus récent que ngRoute
		- [x] vu qu'on a inclu un module externe , il faut l'inclure comme dependance dans notre application 	
		- [x] on indique à la vue principale que de nouvelle vues seront 'injectées' via javascript au besoin :) example <!-- <script type="text/ng-template" id="/home.html"></script> -->
		- [x] on dit enseuite a ui-router ou placer la vue en ajoutant  <!--  <ui-view></ui-view> --> au bon endroit. Explication : Whenever ui-router detects a route change, it will place the new state's template inside the tag and initialize the controller we specified in our state configuration. Notice how we have removed the ng-controller="MainCtrl" line from the opening <!-- <body>  --> tag.
		- [x] la page Posts.html via script
			- [x] on creer une nouvelle route dans le app.js afin de dire d'aller à la vue posts quand on demande une certaine url avec une id --> route parameter . 
			- [x] on defini donc une nouvelle vue posts.html 
			- [x] et un noveau controller 
			- [x] afficher le bon Post 
			- [X] on creer enfin la page via script avec ng-template puis , on fait un lien a partir de la page d'accueil . Explication : 
				When iterating over an array, the ng-repeat directive makes an $index variable available along with each item in the array.