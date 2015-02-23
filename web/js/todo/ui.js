angular.module('todo.ui', [
    'todo.model'
])
    .directive('todoItem', function(todos) {
        return {
            restrict: 'E',
            templateUrl: 'templates/todo/ui/todo.html',
            scope: {
                todo: '='
            },
            transclude: true,
            link: function (scope, element, attrs) {

            }
        };
    });
