angular.module('todo.model', [
    'todo.api'
])

    .factory('todos', function (api, $http, server) {
        var items = [
            {text: 'learn angular', done: true},
            {text: 'build an angular app', done: false}
        ];

        api('/todos').then(function (data) {
            items = data;
        });

        var todos = {
            getTodos: function () {
                return items;
            },
            addTodo: function (text) {
                items.push({text: text, done: false});
                $http.post(server + '/todos', items);
            },
            remaining: function () {
                var count = 0;
                angular.forEach(items, function (todo) {
                    count += todo.done ? 0 : 1;
                });
                return count;
            },
            archive: function () {
                var oldTodos = items;
                items = [];
                angular.forEach(oldTodos, function (todo) {
                    if (!todo.done) items.push(todo);
                });
            }
        };
        return todos;
    });
