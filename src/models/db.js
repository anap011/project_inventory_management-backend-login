require('dotenv').config(); 
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_DB_URI;

async function connectToDatabase() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connected to database");
        return client;
    } catch (error) {
        console.error(error);
        await client.close();
    }
}

module.exports = connectToDatabase;
