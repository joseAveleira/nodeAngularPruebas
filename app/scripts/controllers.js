(function () {
    'use strict';
    angular
        .module('blog.controllers', ['blog.services']);

    function PostListController(Post) {
        this.posts = Post.query();
    }

    function FilmDetailController($routeParams, Film) {

        this.film = Film.get({
            id: $routeParams.filmId,
            otro: 'otro'
        });

    }

    function FilmListController(Film) {

        this.film = Film.query();
    }

    function PostCreateController(Post) {
        var self = this;
        this.create = function () {
            Post.save(self.post);
        };
    }


    function FilmCreateController(Film) {
        var self = this;
        this.create = function () {
            Film.save(self.film);
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
        .controller('FilmDetailController', FilmDetailController);

})();
