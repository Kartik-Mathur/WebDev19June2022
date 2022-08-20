function sum(x,y,z){
    return x + y + z
}

let arr = [1,2,3]
let ans = sum(...arr);
console.log(ans);

function printArguments(...args){
    for(let i = 0 ; i < args.length ; i++){
        console.log(args[i]);
    }
}
printArguments("Hello World",true,1,2,3,4,5);