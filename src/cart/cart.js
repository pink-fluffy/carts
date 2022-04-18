export default function buildMakeCart(validate) {
	return function makeCart({ userId, items = [], created_at = Date.now(), updated_at = Date.now() } = {}) {
		validate({ userId });

		return Object.freeze({
			getUserId: () => userId,
			getItems: () => items,
			getCreatedAt: () => created_at,
			getUpdtatedAt: () => updated_at
		});
	};
}
