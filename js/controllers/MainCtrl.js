//le controlleur principale qui va se charger de la vue principale afin de gerer le two-way data biding 
//
// la variable scope sert de pont entre les controlleur angular et les templates angular : si tu veux 
// que quelque ( function , variable )  chose soit accessible dans ta template 
// attache le à scope :) 
// 
// on injecte ici le service 'posts' au niveau du controlleur afin d'acceder a ses données 
// 
app.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
    $scope.test = 'Hello world!'; // pour affincher un message de test 

    $scope.posts = posts.posts; // on lit la variable posts de notre vue au tableau qui contient les données à manipuler qui est dans le services posts.js 
    // ainsi toutes les modifications effectuees dans la vue sera automatiquement appliquées aux services et seront donc vue pas tous les autre controlleur qui utilisent le services



    // fonction qui permet d'ajouter un post en entrant son titre .  
    $scope.addPost = function() {
        if (!$scope.title || $scope.title === '') {
            return;
        } // afin de ne pas laisser des utilisateurs inconscients a entrer des choses vides 
      
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 8,
            comments: [{ // ajouter de faux commentaires , afin de voir la disposition 
                author: 'Joe',
                body: 'Cool post!',
                upvotes: 7
            }, {
                author: 'Bob',
                body: 'Great idea but everything is wrong!',
                upvotes: 14
            }]
        });
        $scope.title = '';
        $scope.link = '';
    };


    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    };

}]);
