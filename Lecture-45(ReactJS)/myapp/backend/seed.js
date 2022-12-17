const mongoose = require('mongoose');
const Food = require('./model/db');

mongoose.connect(
    'mongodb://localhost:27017/myfoodapp-17dec'
).then(()=>{
    console.log('DB Connected');
}).catch((e)=>{
    console.log(e);
})

const DUMMY_FOOD = [
    {
        name: 'Pizza',
        price: 10,
        review: 'Very tasty pizza, must try'
    },
    {
        name: 'Moong ka halwa',
        price: 20,
        review: 'Very tasty pizza, must try'
    },
    {
        name: 'Chole Bhature',
        price: 50,
        review: 'Very tasty pizza, must try'
    }
]


const seedDataBase = async () => {
    try {
        await Food.deleteMany();
        await Food.insertMany(DUMMY_FOOD);
        console.log('DB mei data ho gaya insert');
    }
    catch(e){
        console.log(e);
    }
}

seedDataBase();