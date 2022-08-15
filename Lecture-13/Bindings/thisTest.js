function solve() {
    console.log(this);
}

let arr = [1,2,3,4,"Hello"];

let movie = {
    name:"3-Idiots",
    actor: ["Amir khan","kareena kapoor"]
};

solve();
solve.call(arr);
solve.call(movie);


let obj = {
    a: 'hello',
    fun: this
};

console.log(obj.fun); // Window

let obj1 = {
    a: 'world',
    b: function(){
        console.log(this);
    }
};

obj1.b(); // obj1