/*

on creer un objet qui va contenir un tableau de post
Ce tableau sera donc manipulable au niveau de tous les controlleurs qui souhaiteront l'injecter dans une vue
On a creer un objet au lieux d'un simple tableau , car dans le futur on peu enrichir notre service par des functions et d'autre variable manipulant ou 
en relation avec le tableau 
 */
app.factory('posts', [function() {
    var o = {
        posts: []
    };
    return o;
}]);


