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
		for (const item in this.items) {
			if (this.items[item].product_id === cartItem.product_id) {
				this.items[item].quantity = cartItem.quantity;
				this.save();
				return this;
			}
		}
		// this.items.some((item) => {
		// 	item.product_id === cartItem.product_id;
		// 	this.items.remove(item);
		// });
		this.items.push(cartItem);
		this.save();
		return this;
	}

	async deleteItem(product_id) {
		// this.items.some((item) => {
		// 	item.product_id === product_id;
		// 	this.items.remove(item);
		// });
		this.items = this.items.filter((item) => item.product_id !== product_id);
		this.save();
		return this;
	}
}

export default CartDAO;
