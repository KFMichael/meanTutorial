app.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts) {

$scope.post = posts.posts[$stateParams.id]; // recupère le paramètre id passé à la vue afin d'afficher le post correspondant à id 

$scope.addComment = function(){
  if($scope.body === '') { return; }
  $scope.post.comments.push({
    body: $scope.body,
    author: 'user',
    upvotes: 0
  });
  $scope.body = '';
};
}]);
