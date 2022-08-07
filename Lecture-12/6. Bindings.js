// 1. Implicit Binding
/*
console.log(this);
function add(a,b){
    console.log(this);
    console.log(a+b);
}
add(10,20);
*/

// 2. Explicit Binding

let obj = {
    a: 'Hello',
    f: this
};

console.log(obj.f);
console.log(this);


obj = {
    a: 'Hello',
    fun: function(){
        console.log(this);
        return this;
    }
}

console.log(obj.fun());