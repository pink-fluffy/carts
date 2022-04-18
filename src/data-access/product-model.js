import mongoose from 'mongoose';
import schema from './cart-schema';
import CartDAO from './cart-dao';

schema.loadClass(CartDAO);

const cartModel = mongoose.model('Cart', schema);
export default cartModel;
