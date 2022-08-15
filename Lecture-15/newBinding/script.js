function createCar(name,price,model){
    this.name = name;
    this.price = price;
    this.model = model;
    this.sayMyName = function(){
        console.log(`My name: ${this.name}`)
    }
    this.setPrice = function(price){
        this.price = price;
    }
    this.getPrice = function(){
        return this.price;
    }

}

createCar.prototype.NumberOfTyres = function(){
    console.log('Tyres ka count: 4 hi hota hai');
}

let x = new createCar('BMW',10000000,2020);
let y = new createCar('Maruti',100000,2018);
// console.log(x);
x.setPrice(1000);
// console.log(x.__proto__ == createCar.prototype);
// x.price = 20000000;
console.log(`x ka price: ${x.getPrice()}`);
console.log(x);
console.log(y);
console.log(x.sayMyName());
console.log(x.NumberOfTyres());

