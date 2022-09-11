/*let a = 10;

function add (a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

let obj = {
    a : a,
    add: add,
    subtract:subtract
}

let obj1 = {
    a,
    add,
    subtract
}
*/

// console.log(obj);
// console.log(obj1);

// spread operator
obj = {
    firstName:'Kartik',
    lastName: "Mathur",
    org:"Coding Blocks"
}

obj1 = {
    ...obj,
    profession:"Mentor"
}

console.log(obj1);

function add(a,b,c,...nums){
    console.log(nums);
    let ans = a + b + c + nums.reduce((curr,ans)=>curr+ans);
    return ans;
}

console.log(add(1,2,3,4,5,6,7,8,9,10));

// destructuring
obj = {
    a: 10,
    b: 'Hello World',
    subtract: (a,b)=>a-b,
    cube: a=>a**3
}

let {a,b,add1="Don't Exist"} = obj;
console.log(a);
console.log(b);
console.log(add1);