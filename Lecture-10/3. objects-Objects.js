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


console.log(a.k6.l);

console.log(a);

// All the keys are strings by default like shown below👇🏻
let b = {
    'k1':10,
    'k2': 'Hello',
    'k3': true
};

console.log(typeof a);

console.log(a.k1);
console.log(a.k2);
console.log(a.k3);

a.k2 = "Hello World";
console.log(a.k2);

delete a.k2;
console.log(a.k2);

a.k4 = "JavaScript";
console.log(a.k4);


// Third way to use an Object
let obj = {
    '': 10,
    ' ': 'Hello',
    'k3':true
};

console.log(obj['']);
console.log(obj[' ']);
console.log(obj['k3']);

// console.log(obj.'');
// FOR-IN LOOP
for(let x in aa){
    console.log(a[x]);
}