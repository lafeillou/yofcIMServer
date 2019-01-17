define(function (require, exports, module) {
    var ejs = require('ejs');
    var $ = require('jquery');
    var template = require('./speedContactPlane.tpl');
    alert(template);

    module.exports = {
        initPlane: function () {
            let people = ['geddy', 'neil', 'alex'],
                html = ejs.render('<%= people.join(", "); %>', { people: people });
        }
    }
});