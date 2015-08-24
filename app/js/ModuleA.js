/**
 * Created by chendi on 15/8/24.
 */
//define 是 require 的一个函数,参数为一个函数,该函数返回值需要是一个 obj,整个模块的所有实现都需要在该匿名函数参数中
//返回一个obj 来暴露一些外部接口
//如果改模块依赖其他模块,则需要添加第一个参数数组为依赖库的列表
define(function(){
    var funcA = function(){
        alert("funcA");
    };
    return{
        funcA:funcA
    };
});