//on declare une nouvelle app Angular nommée flapperNew 
//on inclut le module ui.router comme dependance externe 
var app = angular.module('flapperNews', ['ui.router']);


/*
ici on configure l'application afin de bien la router :3
 */
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', { // le nom de l'état -->  HOME 
                url: '/home', // il est appelé via cette url
                templateUrl: '/home.html', //voila ce qu'on affiche quand on est dans cet état
                controller: 'MainCtrl' // il es controlé par MainCtrl
            })
            .state('posts', { // le nom de l'état --> POSTS 
                url: '/posts/{id}', // il es appeleé via cet url
                templateUrl: '/posts.html', // voila ce qu'on affiche 
                controller: 'PostsCtrl' // il es controlé par PostsCtrl
            });

        $urlRouterProvider.otherwise('home'); // si on ne sais pas ou on s'en va on reviens a home :p 
    }
]);
