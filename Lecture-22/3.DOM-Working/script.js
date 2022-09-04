let input = document.querySelector('#inp');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');

btn.addEventListener('click',(ev)=>{
    // console.log(typeof input.value)
    let n = parseInt(input.value);
    for(let i = 1 ; i <= n ; i++){
        list.innerHTML += `<li>${i}</li>`
    }
    // console.log(n);
    // console.log(typeof n);
})