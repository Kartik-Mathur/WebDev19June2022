console.log('requiring lib1');

let a = 10;
function add (a,b){
    return a + b;
}

function subtract(a,b){
    return a-b;
}

let marks;

function marksUpdate(){
    marks = 100;
}
marksUpdate();

console.log("Marks: " +marks);

module.exports.a = a;
module.exports.add = add;
module.exports.subtract = subtract;

// console.log(module.exports);