require('dotenv').config(); // Cargar variables de entorno desde .env
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




// require('dotenv').config(); // Cargar variables de entorno desde .env
// const mysql = require('mysql');

// const dbConfig = {
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DB,
//     port: process.env.MYSQL_PORT
// };

// let connection;

// function handleDisconnect() {
//     connection = mysql.createConnection(dbConfig); // Recreate the connection, since the old one cannot be reused.

//     connection.connect(err => {
//         if (err) {
//             console.error('error when connecting to db:', err);
//             setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect.
//         }
//     });

//     connection.on('error', err => {
//         console.error('db error', err);
//         if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//             handleDisconnect(); // Connection to the MySQL server is usually
//         } else {
//             throw err; // server back up and running after a few seconds or minutes.
//         }
//     });
// }

// handleDisconnect();

// module.exports = connection;
