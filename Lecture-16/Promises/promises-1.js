function kalSeNahiPeeunga(date){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(date == 'march')
                return resolve('ab saste nashe band');
            reject(new Error('Nahi ho paaya'));
        },3000);
    });
}

let p = kalSeNahiPeeunga('april');

p.then((v)=>{
    console.log(v);
}).catch((err)=>{
    console.log(err.message);
})

// p.then((v)=>{
//     console.log(v);
// })

// kalSeNahiPeeunga('march')
// .then((v)=>{
//     console.log(v);
//     return v + ' april';
// })
// .then((v)=>{
//     console.log(v);
// })