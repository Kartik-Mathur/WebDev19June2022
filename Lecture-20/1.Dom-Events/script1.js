let btn = document.querySelector('#btn');
let h1 = document.querySelector('h1');
let input = document.querySelector('input');
let ul = document.querySelector('#list');
let form = document.querySelector('form');

btn.addEventListener('click',()=>{
    console.log('Shooouutttttttt!!!!');
})

btn.addEventListener('click',()=>{
    console.log('Sccrrreeaaaammmm!!!!');
})

h1.addEventListener('mouseenter',function(){
    this.classList.add('heading');
    // // console.log(this);
    // this.style.color='red';
    // this.style.textDecoration='underline';
})

h1.addEventListener('mouseleave',function(){
    this.classList.remove('heading');
    // console.log(this);
    // this.style.color='black';
    // this.style.textDecoration='';
})

const words = [
    "laptop bag",
    "kindle",
    "watch",
    "mobile phone",
    "laptop table"
];

//////////////////// KEYBOARD EVENTS
input.addEventListener('keypress',(ev)=>{
    let prevVal = ev.target.value;
    let val = prevVal + ev.key;
    console.log(val);
    
    words.map((w)=>{
        if(w.startsWith(val)){
            let li = document.createElement('li');
            li.innerText = w;
            ul.appendChild(li);
            console.log(w);
        }

    })
    // console.log('Key pressed');
    // console.log(ev);
    // console.log(ev.key);
    // if(ev.key == 'Enter'){
    //     console.log('Pressed Enter');
    // }
    // console.log(ev.target.value);
})

form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    console.log('Form Submit!');
})