const express = require('express')
const app = express()
const routes = require('./api/endPoints')
const cors = require('cors');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})