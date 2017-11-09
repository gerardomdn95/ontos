(function() {
    'use strict'

    var gilTax = {
        templateUrl: './app/components/myNews.html',
        controller: newsCtrl,
    };

    angular
        .module('gilApp')
        .component('gilTax', gilTax);

    newsCtrl.$inject = ["gilJson"];

    function newsCtrl(gilJson) {
        var vm = this;

        $('.collapsible').collapsible();

        vm.$onInit = onInit;

        function onInit() {
            vm.noteData = null;

            vm.noteData = gilJson.query()
            console.log(vm.noteData)
        }
    }
})();