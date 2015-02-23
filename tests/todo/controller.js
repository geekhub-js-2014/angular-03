describe("Todo Controllers", function () {

    beforeEach(function() {
        module("todo.controller");
        //module(function($provide) {
        //    $provide.value('$state', jasmine.createSpyObj('$state', ['go']));
        //});
    });

    describe("TodosController", function() {
        var $scope, ctrl, todos;

        beforeEach(function () {
            inject(function ($rootScope, $controller) {
                todos = jasmine.createSpyObj('todos', ['addTodo', 'getTodos']);
                $scope = $rootScope.$new();

                ctrl = $controller("TodosController", {
                    $scope: $scope,
                    todos: todos
                });
            });

        });

        it("$scope should contain getTodos", function() {
            expect($scope.getTodos).toBeDefined();
        });

        it('should call todos.addTodo on save', function() {
            $scope.todoText = "my new todo";
            $scope.addTodo();

            expect(todos.addTodo).toHaveBeenCalledWith("my new todo");
            expect($scope.todoText).toEqual('');
        });
    });
});
