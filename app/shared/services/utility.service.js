(function() {
    'use strict';

    angular
        .module('app.shared')
        .factory('UtilityService', UtilityService);

    UtilityService.$inject = ['$q'];

    function UtilityService($q) {
        var UtilityService = {
            getOrderCode: getOrderCode,
            getDatetime: getDatetime,
            initPagination: initPagination
        };

        return UtilityService;

        // 获取项目中所需要用到的订单编号
        function getOrderCode(type) {
            var deferred = $q.defer();
            deferred.resolve(type + getDatetime());
            return deferred.promise;
        }
        // 获取后台时间，年+月+日+时分秒，如20161118192403
        function getDatetime() {
            var result = moment().format('YYYYMMDDHHmmss');
            return result;
        }
        // 初始化分页参数
        function initPagination() {
            var pagination = {
                // 每页10条
                limit: 10,
                // 从第0条开始
                page: 1
            }
            return pagination;
        }
    }
})();