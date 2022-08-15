console.log(this);

function solve(){
    console.log(this); // window
}

solve();

let obj = {
    name: 'Kartik',
    fun: this
};

console.log(obj.fun); // window

// Case 1: Implicit Binding, to change the context(this)
obj = {
    firstName: 'Kartik',
    fun: function(){
        console.log(this);
        this.lastName = "Mathur";
        return this;
    }
}

obj.fun();
console.log(obj);

// CASE 2: Explicit Binding, to change the context of this
// 1. call() function
function Fun(company,town){
    console.log(this);
    console.log("Inside Fun this points to " + this + " "+company+" "+town);
}
Fun();

Fun.call(obj,"Coding Blocks","Kohat Enclave");



/*
const obj2 = {
    firstName : "Coding",
    lastName: "Blocks",
    fun : function(){
        console.log("Hello");
        console.log(this);
    }
}

Fun.call(obj2); // now inside Fun this will point to obj2

let obj3 = {
    a : 10,
    b: 'Hello'
}

Fun.call(obj3); // Inside Fun now this will point to obj3

obj2.fun();

*/