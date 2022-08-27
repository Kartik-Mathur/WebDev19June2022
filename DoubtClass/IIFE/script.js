// Immediately Invoked Function Expression
let details = (function(g){
    let marks = 100;
    let name = 'Ritik';
    let age = 21;
    let gender = g;
    // console.log(name + ', has marks: ' + marks
    // +', age: '+age + ', Gender: '+gender);
    let obj = {
        name: name, age: age, 
        gender: gender, marks:marks
    }
    return obj;
})('F');

// student('F')
// console.log(student.toString());
console.log(details);


function mathOperations(){
    console.log('Sqrt: ' + Math.sqrt(16));
    console.log('Sin(45): ' + Math.sin(45));
    console.log('Random: ' + Math.random()*255);
    console.log('tan: ' + Math.tan(90));
}

mathOperations();

(function(c,M){
    c('Sqrt: ' + M.sqrt(16));
    c('Sin(45): ' + M.sin(45));
    c('Random: ' + M.random()*255);
    c('tan: ' + M.tan(90));
})(console.log,Math);