let lib2 = require('./lib2');
console.log('running lib1');

function cat(){
    console.log('cat says meoww!');
}

let food = 'fish';

module.exports.cat = cat;
module.exports.food = food;
module.exports.lib2 = lib2;
// module.exports = {
//     cat,
//     food,
//     lib2
// }

