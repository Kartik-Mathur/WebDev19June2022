let arr = [1,2,3,4,5];
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
arr.shift();
console.log(arr);

let arr2 = arr.map(function(value,indx,arr){
    if(value%2 == 0) return true;
    return false;
});

console.log(arr);
console.log(arr2);

// FILTER METHOD
let x = [1,2,3,4,5,6,7,8,9,10];
let y = x.filter(myFun);

function myFun(value,indx,arr){
    if(value%2 == 0) return value;
}
console.log(y);

// REDUCE METHOD
x = [1,2,3,4,5,6,7,8,9,10];
let ans = x.reduce(function(accum,value){
    return accum+value;
})

console.log(ans);

// SORT 
x = [1,4,3,5,12,112,1122,444,4,44,3333];
x.sort(function(a,b){
    return a-b;
});
console.log(x);