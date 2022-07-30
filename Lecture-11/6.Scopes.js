/*
function fun(){
    var x = 10;
    console.log(x);
    if(true){
        var x = 20;
        console.log(x);
    }    
    console.log(x);
}

fun();
*/

/*
function fun(){
    var x = 10;
    console.log(x);
    if(true){
        console.log(x);
        var x = 20;
    }    
    console.log(x);
}

fun();
*/

// BLOCK SCOPE
/*
function fun(){
    let x = 10;
    console.log(x);
    if(true){
        let x = 20;
        console.log(x);
    }    
    console.log(x);
}

fun();
*/

function fun(){
    let x = 10;
    console.log(x);
    if(true){
        console.log(x);
        console.log("Inside if!");
        let x = 20;
    }    
    console.log(x);
}

fun();