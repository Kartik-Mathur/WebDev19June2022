let data =
  '{"ticker":{"base":"BTC","target":"USD","price":"21357.89467993","volume":"14352.93869727","change":"-29.83670711"},"timestamp":1662798243,"success":true,"error":""}';

let res = JSON.parse(data);
console.log(data);
console.log(res);

let jsdata = [
  {
    firstName: "Dhruv",
    lastName: "Sehgal",
    age: 24,
    hobbies: {
      ludo: true,
      cricket: false,
    },
    equipments: ["laptop", "onePlus"],
  },
  {
    firstName: "Dhruv",
    lastName: "Sehgal",
    age: 24,
    hobbies: {
      ludo: true,
      cricket: false,
    },
    equipments: ["laptop", "onePlus"],
  },
];

res = JSON.stringify(jsdata);
console.log(res);
