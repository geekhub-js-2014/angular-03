angular.module('todo.routing', [
    'todo.controller',
    'ui.router'
])

    .config(function ($stateProvider) {
        $stateProvider
            .state('td', {
                url: '/',
                templateUrl: 'templates/todo/todos.html',
                controller: 'TodosController'
            });
    });
