const express = require('express');
const path = require('path');
require('dotenv').config();

//DB Config
require('./database/config').dbConnection();

//App de EXPRESS
const app = express();

//Lectura y parseo del body
app.use(express.json());


//Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket')

//Path público
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

//Mis rutas
app.use('/api/login', require('./routes/auth'));



server.listen(process.env.PORT, (err) => {
    if(err) throw Error(err);
    console.log("Bienvenido al servidor!");
})