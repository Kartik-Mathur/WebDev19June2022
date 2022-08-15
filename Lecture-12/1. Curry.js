function add(val){
    if(typeof val == 'undefined') return 0;

    function addVal(nextVal){
        if(typeof nextVal == 'undefined') return val;
        val+=nextVal;
        return addVal;
    }

    return addVal;
}

console.log(add(1)());
console.log(add(1)(2)());
console.log(add(1)(2)(3)());
console.log(add(1)(2)(3)(4)());
console.log(add(1)(2)(3)(4)(5)());