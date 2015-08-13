//le controlleur principale qui va se charger de la vue principale afin de gerer le two-way data biding 
//
// la variable scope sert de pont entre les controlleur angular et les templates angular : si tu veux 
// que quelque ( function , variable )  chose soit accessible dans ta template 
// attache le à scope :) 
// 
// on injecte ici le service 'posts' au niveau du controlleur afin d'acceder a ses données 
// 
app.controller('MainCtrl', ['$scope','posts', function($scope,posts) {
    $scope.test = 'Hello world!'; // pour affincher un message de test 

    $scope.posts = posts.posts;
    // fonction qui permet d'ajouter un post en entrant son titre .  
    $scope.addPost = function() {
        if (!$scope.title || $scope.title === '') { // afin de ne pas laisser des utilisateurs inconscients a entrer des choses vides 
            return;
        }
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0
        });

        $scope.title = '';
        $scope.link = '';
    };

    // ajouter de faux objects , afin de voir la disposition 
    $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [{
            author: 'Joe',
            body: 'Cool post!',
            upvotes: 0
        }, {
            author: 'Bob',
            body: 'Great idea but everything is wrong!',
            upvotes: 0
        }]
    });


    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
    };

}]);
