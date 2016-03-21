(function () {
    'use strict';
    angular
        .module('generador.controllers', ['generador.services']);

    function DiccionariosController () {

    }

    function PostListController(Post) {
        this.posts = Post.query();
    }

    function FilmDetailController($routeParams, Film) {

        this.film = Film.get({
            id: $routeParams.filmId
        });


    }


    function HeaderController($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
        console.log($location.path());
    }


    function FilmListController(Film, $scope) {


        this.film = Film.query();
        //$scope.filmlist.film.add(filmlist);
        // this.film=filmlist.getlista();
        $scope.eliminar = function (id, indice) {

            this.film = Film.remove({
                id: id
            });

            $scope.filmlist.film.splice(indice, 1);
            console.log(' indice:' + indice);

        };

    }

    function PostCreateController(Post) {
        var self = this;
        this.create = function () {
            Post.save(self.post);
        };
    }


    function FilmCreateController(Film, $location) {
        var self = this;


        this.create = function () {
            // filmlist.setlsita(self.film);
            // console.log(filmlist.getlista());
            Film.save(self.film);
            $location.path('/film');

        };
    }

    function PostDetailController($routeParams, Post, Comment, User) {
        this.post = {};
        this.comments = {};
        this.user = {};
        var self = this; // Para guardar la referencia
        Post.query({
                id: $routeParams.postId
            })
            .$promise.then(
                //Success
                function (data) {
                    self.post = data[0];
                    self.user = User.query({
                        id: self.user.userId
                    });
                },
                //Error
                function (error) {
                    console.log(error);
                }
            );
        this.comments = Comment.query({
            postId: $routeParams.postId
        });
    }

    angular
        .module('generador.controllers')
        .controller('PostListController', PostListController)
        .controller('PostCreateController', PostCreateController)
        .controller('FilmListController', FilmListController)
        .controller('PostDetailController', PostDetailController)
        .controller('FilmCreateController', FilmCreateController)
        .controller('HeaderController', HeaderController)
        .controller('DiccionariosController', DiccionariosController)
        .controller('FilmDetailController', FilmDetailController);

})();
