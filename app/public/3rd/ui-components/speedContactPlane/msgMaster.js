//管理员IM单例对象
define(function (require, exprots, module) {
    var SDK = require('SDK');
    // console.log('SDK:', SDK);
    var nim = null;
    var NIM = {
        connectYX: function (parmas) {
            nim = SDK.NIM.getInstance({
                appKey: parmas.appkey,
                account: parmas.account,
                token: parmas.token,
                db: false,
                onfriends: function (friends) {
                    console.log('收到好友列表', friends);
                    // data.friends = nim.mergeFriends(data.friends, friends);
                    // data.friends = nim.cutFriends(data.friends, friends.invalid);
                    // refreshFriendsUI();
                },
                onconnect: function () {
                    console.log('SDK 连接成功');
                    NIM.getFriends();
                    // 添加指定用户
                    // NIM.addFriend({
                    //     account: '0bd87e70205411e998ebef38b3ab26ed',
                    //     ps: '直接添加用户lafeillou'
                    // });
                    // if (location.href.indexOf(':9000')) {
                    //     //向lafeillou发送消息
                    //     NIM.sendText({
                    //         account: '0bd87e70205411e998ebef38b3ab26ed',
                    //         text: '这是来自louyongliang002发来的消息：我的朋友lafeillou,你好吗？'
                    //     });
                    // } else if (location.href.indexOf(':9003')) {
                    //     //向louyongliang002发送消息
                    //     NIM.sendText({
                    //         account: '3135f890196611e9a97567cbebc10b72',
                    //         text: '这是来自lafeillou发来的消息：我的朋友louyongliang002,你好吗？'
                    //     });
                    // }
                },

                onmsg: function (msg) {
                    console.log('收到消息', msg.scene, msg.type, msg);
                },
                ondisconnect: function (obj) {
                    console.log('SDK 连接断开', obj);
                },
                onerror: function (error) {
                    console.log('SDK 连接失败', error);
                }
            })
        },

        getFriends: function () {
            nim.getFriends({
                done: function (error, friends) {
                    console.log('获取好友列表' + (!error ? '成功' : '失败'), error, friends);
                    if (!error) {}
                }
            });
        },
        // 点对点发送文本消息
        sendText: function (params) {
            var msg = nim.sendText({
                scene: 'p2p',
                to: params.account,
                text: params.text,
                done: function (error, msg) {
                    console.log('发送' + msg.scene + ' ' + msg.type + '消息' + (!error ? '成功' : '失败') + ', id=' + msg.idClient, error, msg);
                }
            });
            console.log('正在发送p2p text消息, id=' + msg.idClient);
        },
        // 直接添加某用户为好友
        addFriend: function (params) {
            nim.addFriend({
                account: params.account,
                ps: params.ps,
                done: function (error, obj) {
                    console.log('直接加为好友' + (!error ? '成功' : '失败'), error, obj);
                    if (!error) {}
                }
            });
        }
    }

    module.exports = NIM;
});