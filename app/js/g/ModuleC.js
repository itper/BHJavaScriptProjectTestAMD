/**
 * Created by chendi on 15/8/28.
 */
define("app/js/g/ModuleC.js",["app/js/g/ModuleCC.js"],function(require,exports,module){
    var ccc = require("app/js/g/ModuleCC.js");
    var cstr = ccc.CC;
    module.exports = {
        'C':"C"+cstr
    }
    //alert(module.exports === exports);//true;
});