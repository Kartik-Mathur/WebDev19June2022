let arr = [1,2,3,4,5,6];

let sum = 0;
arr.forEach(myFun);

function myFun(value,indx,arr){
    console.log(value);
    sum+= value;
}
console.log("Sum: " + sum);

arr.forEach(function(value,indx,arr){
    console.log(value);
});

arr.forEach(function(value,indx){
    console.log("Index: "+indx+" Value: "+value);
});

