import enums from '../enums';
/**
 *
 * @param {*} cartsDb
 * @returns
 */
export default function makeGetCartByUser(cartsDb) {
	return async function getCartByUser(userId) {
		return cartsDb.findByUser(userId);
	};
}
