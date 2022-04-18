import enums from '../enums';
export default function makeGetCartByUser({ cartsService, CartInfo, ServiceResponse, ServiceData }) {
	return async function getCartByUser(req) {
		const userId = req.params.userId;
		const response = new ServiceResponse();
		try {
			if (!userId) throw { status: enums.ERRORS.INVALID_INPUT.status, message: enums.ERRORS.INVALID_INPUT.message };
			const cart = await get(userId);
			const resBody = new ServiceData(cart.data, enums.REASON_PHRASES.OK);
			const status = enums.STATUS_CODES.OK;
			response.body = resBody;
			response.status = status;
		} catch (err) {
			console.log(err);
			const resBody = new ServiceData(null, err.message);
			response.body = resBody;
			response.status = err.status;
		}
		return response;
	};

	/**
	 * Get product by id
	 */
	async function get(userId) {
		const cart = await cartsService.getByUser(userId);
		var data;
		if (!cart) {
			throw { status: enums.STATUS_CODES.NOT_FOUND, message: enums.REASON_PHRASES.NOT_FOUND };
		} else {
			data = new CartInfo(cart);
		}
		return { data };
	}
}
