import buildMakeCart from './cart';
import validator from './validator';

const validateCart = validator.validateCart;
const makeCart = buildMakeCart(validateCart);

export default makeCart;
