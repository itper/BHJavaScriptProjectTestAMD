/**
 * Created by chendi on 15/8/28.
 */
define("app/js/g/ModuleA.js",['$','_'],function(require,exports){
    var $ = require('$');
    $('body').css('background-color','gray');
    $('body').css(
        {
            "background-color":"gray"
        }
    )
    $('body').on("click",function(){
        //alert("click");
    });
    $('body')
        .on('touchstart', 'a, .js-touch-state', function () {
            $(this).addClass('touch');
        })
        .on('touchmove', 'a, .js-touch-state', function () {
            $(this).removeClass('touch');
        })
        .on('touchend', 'a, .js-touch-state', function () {
            $(this).removeClass('touch');
        })
        .on('touchcancel', 'a, .js-touch-state', function () {
            $(this).removeClass('touch');
        });

    exports.alertA = function (){
        alert("A");
    }
});