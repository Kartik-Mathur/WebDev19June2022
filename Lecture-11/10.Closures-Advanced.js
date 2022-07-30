function FunGen(){
    let x = 0;
    function newFun(){
        x++;
        function newerFun(){
            x++;
            return x;
        }
        return newerFun;
    }
    return newFun;
}
let fun1 = FunGen(); // Yeh function return kar raha hai
let fun2 = FunGen(); // Yeh function return kar raha hai
let fun11 = fun1(); //  Yeh function return kar raha hai
let fun12 = fun1(); //  Yeh function return kar raha hai

console.log(fun11()); // 2 3 2
console.log(fun11()); // 4 4 3 
console.log(fun12()); // 2 3 2
console.log(fun12()); // 4 4 3
console.log(fun11()); // 6 5 4

