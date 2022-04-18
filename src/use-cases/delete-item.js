import makeCartItem from '../cart-item';
import enums from '../enums';
/**
 *
 * @param {*} cartsDb
 * @returns
 */
export default function makeDeleteItem(cartsDb) {
	/**
	 * Check for duplicate cart and invoke cartsDb insert method
	 */
	return async function deleteItem(userId, product_id) {
		const exists = await cartsDb.findByUser(userId);
		if (!exists) {
			throw { status: enums.STATUS_CODES.NOT_FOUND, message: enums.REASON_PHRASES.NOT_FOUND };
		}
		let hasProduct = exists.items.some((item) => item.product_id === product_id);
		if (!hasProduct) throw { status: enums.STATUS_CODES.NOT_FOUND, message: enums.REASON_PHRASES.NOT_FOUND };

		return cartsDb.deleteItem(userId, product_id);
	};
}
