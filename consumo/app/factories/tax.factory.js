(function() {
    'use strict'

    angular
        .module('gilApp')
        .factory("taxJson", taxJson);

    function gafApi($resource) {
        return $resource("./impuesto.json");
    }
})();