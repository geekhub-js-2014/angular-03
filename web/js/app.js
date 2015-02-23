angular.module('todo.app', [
    'todo.routing',
    'valid.routing',
    'ui.router'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    });
