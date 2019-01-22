define(function (require, exports, module) {
    var ejs = require('ejs');
    var $ = require('jquery');
    var template = require('./speedContactPlane.html');
    var layer = require('layer');

    module.exports = {
        initPlane: function () {
            // let people = ['geddy', 'neil', 'alex'],
            //     html = ejs.render('<%= people.join(", "); %>', { people: people });
            this.$speedContactPlane = $(template);
            // 联系人列表显示容器、联系人搜索框
            $('body').append(this.$speedContactPlane);
            this.$contactListWrap = this.$speedContactPlane.find('.contactListWrap');
            // 主功能按钮（新消息、建群、设置）
            this.$speedContactFnBtns = this.$speedContactPlane.find('#speedContactFnBtns');

            // 点击展开面板
            this.$speedContactPlane.find('a.speedContactButton').on('click', function () {
                if (this.$contactListWrap.hasClass('show')) {
                    this.$contactListWrap.removeClass('show');
                } else {
                    this.$contactListWrap.addClass('show');
                }
            }.bind(this));

            this.$speedContactFnBtns.on('click', function (e) {
                e.stopPropagation();
                var fnCode = $(e.target).data('fncode');

                //if (fnCode === 1) {
                layer.open({
                    type: 2,
                    area: ['700px', '450px'],
                    fixed: false, //不固定
                    maxmin: true,
                    content: 'http://www.baidu.com'
                });
                //}
            });

            // layer.ready(function () {
            //     layer.msg('我爱你');
            // });
        },


    }
});