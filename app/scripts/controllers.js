(function () {
    'use strict';
    angular
        .module('blog.controllers', ['blog.services']);

    function PostListController(Post) {
        this.posts = Post.query();
    }

    function FilmDetailController($routeParams, Film) {

        this.film = Film.get({
            id: $routeParams.filmId
        });


    }

    function FilmDeleteController($routeParams, Film) {

        this.film = Film.remove({
            id: $routeParams.filmId
        });
        /*
                this.film = {};
                var self = this;
                Film.delete({
                        id: $routeParams.filmId
                    })
                    .$promise.then(
                        function (data) {
                            self.film = data;
                        }
                    );
        */



    }

    function FilmListController(Film, $scope) {



        this.film = Film.query();
        $scope.eliminar = function (id,indice) {
            this.film = Film.remove({
                id: id

            });
            $scope.filmlist.film.splice(indice,1);
            console.log(' idice:'+indice);
        };

    }

    function PostCreateController(Post) {
        var self = this;
        this.create = function () {
            Post.save(self.post);
        };
    }


    function FilmCreateController(Film,$location) {
        var self = this;
        this.create = function () {
         // $scope.filmlist.film.push(Film.save(self.film));
            // console.log(Film.save(self.film));
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
        .module('blog.controllers')
        .controller('PostListController', PostListController)
        .controller('PostCreateController', PostCreateController)
        .controller('FilmListController', FilmListController)
        .controller('PostDetailController', PostDetailController)
        .controller('FilmCreateController', FilmCreateController)
        .controller('FilmDeleteController', FilmDeleteController)
        .controller('FilmDetailController', FilmDetailController);

})();
