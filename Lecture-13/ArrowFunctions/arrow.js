function printName(x){
    console.log("Hello Welcome! "+x);
}

printName("Kartik");

// Arrow Function
let newFun = (myName)=>{
    console.log("Inside newFun " +myName);
}

newFun("Rishabh");

let squareNo = (no) => no**2; // Implicit return
let CubeNo = (no) => no**3; // Implicit return

console.log(squareNo(6));
console.log(CubeNo(6));
// let squareNo = (no) =>{
//     return no**2;
// }

let arr = [1,2,3,4,5];
let newArr = arr.map((no)=>no**2);

console.log(newArr);

// arr = [1,2,3,4,5];
// newArr = [120,60,40,30,24];

// Reduce Method
let product = arr.reduce(function(accum,curr,indx,arr){
    return accum*curr;
});

let mul = arr.reduce((accum,curr)=>accum*curr);

console.log(product);
console.log(mul);

newArr = arr.map((no)=>product/no);
console.log(newArr);