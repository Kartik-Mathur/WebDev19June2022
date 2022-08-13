function fun(){
    console.log('Bhot saara hai fun');
}

fun();
fun.a = 10;
console.log(fun);
fun();
console.log(fun.a);
console.log(typeof fun);