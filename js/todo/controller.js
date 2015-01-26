angular.module('todo.controller', [
    'todo.model'
])
    .controller('TodosController', function($scope, todos) {
        $scope.getTodos = todos.getTodos;

        $scope.addTodo = function() {
            todos.addTodo($scope.todoText);
            $scope.todoText = '';
        };

        $scope.remaining = todos.remaining;
        $scope.archive = todos.archive;
    });
