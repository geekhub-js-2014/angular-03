angular.module('todo.api', [])

    .constant('server', 'http://localhost:1337')

    .factory('api', function(server, $http, $q) {
        return function(url) {
            return $http.get(server + url).then(function(result) {
                return new $q(function(resolve, reject) {
                    resolve(result.data || []);
                });
            }, function(err) {
                console.log('Problem getting data', err);
            });
        };
    });
