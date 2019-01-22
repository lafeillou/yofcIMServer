define(function (require, exports, module) {
    var ejs = require('ejs');
    var $ = require('jquery');
    var template = require('./speedContactPlane.html');
    var layer = require('layer');

    var currentIndex = -1;
    // speedContactPlane 面板是否打开
    var isOpen = false;
    //新消息 或者 点击联系人或群 发消息 弹窗实体组成的数组
    var msgArr = [];

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
                    isOpen = false;
                } else {
                    this.$contactListWrap.addClass('show');
                    isOpen = true;
                }
            }.bind(this));

            this.$speedContactFnBtns.on('click', function (e) {
                e.stopPropagation();
                var fnCode = $(e.target).data('fncode');
                switch (fnCode) {
                    case 0:
                        this.openAddMsgDialog();
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
                type: 1,
                title: ['创建群组', 'font-size:18px;'],
                skin: 'yofcMsgr',
                area: ['650px', '600px'],
                resize: false,
                content: template,
                btn: ['创建', '取消'],
                shade: 0,
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
        },

        // 打开新建消息弹窗
        openAddMsgDialog: function () {
            var template = require('./addMsgDialog.html');
            var pos = this.getMsgDialogPos();
            layer.open({
                type: 1,
                title: false,
                skin: 'yofcMsgr',
                resize: false,
                shade: 0,
                area: ['320px', ($(window).height() - (pos[0].replace('px', '')) * 1) + 'px'],
                offset: pos,
                anim: 2,
                content: template
            });
        },

        getMsgDialogPos: function () {
            var top, pos;
            // 如果还没有打开过 发消息弹窗，即页面上一个弹窗页面有
            if (msgArr.length === 0) {
                // 相对于speedContactContainer，摆放第一个发消息弹窗
                pos = this.$speedContactPlane.find('.speedContactContainer').offset();

                if (isOpen) {
                    top = pos.top;
                } else {
                    top = pos.top - 500;
                }

                return [top + 'px', (pos.left - 320 - 40) + 'px']
            }
        }
    }
});