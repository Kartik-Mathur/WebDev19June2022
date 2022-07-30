function funGen(fun){
    // this will print the statement telling us this is JS function
    console.log(fun);

    // To print function as a string
    console.log(fun.toString());
    console.log(""+fun);

    console.log("Inside function generator " + fun());

}

function anotherFun(){
    console.log("Inside another fun");
}

// We have passed one function as an argument
funGen(anotherFun);

// funGen(10);
// funGen("Hello World!");
// anotherFun();

