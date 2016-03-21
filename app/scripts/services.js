(function () {
    'use strict';
    angular.module('generador.services', ['ngResource']);

    function Post($resource, BaseUrl) {
        return $resource(BaseUrl + '/posts/:postId', {
            postId: '@_id'
        });
    }

    function Comment($resource, BaseUrl) {
        return $resource(BaseUrl + '/comments/:commentId', {
            commentId: '@_id'
        });
    }

    function User($resource, BaseUrl) {
        return $resource(BaseUrl + '/users/:userId', {
            userId: '@_id'
        });
    }

    function Film($resource) {
        return $resource('http://localhost:3000/api/tvshows/:id', {
            id: '@_id'
        });
    }


    angular
        .module('generador.services')
        .constant('BaseUrl', 'http://jsonplaceholder.typicode.com')
        .factory('Post', Post)
        .factory('Comment', Comment)
        .factory('User', User)
        .factory('Film', Film);
})();
