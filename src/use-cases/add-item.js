import makeCartItem from '../cart-item';
import enums from '../enums';
/**
 *
 * @param {*} cartsDb
 * @returns
 */
export default function makeAddItem(cartsDb) {
	/**
	 * Check for duplicate cart and invoke cartsDb insert method
	 */
	return async function addItem(userId, cartItemInfo) {
		const cartItem = makeCartItem(cartItemInfo);
		const exists = await cartsDb.findByUser(userId);
		if (!exists) {
			throw { status: enums.STATUS_CODES.NOT_FOUND, message: enums.REASON_PHRASES.NOT_FOUND };
		}

		return cartsDb.addItem(userId, {
			product_id: cartItem.getProductId(),
			quantity: cartItem.getQuantity()
		});
	};
}
