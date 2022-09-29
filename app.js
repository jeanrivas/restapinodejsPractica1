// const express = require('express');
require('dotenv').config();

const Server = require('./models/server');
const server = new Server();

server.listen();

// const app = express();

// app.get('/', (req, res) => {
// 	res.send('HELLO WORLD');
// });

// app.listen(process.env.PORT, () => {
// 	console.log(`	Server running in port ${process.env.PORT}`);
// });
