let screen = document.querySelector('#screen');
let btns = document.querySelectorAll('button');

for(let b of btns){
    b.addEventListener('click',(ev)=>{
        // console.log(ev.target.innerText);
        if(ev.target.innerText === 'C'){
            screen.value = '';
        }
        else if(ev.target.innerText === '='){
            try{
                screen.value = eval(screen.value);
            }
            catch(e){
                screen.value = 'Invalid Operation';
            }
        }
        else screen.value += ev.target.innerText;

    })
}

