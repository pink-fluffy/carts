class CartDAO {
	static async add(cart) {
		// Create cart in database
		const createdCart = await this.create({
			userId: cart.userId,
			created_at: cart.created_at,
			updated_at: cart.updated_at
		});

		return createdCart;
	}

	async addItem(cartItem) {
		this.items.push(cartItem);
		this.save();
		return this;
	}
}

export default CartDAO;
