let arr = [1,2,3,4,5];
let sum = arr.reduce((accum,value,indx,arr)=>{
    console.log('index: '+indx + ' value: '+value + ' arr: '+arr);
    return accum * value;
});
console.log(sum);

Array.prototype.myReduce = function(cb,initial){
    let acc = initial;
    for(i = 0 ; i < this.length ; i++){
        acc = (acc == undefined) ? this[i] : cb(acc,this[i],i,arr);
    }
    return acc;
}

Array.prototype.myReduce1 = function(cb,initial){
    let acc,start;
    if(initial == undefined){
        acc = this[0];
        start = 1;
    }
    else{
        acc = initial;
        start = 0;
    }
    for(i = start ; i < this.length ; i++){
        acc = cb(acc,this[i],i,arr);
    }
    return acc;
}


sum = arr.myReduce1((accum,value,indx,arr)=>{
    console.log('index: '+indx + ' value: '+value + ' arr: '+arr);
    return accum * value;
});

console.log(sum);