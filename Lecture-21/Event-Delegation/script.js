let container = document.getElementById('container');
container.addEventListener('click',(ev)=>{
    // console.log(ev);
    if(ev.target.nodeName === 'BUTTON')
        console.log(ev.target.innerText);
})

// let btns = document.querySelectorAll('button');

// for(let b of btns){
//     b.addEventListener('click',function(ev){
//         console.log(this.innerText);
//     })
// }