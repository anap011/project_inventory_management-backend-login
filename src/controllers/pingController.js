const connectToDatabase = require('../models/db');

module.exports.ping = async (req, res) => {
    try {
        const client = await connectToDatabase();
        const database = client.db('Login_db');
        const collection = database.collection('logins');

        const results = await collection.find({}).toArray();
        console.log(results);
        res.json(results);

        await client.close();
    } catch (e) {
        console.error('Exception caught:', e);
        res.status(500).send('Internal Server Error');
    }
};


// const connection = require('../models/db');

// module.exports.ping = (req, res) => {
//     const consult = 'SELECT * FROM login'; 

//     try {
//         connection.query(consult, (err, results) => {
//             if (err) {
//                 console.error('Error executing query:', err);
//                 return;
//             }
//             console.log(results);
//             res.json(results);
//         });
//     } catch (e) {
//         console.error('Exception caught:', e);
//     } finally {
//         connection.end();  
//     }
// };
