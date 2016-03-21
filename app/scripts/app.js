(function () {
    'use strict';
    // Aquí irá la funcionalidad

    angular.module('generador', ['ngRoute', 'generador.controllers']);

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
                controllerAs: 'filmlist'
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
            .when ('/diccionarios',{
                templateUrl: 'views/diccionarios.html',
                controller: 'DiccionariosController',
                controllerAs: 'diccionarios'

            });
    }
    angular
        .module('generador')
        .config(config);
})();

