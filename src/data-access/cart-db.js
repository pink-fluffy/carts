export default function makeCartsDb({ makeDb, cartModel }) {
	return Object.freeze({
		insert,
		findByUser,
		findAll,
		findById
	});

	async function insert(cart) {
		const db = await makeDb();
		const result = await cartModel.add(cart);
		return result;
	}

	async function findById(id) {
		const db = await makeDb();
		const result = await cartModel.findById(id);
		return result;
	}

	async function findByUser(userId) {
		const db = await makeDb();
		const result = await cartModel.findOne({ userId: userId });
		return result;
	}

	async function findAll() {
		const db = await makeDb();

		const result = cartModel.find({});
		return result;
	}
}
