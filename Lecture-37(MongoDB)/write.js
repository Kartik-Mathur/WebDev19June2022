const { MongoClient } = require('mongodb');
const DB_URL = 'mongodb://localhost:27017';

const client = new MongoClient(DB_URL);
async function main() {
    
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('myDB');
    const collection = db.collection('students');

    let data = await collection.insertMany([
        {name:'Arvind',hobby:'Coding',age: 23},
        {name:'Rishabh',hobby:'Driving',age: 20},
        {name:'Ritik',hobby:'Netflix',age: 2221},
        {name:'Sid',hobby:'PC Gaming',age: 24}
    ]);

    console.log(data);
    return 'done.';
}

main()
    .then(()=>console.log('done'))
    .catch((err)=>console.log(err))
    .finally(()=> client.close())