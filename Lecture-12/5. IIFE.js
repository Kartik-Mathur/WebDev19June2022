function add(a,b){
    return a+b;
}

console.log(add(10,20));

(function IIFE(a,b){
    console.log('Running inside Function-IIFE '+a*b);
})(10,20);

// USECASES 
// 1. Minification
(function(l,s,si,p){
    l(`3^4: ${p(3,4)}`);
    l(`4^3: ${p(4,3)}`);
    l(`Sin(45): ${si(45)}`);
    l(`Sqrt(25): ${s(25)}`);
})(console.log,Math.sqrt,Math.sin,Math.pow);

var student = (function IIFE(name){
    let marks = 30;
    function student(){
        details();
    }

    function details(){
        console.log('Name: '+name+ ', Percentage: '+ (marks/50)*100);
    }
    return student;
})('Rishabh');   

student();
console.log(student.toString());