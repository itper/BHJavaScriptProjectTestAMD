//该函数需要实现 AMD 标准
define(function(){

    function Person(name,sex){
        this.name = name;
        this.sex = sex;
        this.getname = function(){
            return  this.name;
        }
        this.toPString = function(){
            return this.name+","+sex;
        }
    }
    function Student(){
        this.prototype = new Person();
    }
    var D = Dd;
    function Dd(){
        alert("aaaddd");
    }
    return{
        "D":D
    };

});
//alert(new Person("123",1).toPString());
//alert(Person(1,1));