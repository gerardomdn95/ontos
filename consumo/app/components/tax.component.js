(function() {
    
    'use strict'

    var taxGen = {
        templateUrl: './app/components/tax.component.html',
    };

    angular
        .module('gilApp')
        .component('taxGen', taxGen);
})();