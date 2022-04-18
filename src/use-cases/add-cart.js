import makeCart from '../cart';
import enums from '../enums';
/**
 *
 * @param {*} cartsDb
 * @returns
 */
export default function makeAddCart(cartsDb) {
	/**
	 * Check for duplicate cart and invoke cartsDb insert method
	 */
	return async function addCart(userId) {
		const cart = makeCart({ userId });
		const exists = await cartsDb.findByUser(userId);
		if (exists) {
			return exists;
		}

		return cartsDb.insert({
			userId: cart.getUserId(),
			items: cart.getItems()
		});
	};
}
