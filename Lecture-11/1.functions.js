function add(a,b){
    return a+b;
}

let x = add(10,15);
console.log(x);

function subtract(a,b){
    return a-b;
}

let y = subtract(10,5);
console.log(y);

function printHello(){
    console.log("Hello World!");
}

printHello();

// DEFAULT ARGUMENTS
function add1(a = 10,b = 20){
    return a+b;
}

let ans = add1();
console.log(ans);
console.log(add1(20,20));
console.log(add1());

console.log(typeof add);
console.log(typeof add1);
console.log(typeof subtract);