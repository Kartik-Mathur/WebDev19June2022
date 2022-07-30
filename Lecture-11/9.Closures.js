function FunGen(){
    let x = 0;
    function newFun(){
        x++;
        return x;    
    }

    return newFun;
}

let fun1 = FunGen();
let fun2 = FunGen();
console.log(fun1()); // 1
console.log(fun1()); // 2
console.log(fun1()); // 3

console.log(fun2()); // 1
console.log(fun2()); // 2
