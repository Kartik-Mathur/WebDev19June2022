let arr = [1,2,3,4,5,6,7,8,9];
let arr1 = arr.filter((value,indx,arr)=>{
    // console.log('index: '+indx + ' value: '+value + ' arr: '+arr);
    if(value%2 == 0) return true;
    return false;
})

console.log(arr1);

Array.prototype.myfilter = function(cb){
    let newArr = [];
    for(let i = 0 ; i < this.length ; i++){
        if(cb(this[i],i,this)) newArr.push(this[i]);
    }
    return newArr;
}

let arr2 = arr.myfilter((value,indx,arr)=>{
    console.log('index: '+indx + ' value: '+value + ' arr: '+arr);
    if(value%2 == 0) return true;
    return false;
})
console.log(arr2);
