let btn = document.querySelector('button');
let one = document.querySelector('#one');

function scream(){
    console.log('SCreeeaamm!!!!');
}

function shout(){
    console.log('Shouuttt!');
}
/*
btn.onclick = scream;
btn.onclick = shout;

btn.onclick = ()=>{
    scream();
    shout();
}
*/

btn.addEventListener('click',scream);
btn.addEventListener('click',shout);

function clickOnce(){
    console.log('Clicked!');
    this.classList.add('disable');
    one.removeEventListener('click',clickOnce);
}

one.addEventListener('click',clickOnce);

// one.addEventListener('click',function(event){
//     console.log(this);
//     // this.innerText = '2';
//     console.log(event);
// });
