/*
function Car(name,price,model){
    console.log(this);
    this.name = name;
    this.price = price;
    this.model = model;
    console.log(this);
}
let obj = {
    name: 'Audi',
    price: 200,
    model: 2019
};

let newCar = Car.bind(obj,'BMW',150);
newCar(2020);
*/
// Car('BMW',100,2020);
// console.log(name);
// console.log(this.name);
let obj = {
    name: 'Audi',
    price: 200,
    model: 2019
};

Function.prototype.myBind = function(...args){
    let Car = this;
    return function(...args1){
        Car.call(...args,...args1);
    }
}

function Car(name,price,model,color,seats){
    this.name = name;
    this.price = price;
    this.color = color;
    this.model = model;
    this.seats = seats;
    console.log('Name: ' + this.name);
    console.log('Price: ' + this.price);
    console.log('model: ' + this.model);
    console.log('color: ' + this.color);
    console.log('seats: ' + this.seats);
}

// Function.prototype.myBind = function(obj,name,price){
//     let Car = this;
//     return function(model,color){
//         Car.call(obj,name,price,model,color);
//     }
// }



let newCar = Car.myBind(obj,'BMW',150,2020,'red',4);
newCar(); // this->obj