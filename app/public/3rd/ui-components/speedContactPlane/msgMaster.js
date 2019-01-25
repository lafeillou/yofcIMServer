//管理员IM单例对象
define(function (require, exprots, module) {
    var SDK = require('SDK');
    // console.log('SDK:', SDK);

    module.exports = {
        connectYX: function (parmas) {
            SDK.NIM.getInstance({
                appKey: parmas.appkey,
                account: parmas.account,
                token: parmas.token,
                onconnect: function () {
                    console.log('SDK 连接成功');
                },
                ondisconnect: function (obj) {
                    console.log('SDK 连接断开', obj);
                },
                onerror: function (error) {
                    console.log('SDK 连接失败', error);
                }
            })
        }
    }
});