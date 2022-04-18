import enums from '../enums';
export default function makeAddCartItem({ cartsService, CartInfo, ServiceResponse, ServiceData }) {
	return async function addCartItem(req) {
		const userId = req.params.userId;
		const { product_id, quantity } = req.body;
		if (!product_id || !quantity) {
			throw { status: enums.ERRORS.INVALID_INPUT.status, message: enums.ERRORS.INVALID_INPUT.message };
		}
		const response = new ServiceResponse();
		try {
			if (!userId) throw { status: enums.ERRORS.INVALID_INPUT.status, message: enums.ERRORS.INVALID_INPUT.message };
			const createdCartItem = await add(userId, product_id, quantity);
			const resBody = new ServiceData(createdCartItem.data, enums.REASON_PHRASES.CREATED);
			const status = enums.STATUS_CODES.CREATED;
			response.body = resBody;
			response.status = status;
			response.last_modified = createdCartItem.last_modified;
		} catch (err) {
			console.log(err);
			const resBody = new ServiceData(null, err.message);
			response.body = resBody;
			response.status = err.status;
		}
		return response;
	};

	/**
	 *
	 * @param {*} userId
	 * @returns
	 */
	async function add(userId, product_id, quantity) {
		const cartItem = {
			product_id,
			quantity
		};
		const cart = await cartsService.addItem(userId, cartItem);
		const data = new CartInfo(cart);

		const last_modified = new Date(cart.updated_at).toUTCString();
		return { data, last_modified };
	}
}
