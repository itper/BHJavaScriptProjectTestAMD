/**
 * Created by chendi on 15/8/24.
 */

alert("loading B 1"+this.caller);
define("moduleB",["a","b","c"],
    function(){

        alert("loading B 2");
        var funcB = function(){
            alert("funcB");
        }
        return {
            funcB:funcB
        };
    }
);