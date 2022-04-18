import mongoose from 'mongoose';
import makeCartsDb from './cart-db';
import cartModel from './product-model';

/**
 * make db
 */
export async function makeDb() {
	const URI = process.env.CARTS_MONGODB_URI;
	const options = {
		useNewUrlParser: true,
		useUnifiedTopology: true
	};

	console.log('Mongoose state: ' + mongoose.STATES[mongoose.connection.readyState]);
	if (mongoose.connection.readyState != 1) {
		try {
			mongoose.connect(URI, options);
			console.log('Mongoose state: ' + mongoose.STATES[mongoose.connection.readyState]);
			console.log('Succesfully connected to mongoose');
		} catch (err) {
			console.error('Failed to connect to mongoose :', URI);
			console.error(err);
		}
	}
}

const cartsDb = makeCartsDb({ makeDb: makeDb, cartModel: cartModel });
export default cartsDb;
