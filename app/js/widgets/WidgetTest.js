/**
 * Created by chendi on 15/8/28.
 */
define('app/js/widgets/WidgetTest.js', ['$'], function (require, exports, module) {
    var $ = require('$');
    var w = require("app/js/widgets/widget.js");
    exports.hoverWidget = function (config) {
        var $el = $(config.$el);
        alert("AAA hover");
        this.aaa = "aaa";
        $el
            .on('mouseenter', function () {
                $el.addClass('active');
            })
            .on('mouseleave', function () {
                $el.removeClass('active');
            });
    }
});