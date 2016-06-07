(function() {
    'use strict';

    function IMoove2TestService($http, $q) {
        return {
            name: 'imoove2testservice',
            getData: function() {
                var deferred = $q.defer();

                $http.get('/api/meantest/getdata').success(function(response) {
                    deferred.resolve(response);
                }).error(function(response) {
                    deferred.reject(response);
                });
                return deferred.promise;
            },
            putData: function(request) {
                $http.post('api/meantest/putdata', {'data':request});
            }
        };
    }

    angular.module('mean.meanStarter').factory('IMoove2TestService', IMoove2TestService);

    IMoove2TestService.$inject = ['$http', '$q'];
})();