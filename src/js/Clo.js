const Coun = (function(){
    let num = 0;

    function Counter(){}

    Counter.prototype.inc = function(){
        num++;
        return num;
    }

    Counter.prototype.dec = function(){
         num--;
         return num;
    }

    return Counter;
}())
const coun = new Coun();
const coun2 = new Coun();
console.log(coun.inc())
console.log(coun.inc())
console.log(coun2.inc())
console.log(coun.dec())
console.log(coun.dec())

function out(s){
    if(s){
        s()
    }
    return function inf(){
        out(() => console.log("inf"))
    }
}
const ss = out();
ss()
