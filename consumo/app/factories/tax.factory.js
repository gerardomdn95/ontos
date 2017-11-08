(function() {
    'use strict'

    angular
        .module('gilApp')
        .factory("taxJson", taxJson);

    function taxJson($resource) {
        return $resource("./impuesto.json");
    }
})();