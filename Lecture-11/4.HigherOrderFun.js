function outerFun(){
    console.log("Inside OuterFun");
    function innerFun(){
        console.log("Inside anotherFun");
    }
    return innerFun;
}

let y = outerFun();
console.log(y());
console.log(y());