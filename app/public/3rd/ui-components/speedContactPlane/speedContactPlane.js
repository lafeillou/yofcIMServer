define(function (require, exports, module) {
    var ejs = require('ejs');
    var $ = require('jquery');
    var template = require('./speedContactPlane.html');
    module.exports = {
        initPlane: function () {
            // let people = ['geddy', 'neil', 'alex'],
            //     html = ejs.render('<%= people.join(", "); %>', { people: people });
            this.$speedContactPlane = $(template);
            $('body').append(this.$speedContactPlane);

            // 点击展开面板
            this.$speedContactPlane.find('a.speedContactButton').on('click',function(){
                alert('ok');
            });
        },


    }
});