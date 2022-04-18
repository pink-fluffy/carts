import enums from '../enums';
export default function makeDeleteCartItem({ cartsService, CartInfo, ServiceResponse, ServiceData }) {
	return async function deleteCartItem(req) {
		const userId = req.params.userId;
		const product_id = req.params.product_id;
		if (!product_id || !userId) {
			throw { status: enums.ERRORS.INVALID_INPUT.status, message: enums.ERRORS.INVALID_INPUT.message };
		}
		const response = new ServiceResponse();
		try {
			const deletedCartItem = await deleteItem(userId, product_id);
			const resBody = new ServiceData(deletedCartItem.data, enums.REASON_PHRASES.CREATED);
			const status = enums.STATUS_CODES.CREATED;
			response.body = resBody;
			response.status = status;
			response.last_modified = deletedCartItem.last_modified;
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
	async function deleteItem(userId, product_id) {
		const cart = await cartsService.deleteItem(userId, product_id);
		const data = new CartInfo(cart);

		const last_modified = new Date(cart.updated_at).toUTCString();
		return { data, last_modified };
	}
}
