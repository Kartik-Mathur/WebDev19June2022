// Array
let a = [1,2,3,4];
console.log(typeof a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
a[8] = 1.11;
a[9] = true;
a[10] = 'Hello';

let str = '';
for(let i = 0; i < a.length ; i++){
    console.log(a[i]);
    str += a[i] + ' ';
}
console.log(a);

// console.log('Printing using while: ');
// let j = 0;
// while(j<a.length){
//     console.log(a[j]);

//     j++;
// }

// let k = 0;
// do{
//     console.log(a[k]);
//     k++;

// }while(k < a.length);

// console.log(str);

// console.log(a);