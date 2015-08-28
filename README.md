学习
+	__AMD,CMD,CommonJS__ 这几种规范是什么
		
		AMD规范,定义一个API define()所有module定义都通过
+	__Nodejs__
	
		JS运行时,脱离浏览器限制.跨平台.提供系统级API访问功能,进程,I/O等等.
*	__npm__
*		Node的包管理工

*	__如何异步加载JS文件,并让其执行__

		在HtmlDom中添加script接点.这也是这些模块加载工具的实现,在代码执行完,
		进入内存之后,移除节点.
*	__require.js__
		一个异步模块加载工具,模块一般需要实现AMD规范.
		
		定义模块:
		需要有一个返回对象,对象是当前module的公开API
		define("moduleB",["a","b","c"],
    		function(a,b,c){
				var funcB = function(){
					alert("funcB");
				}
				return {
					funcB:funcB
				};
			}
		);
		
		使用模块:
		引用的module(define回调函数返回的),会在加载完成之后依次回调.
		require(['jquery','b'],function($,b){
			//既然我在开头明确声明依赖需求，那可以确定在执行这个回调函数时，依赖
			肯定是已经满足了
			//所以，放心地使用吧
		})
		
		





*	__sea.js__
*		一个异步加载工具,遵循所谓的CMD规范(自己起的),可以想Node一样的风格
		书写代码.
		
		定义模块:
		define(function(require,exports,modules){
			var $ = require('jquery')
			$.get('http://www.zhihu.com')
			//传统JS程序员的思维：
			//“咦，好神奇，JS加载不应该是异步的么，怎么我一说要依赖，jquery就自己
			跳出来了？”
		})
		使用模块:
		G.use(['./a','./b']，function(a , b){
			a.doSomething();
			b.doSomething();
    	});
*	__G.js__
		
		参照Sea.js实现
		在定义的时候,如果单使用G.js,可以照着api来,如果要基于ng-static,
		将require,export,module当做全局变量来使用,define中function的内容
		拿出:
			var a = require("A.js");
			exprots = {
 		  	 a: a.A;
			}
			
*	__jquery.js__
*		$.extend (obj1,obj....);将后边对象合并到obj1中
	
	
*	__underscore.js__
	* 扩展了一些常用的功能,提供一套函数式编程的功能.
*	__zepto.js__
*		
*	__backbone.js__
*		一个MVC框架
*	
*	__css---@import__
*		
*	__grunt__
*		前端构建工具,基于Nodejs的一个工具,可以对js,css等做一些预处理工作.
*	__前端构建工具__
*		
*	__自动化__
*	
*	__前端模板技术__
*	
*	__JS和Html混合__
*
*	__undercoser模板技术__
*
*	__widget__




































































