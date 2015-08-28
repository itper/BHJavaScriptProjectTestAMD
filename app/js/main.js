/**
 * Created by chendi on 15/8/24.
 */

//requirejs会根据配置去加载 Module, 加载之后各个 Module 由于实现了AMD 规范
//所以,各个 Module 会同意以 define()格式来写 js 文件,方法参数是一个匿名 function, 也就是一个独立的空间.通过返回值的形式,暴露出一些 api和对象,通过 require 方法的回调函数的返回值操作.
require.config({
    paths: {
        //index: 'index',
        //jquery:'jquery-1.0.1'
        //moduleA:'',
        //moduleB:'',
        //moduleC:''
        ModuleA1:"ModuleA",
        ModuleB:"ModuleB",
        ModuleC:"ModuleC"
    },
    shim:{//不兼容 AMD 规范的
        'ModuleC':{
            exports:"C"//指定该模块的暴露值,如果该值不是该模块的暴露,在 require 的回调函数的参数中C1将会是 undefined, 查看 ModuleC 的源码得知,该模块的暴露值是C
            //deps:['']//依赖的一些库
        }
    }
});

var A1,B1;
require(
    //config 的 key
    ['ModuleC',"ModuleB"],
    //回调函数,ABC 这些参数对应的对象就是各个模块中的返回值对象.
    function(C1,B) {
    }
);
