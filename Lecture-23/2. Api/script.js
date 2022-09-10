////////////////////// XMLHttpRequest ///////////////////
/*
let res = new XMLHttpRequest();

// onload function will run agar res sahi se aa gya
res.onload = function(){
    console.log(this.responseText);
    console.log(JSON.parse(this.responseText));
    let data = JSON.parse(this.responseText).data;
    // data is an array
    for(let fact of data){
        console.log(fact);
    }
    // console.log(data);
}

// onerror function will run agar res sahi se aa gya
res.onerror = function(){
    console.log(this);
}

// res.open("GET",'https://api.cryptonator.com/api/ticker/btc-usd');
res.open("GET",'https://meowfacts.herokuapp.com/?count=3');
res.send();
*/

////////////////////////// fetch //////////////////////////////////
// fetch('https://meowfacts.herokuapp.com/')
// .then((res)=>{
//     return res.json();
// })
// .then((res)=>{
//     let data = res.data;
//     for(let fact of data){
//         console.log(fact);
//     }
// })

///////////////////////// axios ///////////////////////////////////
let factsList = document.querySelector("#facts");
axios.get("https://meowfacts.herokuapp.com/?count=3").then((res) => {
//   console.log(res);
  // console.log(res.data);
  // console.log(res.data.data);
  let data = res.data.data;
  for (let fact of data) {
    let li = document.createElement("li");
    li.innerText = fact;
    factsList.appendChild(li);
    console.log(fact);
  }
});
