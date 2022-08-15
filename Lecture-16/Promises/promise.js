// Promise is when something is "thenable", it uses a principle of duck typing
function kalSeNahiPeeunga(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            // resolve(['ab saste nashe band',10]);
            resolve('ab saste nashe band');
            reject('Control Control Control');
        },3000);
    });
}

let p = kalSeNahiPeeunga();
p.then(
    function(b){
        // agar promise resolve(fullfill) hua toh yeh chala do
        console.log(b);
        // console.log(b[0]);
        // console.log(b[1]);
        // console.log(x);
    },
    function(c){
        // agar promise reject hua toh yeh chala do
        console.log(c);
    }
);

// console.log(p instanceof Promise);
