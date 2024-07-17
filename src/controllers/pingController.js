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
