let a = {
    k1: 10,
    k2: 'Hello',
    k3: true,
    k5: [1,2,3,4],
    k6: {
        l: 'Value inside a key',
        m: true
    }
};

for(let x in a){
    console.log(a[x]);
}

let str = "Hello World";
let text = '';
for(let i in str){
    // console.log(str[y]);
    text += str[i] + '-';
}
console.log(text);

// Iteration on array
let arr = [1,2,3,'Hello',,,true];
for(let j in arr){
    console.log(arr[j]);
}

for(let i = 0 ; i < arr.length ; i++){
    console.log(arr[i]);
} 