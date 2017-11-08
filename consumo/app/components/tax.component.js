(function() {
    'use strict'

    var gafGen = {
        templateUrl: './app/components/tax.component.html',
        controller: gafCtrl
    };

    angular
        .module('gilApp')
        .component('taxGen', taxGen);

    gafCtrl.$inject = ["taxJson"];

})();