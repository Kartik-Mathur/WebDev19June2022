console.log(document);

let elements = document.getElementsByTagName('li');
console.log(elements);

for(let l of elements){
    // console.log(l);
    l.style.fontSize = '24px';
    l.style.color = 'blue';
}

for(let i = 0 ; i < elements.length ;i++){
    l = elements[i];
    l.style.fontSize = '24px';
    l.style.color = 'green';
}

let flag = 1;
const h1 = document.querySelector('h1');
setInterval(()=>{

    // if(flag == 1) h1.style.color = 'orange', h1.style.border='10px solid black',flag++;
    // else if(flag == 2) h1.style.color = 'green',h1.style.border='10px dotted black',flag++;
    // else h1.style.color = 'blue',flag = 1;

    // flag = !flag;
},1000);