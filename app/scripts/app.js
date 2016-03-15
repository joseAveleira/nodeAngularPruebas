(function () {
    'use strict';
    // Aquí irá la funcionalidad

    angular.module('blog', ['ngRoute', 'blog.controllers']);

    function config($locationProvider, $routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/post-list.tpl.html',
                controller: 'PostListController',
                controllerAs: 'postlist'
            })
            .when('/post/:postId', {
                templateUrl: 'views/post-detail.tpl.html',
                controller: 'PostDetailController',
                controllerAs: 'postdetail'
            })
            .when('/new', {
                templateUrl: 'views/film-create.tpl.html',
                controller: 'FilmCreateController',
                controllerAs: 'filmcreate'
            })
            .when('/film', {
                templateUrl: 'views/film-list.tpl.html',
                controller: 'FilmListController',
                controllerAs: 'filmlist'
            })
            .when ('/film-detail/:filmId',{
                templateUrl: 'views/film-detail.tpl.html',
                controller: 'FilmDetailController',
                controllerAs: 'filmdetail'

            })
            .when ('/film-delete/:filmId',{
                templateUrl: 'views/film-list.tpl.html',
                controller: 'FilmDeleteController',
                controllerAs: 'filmlist'

            });
    }
    angular
        .module('blog')
        .config(config);
})();

