let obj = {
    name: 'Dhruv',
    age: 35,
    marks: 33,
    fun:function(){
        console.log('Fun toh bhot hai');
    }
};

let family = {
    name:'Ambani',
    residence: 'Mumbai'
};

let child = Object.create(family);
console.log(child.name);
console.log(child.__proto__ == family);

obj.haveCar = ()=>{
    console.log('Legender');
    return 'Fortuner hai';
}


let obj1 = Object.create(obj);
let obj2 = Object.create(obj);
let obj3 = Object.create(obj);
let obj4 = Object.create(obj);
console.log(obj1);
console.log(obj2);
obj1.name = 'Bhanu';
obj2.name = 'Sachin';

console.log(obj1.name);
console.log(obj2.name);

/*
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);

console.log(obj4.haveCar());

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);



console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.marks);
console.log(obj1.__proto__ == obj);

console.log(obj1.hasOwnProperty('name'));
*/
