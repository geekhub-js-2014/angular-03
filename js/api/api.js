angular.module('todo.api', [])

    .constant('server', 'http://localhost:1337')

    .factory('api', function(server, $http) {
        return function(url) {
            return $http.get(server + url).then(function(result) {
                return result.data || [];
            }, function(err) {
                console.log('Problem getting data', err);
            });
        };
    });
