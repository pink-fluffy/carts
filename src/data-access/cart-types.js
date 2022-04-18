const CartItem = {
	product_id: { type: String, required: true },
	quantity: { type: Number, min: 1 }
};

export default { CartItem };
