(function() {
    'use strict';

    angular
        .module('app.goods_management')
        .factory('GoodsModel', GoodsModel);

    GoodsModel.$inject = ['Restangular'];

    function GoodsModel(Restangular) {

        let goods = Restangular.all('goods.json'),
            goodsClass = Restangular.all('goods_classes.json'),
            inventories = Restangular.all('inventories.json');

        let GoodsModel = {
            getGoods: getGoods,
            getClasses: getClasses,
            getInventories: getInventories
        };

        return GoodsModel;

        // 获取商品分类列表
        function getClasses(configs = {}) {
            return goodsClass.getList(configs);
        }

        // 获取商品列表
        function getGoods(configs = {}) {
            return goods.getList(configs);
        }

        function getInventories(configs = {}) {
            return inventories.getList(configs);
        }
    }
})();