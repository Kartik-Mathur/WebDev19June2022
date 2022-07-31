let o = {
    a: 'Hello'
};

o.b = 'World';
o.o = o;
console.log(o);
console.log(o.o);
console.log(o.o.o);
// console.log(o.o.o.o.o.o.o == o);
// console.log(o.o.o.o.o.o.o.o.o.o.o.o.o == o);
// console.log(o);