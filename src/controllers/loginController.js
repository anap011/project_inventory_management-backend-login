const connectToDatabase = require('../models/db');
const jwt = require('jsonwebtoken');

module.exports.login = async (req, res) => {
    const { username, password_hash } = req.body;
    console.log(username);
    try {
        const client = await connectToDatabase();
        const database = client.db('Login_db');
        const collection = database.collection('logins');

        const user = await collection.findOne({ username: username, password_hash: password_hash });
        if (user) {
            const token = jwt.sign({ username }, "Stack", {
                expiresIn: '59m'
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
