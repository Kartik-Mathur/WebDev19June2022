function foo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('..executing resolve');
            resolve('Done');
        },3000);
    })
}

let p = foo();
console.log('...running .then');
p.then((v)=>{
    console.log(v);
});

/*
function foo(){
    return new Promise((resolve,reject)=>{
        console.log('..executing resolve');
        resolve('Done');
    })
}

let p = foo();
setTimeout(()=>{
    console.log('..executing then');
    p.then((v)=>{
        console.log(v);
    });
},2000);
*/