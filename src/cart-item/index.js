import buildMakeCartItem from './cart-item';
import validator from './validator';

const validateCartItem = validator.validateCartItem;
const makeCartItem = buildMakeCartItem(validateCartItem);

export default makeCartItem;
