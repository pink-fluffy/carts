import express from 'express';
var debug = require('debug')('carts:server');
import logger from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import makeExpressCallback from './express';
import cartController from './controllers';
import http from 'http';

dotenv.config();

const apiRoot = process.env.CARTS_API_ROOT;
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
	res.send('Unicorn Store Carts Microservice REST API');
});
app.post(`/${apiRoot}/add/:userId`, makeExpressCallback(cartController.post));
app.get(`/${apiRoot}/get/:cartId`, makeExpressCallback(cartController.get));
app.get(`/${apiRoot}/user/:userId`, makeExpressCallback(cartController.getByUser));
app.put(`/${apiRoot}/:userId/addItem`, makeExpressCallback(cartController.addItem));

// Get port from environment and store in Express.
var port = process.env.CARTS_PORT;
app.set('port', port);

// Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, '0.0.0.0');
server.on('listening', onListening);

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	debug('Listening on ' + bind);
}
