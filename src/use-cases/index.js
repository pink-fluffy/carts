import makeAddCart from './add-cart';
import CartInfo from './cart-info';
import { ServiceResponse, ServiceData } from './service-response';
import cartsDb from '../data-access';
import makeGetCart from './get-cart';
import makeGetCartByUser from './get-cart-by-user';
import makeAddItem from './add-item';
import makeDeleteItem from './delete-item';

const addCart = makeAddCart(cartsDb);
const getCart = makeGetCart(cartsDb);
const getCartByUser = makeGetCartByUser(cartsDb);
const addItem = makeAddItem(cartsDb);
const deleteItem = makeDeleteItem(cartsDb);

const cartService = Object.freeze({
	add: addCart,
	get: getCart,
	getByUser: getCartByUser,
	addItem: addItem,
	deleteItem: deleteItem
});
export default cartService;
export { ServiceResponse, ServiceData, CartInfo };
