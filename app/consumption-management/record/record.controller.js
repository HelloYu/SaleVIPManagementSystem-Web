(function() {
    'use strict';

    angular
        .module('app.consumption_management')
        .controller('ConsumptionRecordCtrl', ConsumptionRecordCtrl);

    ConsumptionRecordCtrl.$inject = ['UtilityService'];

    function ConsumptionRecordCtrl(UtilityService) {
        var vm = this;
        /*----------  界面层资源  ----------*/

        /*----------  内部变量  ----------*/

        var utilityService = UtilityService;
        /*----------  内部逻辑函数  ----------*/


        /*----------  内部辅助函数  ----------*/

        function init() {

        }

        init();
    }
})();