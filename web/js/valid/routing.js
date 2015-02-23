angular.module('valid.routing', [
    'valid.controller',
    'ui.router'
])

    .config(function ($stateProvider) {
        $stateProvider
            .state('valid', {
                url: '/valid',
                templateUrl: 'templates/valid/valid.html',
                controller: 'ValidController'
            });
    });
