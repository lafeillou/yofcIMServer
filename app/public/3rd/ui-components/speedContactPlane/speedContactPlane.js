define(function (require, exports, module) {
    var ejs = require('ejs');
    var $ = require('jquery');
    var template = require('./speedContactPlane.html');
    var layer = require('layer');
    var msgMaster = require('./msgMaster');
    var currentIndex = -1;
    // speedContactPlane 面板是否打开
    var isOpen = false;
    //新消息 或者 点击联系人或群 发消息 弹窗实体组成的数组
    var msgArr = [];

    var speedContactPlaneObj = {
        // 客户端登录网易云信
        getConnected: function (params) {
            msgMaster.connectYX({
                appkey: params.appkey,
                account: params.account,
                token: params.token
            });
            return this;
        },
        // // 添加好友，若还不是朋友
        // getFriends: function () {
        //     msgMaster.getFriends();
        //     return this;
        // },
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

            // 绑定发送消息事件
            this.$speedContactPlane.find('.friendItem').eq(0).on('click', function (e) {
                // alert('lafeillou');
                msgMaster.sendText({
                    account: '0bd87e70205411e998ebef38b3ab26ed',
                    text: '这是来自louyongliang002发来的消息：我的朋友lafeillou,你好吗？'
                });
            }.bind(this));
            return this;
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
                content: template,
                // 弹出后的回调
                success: function (layero, index) {
                    var $addMsgDialogWrap = layero.find('.addMsgDialogWrap');
                    var $memberInput = $addMsgDialogWrap.find('.memberInput');
                    // 自动对焦
                    $memberInput.focus();
                    // $memberInput.on('input', function (e) {
                    //     console.log(e);
                    // });
                    $memberInput.on('keyup', function (e) {

                        if (e.keyCode === 13) {
                            if (!$memberInput.val()) {
                                return;
                            }
                            // 将input输入框中的内容以胶囊的形式显示在input框前面
                            var $capsuleBtn = $('<span class="capsuleBtn">' + $.trim($(this).val()) + '<i class="fas fa-times"></i></span>')
                            $memberInput.before($capsuleBtn);
                            // 清空输入框当前的内容
                            $memberInput.val('').focus();
                            // 初始化聊天打字面板
                            speedContactPlaneObj.initChartInputBoard();
                            // 绑定胶囊按钮上的关闭按钮
                            $capsuleBtn.find('i').on('click', function () {
                                $(this).parent('.capsuleBtn').remove();
                                $memberInput.focus();
                            });
                        }
                    });

                }
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
        },

        // 初始化聊天打字面板
        initChartInputBoard: function () {
            alert('初始化面板！');
        }
    }

    module.exports = speedContactPlaneObj;
});