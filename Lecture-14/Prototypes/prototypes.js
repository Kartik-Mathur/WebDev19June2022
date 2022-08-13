// dunder proto: __proto__
function fun(){
    console.log('Fun');
}

fun();
console.log(fun.__proto__);
console.log(fun.__proto__ == Function.prototype);
