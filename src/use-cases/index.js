import makeAddCart from './add-cart';
import CartInfo from './cart-info';
import { ServiceResponse, ServiceData } from './service-response';
import cartsDb from '../data-access';
import makeGetCart from './get-cart';
import makeGetCartByUser from './get-cart-by-user';

const addCart = makeAddCart(cartsDb);
const getCart = makeGetCart(cartsDb);
const getCartByUser = makeGetCartByUser(cartsDb);

const cartService = Object.freeze({
	add: addCart,
	get: getCart,
	getByUser: getCartByUser
});
export default cartService;
export { ServiceResponse, ServiceData, CartInfo };