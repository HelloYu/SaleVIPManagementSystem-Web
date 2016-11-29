(function() {
    'use strict';

    angular
        .module('app.consumption_management')
        .controller('QuickPayCtrl', QuickPayCtrl);

    QuickPayCtrl.$inject = ['UtilityService'];

    function QuickPayCtrl(UtilityService) {
        var vm = this;
        /*----------  界面层资源  ----------*/
        vm.currentPay = {
            // 订单编号
            code: ''
        };

        /*----------  内部变量  ----------*/

        var utilityService = UtilityService;
        /*----------  内部逻辑函数  ----------*/


        /*----------  内部辅助函数  ----------*/
        // 初始化订单编号
        function getCode() {
            utilityService.getOrderCode('KS').then(result => {
                vm.currentPay.code = result;
            });
        }

        function init() {
            // 获取订单编号
            getCode();

        }

        init();
    }
})();