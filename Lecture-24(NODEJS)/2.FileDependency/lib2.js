let lib1 = require('./lib1');
console.log('running lib2');

function dog(){
    console.log('dog says wuff!');
}

let food = 'parle-G';

module.exports.dog = dog;
module.exports.food = food;
module.exports.lib1 = lib1;
// module.exports = {
//     dog,
//     food,
//     lib1
// }