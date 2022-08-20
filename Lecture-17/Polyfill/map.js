let arr = [1,2,3,4];
let arr1 = arr.map((v,indx,arr)=>{
    return v+ 10;
});

console.log(arr1);

Array.prototype.mymap = function(cb){
    let oldArray = this;
    let newArray = [];
    for(let i = 0 ; i < oldArray.length; i++){
        newArray.push(cb(oldArray[i],i,oldArray));
    }
    return newArray;
}

let arr2 = arr.mymap((v,indx,arr)=>{
    return v + 10;
})

let arr3 = arr.mymap((v,indx,arr)=>{
    return v+20;
})

console.log(arr2);
console.log(arr3);