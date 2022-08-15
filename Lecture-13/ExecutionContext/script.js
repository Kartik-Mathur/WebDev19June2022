let y = 10;
function GenFun(){
    var a = 10;
    function Fun(){
        return a**2;
    }
    return Fun;
}

let x = GenFun();
console.log(x());


