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

//////////////////////// Key event ////////////////////////
document.body.addEventListener('keydown',(event)=>{
    // console.log(event);
    if(event.key == 'b'){
       document.body.classList.add('blacktheme');
    }
})

document.body.addEventListener('keyup',(event)=>{
    console.log(event);
    if(event.key == 'b'){
       document.body.classList.remove('blacktheme');
    }
})

/////////////////////// MOUSE EVENT ////////////////////////
btn.addEventListener('mousedown',(ev)=>{
    if(ev.button == 0){
        console.log('Left Click!');
    }
    else if(ev.button == 1){
        console.log('Middle Click!');
    }
    else{
        console.log('Right Click!');
    }
})
/////////////////////// MOUSE EVENT ////////////////////////