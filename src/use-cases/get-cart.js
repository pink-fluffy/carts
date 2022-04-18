/**
 *
 * @param {*} cartsDb
 * @returns
 */
export default function makeGetCart(cartsDb) {
	return async function getCart(id) {
		return cartsDb.findById(id);
	};
}
