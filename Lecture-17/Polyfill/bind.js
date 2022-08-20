let newCar = {
    name: 'BMW',
    price: '1Cr',
    color: 'red'
 }

function Car(model,seats,type){
    console.log(this);
    console.log(`Name: ${this.name}, Price : ${this.price}, Color: ${this.color}`);
    console.log(`Model: ${model}, Seats: ${seats}, Type: ${type}`)
}


Function.prototype.mybind = function(...args){
    let fun = this; // this ek function hai jispar bind function call hua hai
    
    return function(...args1){
        fun.apply(args[0],[...args.splice(1),...args1]);
    }
}
let fun = Car.mybind(newCar,"2014",2);
fun("Racing");



/*
let newCar = {
   name: 'BMW',
   price: '1Cr'
}

let bmw = Car.bind(newCar,"2014");
bmw(2);
*/