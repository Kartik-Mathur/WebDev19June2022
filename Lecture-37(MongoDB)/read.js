const { MongoClient } = require('mongodb');
const DB_URL = 'mongodb://localhost:27017';

const client = new MongoClient(DB_URL);
async function main() {
    
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('myDB');
    const collection = db.collection('students');
    const data = await collection.find({}).toArray();
    console.log(data);
    return 'done.';
}

main()
    .then(()=>console.log('done'))
    .catch((err)=>console.log(err))