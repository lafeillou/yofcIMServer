define(function (require, exports, module) {
    var ejs = require('ejs');
    var $ = require('jquery');
    var template = require('./speedContactPlane.html');
    var layer = require('layer');

    var currentIndex = -1;
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
                switch (fnCode) {
                    case 0:
                        // this.openAddChartMemberDialog();
                        break;
                    case 1:
                        this.openAddChartMemberDialog();
                        break;
                    case 2:
                        break;
                    default:
                        console.log('error');
                        break;

                }

            }.bind(this));
        },

        // 打开新建群聊弹窗
        openAddChartMemberDialog: function () {
            var template = require('./addChartMemberDialog.html');
            currentIndex = layer.open({
                // type: 2,
                // area: ['700px', '450px'],
                // fixed: false, //不固定
                // maxmin: true,
                // content: 'http://www.baidu.com'
                type: 1,
                title: ['创建群组', 'font-size:18px;'],
                skin: 'yofcMsgr',
                area: ['650px', '600px'],
                resize: false,
                content: template,
                btn: ['创建', '取消'],
                scrollbar: false,
                yes: function (index, layero) {
                    // alert('点击了取消');
                    // return true;
                    alert('点击了创建');
                    return false;
                },
                btn2: function (index, layero) {
                    layer.close(currentIndex);
                }
            });
        }
    }
});