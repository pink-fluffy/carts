import enums from '../enums';
export default function makeAddCart({ cartsService, CartInfo, ServiceResponse, ServiceData }) {
	return async function addCart(req) {
		const userId = req.params.userId;
		const response = new ServiceResponse();
		try {
			if (!userId) throw { status: enums.ERRORS.INVALID_INPUT.status, message: enums.ERRORS.INVALID_INPUT.message };
			const created = await add(userId);
			const resBody = new ServiceData(created.data, enums.REASON_PHRASES.CREATED);
			const status = enums.STATUS_CODES.CREATED;
			response.body = resBody;
			response.status = status;
			response.last_modified = created.last_modified;
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
	async function add(userId) {
		const cart = await cartsService.add(userId);
		const data = new CartInfo(cart);

		const last_modified = new Date(cart.updated_at).toUTCString();
		return { data, last_modified };
	}
}
