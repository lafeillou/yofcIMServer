define(function (require, exports, module) {
    var ejs = require('ejs');
    var $ = require('jquery');
    var template = require('./speedContactPlane.html');
    module.exports = {
        initPlane: function () {
            // let people = ['geddy', 'neil', 'alex'],
            //     html = ejs.render('<%= people.join(", "); %>', { people: people });
            this.$speedContactPlane = $(template);
            // 联系人列表显示容器、联系人搜索框
            $('body').append(this.$speedContactPlane);
            this.$contactListWrap = this.$speedContactPlane.find('.contactListWrap');
            // 点击展开面板
            this.$speedContactPlane.find('a.speedContactButton').on('click', function () {
                if (this.$contactListWrap.hasClass('show')) {
                    this.$contactListWrap.removeClass('show');
                } else {
                    this.$contactListWrap.addClass('show');
                }
            }.bind(this));
        },


    }
});