describe("Todo Model", function () {

    beforeEach(function() {
        module("todo.model");
        module('fixtures/todos.json');
    });

    describe("model", function() {
        var todos, $httpBackend;

        beforeEach(function () {
            inject(function (_$httpBackend_, _todos_, fixturesTodos) {
                todos = _todos_;
                $httpBackend = _$httpBackend_;
                $httpBackend
                    .when('GET', 'http://localhost:1337/todos')
                    .respond(fixturesTodos);
            });
        });

        it("load the todos", function() {
            expect(Array.isArray(todos.getTodos())).toEqual(true);
        });

        it('will save todoes', function() {
            todos.addTodo('my to');

            $httpBackend.expect('POST', 'http://localhost:1337/todos').respond(200, '');
            $httpBackend.flush();
        });
    });
});
