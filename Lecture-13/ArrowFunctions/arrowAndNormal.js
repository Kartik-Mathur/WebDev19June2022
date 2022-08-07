let obj = {
    name:'Kartik',
    fun: ()=>{
        console.log(this);
    }
}

let obj1 = {
    name: "Coding Blocks",
    fun: function () {
        console.log(this);
    }
}

console.log(obj);
console.log(obj1);
obj1.fun();
obj.fun();