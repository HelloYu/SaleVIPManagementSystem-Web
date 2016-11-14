(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('LayoutCtrl', LayoutCtrl);

    LayoutCtrl.$inject = ['$scope', 'LayoutModel', 'LayoutService'];

    function LayoutCtrl($scope, LayoutModel, LayoutService) {
        /*----------  界面层资源  ----------*/
        var vm = this;

        // 系统主菜单
        vm.mainMenus = [];

        // 快捷菜单
        vm.shortcutMenus = [];
        /*----------  内部变量  ----------*/
        var layoutModel = LayoutModel,
            layoutService = LayoutService;






        /*----------  逻辑代码区块  ----------*/


        function initMainMenus() {

            layoutModel.getMainMenus().then(result => {
                result = result.plain()
                var menus = layoutService.parseMenus(result);
                // 默认激活第一个菜单
                menus.mainMenus[0].active = true;
                debugger;
                vm.mainMenus = menus.mainMenus;
                vm.shortcutMenus = menus.shortcutMenus;
            });
        }

        function initLayout() {
            initMainMenus();
        }


        initLayout();
    }
})();