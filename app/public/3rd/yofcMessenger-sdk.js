(function (window, undefined) {
    var yofcMessenger = {};
    if (window.yofcMessenger) {
        return;
    }

    //加载js脚本
    function loadScript(url, cb) {
        var script = document.createElement('script');
        script.async = true,
            script.src = url;

        var entry = document.getElementsByTagName('script')[0];
        entry.parentNode.insertBefore(script, entry);

        script.onload = script.onreadystatechange = function () {
            var rdyState = script.readyState;

            if (!rdyState || /complete|loaded/.test(script.readyState)) {
                cb();
                script.onload = null;
                script.onreadystatechange = null;
            }
        }
    }

    yofcMessenger.init = function (cb) {

        loadScript('http://localhost:7001/public/3rd/seajs/2.2.3/sea.js', function () {
            loadScript('http://localhost:7001/public/3rd/seajs/plugins/seajs-text.js', function () {
                //配置seajs
                seajs.config({
                    alias: {
                        "Netcall": "sdk/6.1.0/NIM_Web_Netcall_v6.1.0_Module",
                        "SDK": "sdk/6.1.0/NIM_Web_SDK_v6.1.0_Module",
                        "speedContactFn": "ui-components/speedContactPlane/speedContactPlane",
                        //这里用的jquery同发布者环境用的jquery是独立的，比如发布者环境的window.jquery的版本是3.3.1,而这里是2.2.4
                        "jquery": "sdk/jquery_v2.2.4_Module",
                        //模板引擎
                        "ejs": "sdk/ejs_v2.5.8_Module",
                        "layer": "sdk/ui/layer/3.1.1/layer"
                    },
                    // Sea.js 的基础路径
                    base: 'http://localhost:7001/public/3rd/',
                });

                seajs.use(['nimWebNetCall', 'nimWebSDK', 'speedContactFn', 'layer', 'theme/default/css/main.css'], function (nimWebNetCall, nimWebSDK, speedContactFn, layer) {
                    if (cb && typeof cb === 'function') {
                        cb();
                    }
                    // 以下代码直接写到了layer源代码里
                    // layer.config({
                    //     path: 'http://localhost:7001/public/3rd/sdk/ui/layer/3.1.1/'
                    // });
                    speedContactFn.initPlane();
                    // console.log(nimWebNetCall);
                    // console.log(nimWebSDK);
                });
            });
        });
    }

    window.yofcMessenger = yofcMessenger;
})(this);