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
        ModuleB:"ModuleB"
    }
});



var A1,B1;
require(
    //config 的 key
    ['ModuleA1',"ModuleB"],
    //回调函数,ABC 这些参数对应的对象就是各个模块中的返回值对象.
    function(A,B) {
        A.funcA();
        B.funcB();
        A1 = A;
        B1 = B;
        func();
    }
);
function func(){
    alert("func"+B1+","+A1);
}