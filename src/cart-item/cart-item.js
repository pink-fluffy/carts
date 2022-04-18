export default function buildMakeCartItem(validate) {
	return function makeCartItem({ product_id, quantity } = {}) {
		validate({ product_id, quantity });

		return Object.freeze({
			getProductId: () => product_id,
			getQuantity: () => quantity
		});
	};
}
