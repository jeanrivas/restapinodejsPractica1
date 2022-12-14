const express = require('express');
const cors = require('cors');

class Server {
	constructor() {
		this.app = express();
		this.pathUser = '/api/users';
		this.middlewares();

		this.routes();
	}

	middlewares() {
		this.app.use(express.static('public'));
		this.app.use(cors());
		this.app.use(express.json());
	}

	routes() {
		this.app.use(this.pathUser, require('../routes/user.routes'));
	}

	listen() {
		this.app.listen(process.env.PORT, () => {
			console.log(`	Server running in port ${process.env.PORT}`);
		});
	}
}

module.exports = Server;
