import makeAddCart from './add-cart';
import cartsService from '../use-cases';
import { CartInfo, ServiceResponse, ServiceData } from '../use-cases';
import makeGetCart from './get-cart';
import makeGetCartByUser from './get-cart-by-user';
import makeAddCartItem from './add-cart-item';

const postCart = makeAddCart({ cartsService, CartInfo, ServiceResponse, ServiceData });
const getCart = makeGetCart({ cartsService, CartInfo, ServiceResponse, ServiceData });
const getCartByUser = makeGetCartByUser({ cartsService, CartInfo, ServiceResponse, ServiceData });
const postCartItem = makeAddCartItem({ cartsService, CartInfo, ServiceResponse, ServiceData });

const cartController = Object.freeze({
	post: postCart,
	get: getCart,
	getByUser: getCartByUser,
	addItem: postCartItem
});

export default cartController;
