const connectToDatabase = require('../models/db');
const jwt = require('jsonwebtoken');

module.exports.login = async (req, res) => {
    const { username, password_hash } = req.body;
    console.log(username);
    try {
        const client = await connectToDatabase();
        const database = client.db('Login_db');
        const collection = database.collection('logins');

        // Buscar usuario en la base de datos
        const user = await collection.findOne({ username: username, password_hash: password_hash });
        //console.log(user);
        if (user) {
            const token = jwt.sign({ username }, "Stack", {
                expiresIn: '3m'
            });
            console.log('correct user');
            //console.log({token});
            res.send({ token });
            
        } else {
            console.log('wrong user');
            res.send({ message: 'wrong user' });
        }

        await client.close();
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
};


// const connection = require('../models/db');
// const jwt = require('jsonwebtoken');

// module.exports.login = (req, res) => {
//     const {username,password} = req.body;
    
//     const consult = 'SELECT * FROM login WHERE username = ? AND password = ?';

//     try {
//         connection.query(consult, [username, password], (err, result)=>{
//             if(err){
//                 res.send(err);
//             }

//             if(result.length > 0){
//                 const token = jwt.sign({username}, "Stack", {
//                     expiresIn: '59m'
//                 });
//                 res.send({token});

//                 //console.log(result);
//                 //res.send(result);
//             } else {
//               console.log('wrong user')
//               res.send({message: 'wrong user'})
//             }
//         })
//     } catch (e) {

//     } 
// }