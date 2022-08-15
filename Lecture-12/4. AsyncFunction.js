// console.log(new Date().getTime());
// current_time = t
// future_time = t + 1000
// future_time = current_time + 1000
// SYNCHRONOUS CODE
/*
function waitASec(){
    let current_time = new Date().getTime();
    while(new Date().getTime() < current_time + 1000); 
}

function waitNSec(n){
    for(let i = 0 ; i < n ; i++) waitASec();
    console.log('Video Loaded!');
}

waitNSec(5);

let a = 10,b = 20;
console.log("Starting computations");
console.log(a*b);
*/
// !SYNCHRONOUS CODE

// ASYNCHRONOUS CODE
setTimeout(function () {
  console.log("Video Loaded!");
}, 5000);

let a = 10,
  b = 20;
console.log("Starting computations");
console.log(a * b);

// SETINTERVAL
/*
let weatherID = setInterval(function () {
  console.log("Weather Data Updated");
}, 1000);

setTimeout(function () {
  clearInterval(weatherID);
}, 6000);
*/

let weatherID = setInterval(
  function () {
    console.log("Updating Weather");
  },
  1000,
  setTimeout(function () {
    clearInterval(weatherID);
  }, 5000)
);
