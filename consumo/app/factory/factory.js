(function() {
    'use strict'

    angular
        .module('gilApp')
        .factory('gilJson', gilJson);

    function gilJson($resource) {
        return $resource("./app/assets/json/impuesto.json")
    }
})();