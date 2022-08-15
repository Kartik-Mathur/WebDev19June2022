class Vehicle{
    constructor(name,price,model){
        this.name = name;
        this.price = price;
        this.model = model;
    }
    set setPrice(price){
        this.price = price;
    }

    get getPrice(){
        return this.price;
    }

    static fun(){
        console.log('Having fun inside this function');
    }

}

class Car extends Vehicle{
    constructor(name,price,model,tyres,color){
        super(name,price,model); // Inheritance
        this.tyres = tyres;
        this.color = color;
    }

    print(){
        console.log('Name: '+this.name);
        console.log('Price: '+this.price);
        console.log('Model: '+this.model);
        console.log('Color: '+this.color);
    }
}


let Vehicle1 = new Vehicle("BMW",10000000,2020);
Vehicle1.setPrice = 50000;
console.log(Vehicle1);
console.log(Vehicle1.__proto__ == Vehicle.prototype);
console.log(Vehicle1.getPrice);

let Vehicle2 = new Vehicle('Maruti',100000,2018);
console.log(Vehicle2);
console.log(Vehicle);
console.log(Vehicle.fun());

let newCar = new Car('Audi',20202020,2020,4,'red');
console.log(newCar);
console.log(newCar.getPrice);

console.log(newCar.__proto__ == Car.prototype); // true
console.log(Car.prototype.__proto__ == Vehicle.prototype); // true
console.log(typeof Vehicle);
console.log(Vehicle);

newCar.print();