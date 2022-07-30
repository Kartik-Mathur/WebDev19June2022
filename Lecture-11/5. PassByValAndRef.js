/*
function update(a,b,c){
    c = a+b;
    console.log("Inside update c: "+c);
}


let a = 10,b=20,c;
update(a,b,c);
console.log(c);
*/

// To actually update the value
function update(a,b,c){
    c = a+b;
    // console.log("Inside update c: "+c);
    return c;
}


let a = 10,b=20,c;
c = update(a,b,c);
console.log(c);

// PASS BY REFERENCE
let arr = [1,2,3,4];
console.log(arr == [1,2,3,4]); // false, because memory references are different

let arr1 = [1,2,3,4];
console.log(arr == arr1); // false

let arr2 = arr;
console.log(arr2 == arr); // true

function update1(arr){
    arr[2] = arr[1]+arr[2];
}

let x = [1,2,5];
console.log(x);
update1(x);
console.log(x);