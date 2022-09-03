let grandfather = document.querySelector('#grandfather');
let father = document.querySelector('#father');
let child = document.querySelector('#child');

grandfather.addEventListener('click',(ev)=>{
    console.log('grandfather');
    ev.stopPropagation();
},true);// by default false hota hai toh bubbling ke time par events run honge

father.addEventListener('click',(ev)=>{
    console.log('father');
    ev.stopPropagation();
},true);

child.addEventListener('click',(ev)=>{
    console.log('child');
    ev.stopPropagation();
},true);
