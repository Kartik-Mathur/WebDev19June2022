let btn = document.querySelector('#btn');

function shout(){
    console.log('Shouuttttt!!!!!');
}

function scream(){
    console.log('Screeeaaammm!!!!!');
}

btn.onclick = ()=>{
    console.log('I am clicked!!!!!!!');
}

btn.onclick = shout;
btn.onclick = scream;

let x = 1;
btn.onclick = ()=>{
    if(x%2 == 0) shout();
    else scream();
    x++;
}