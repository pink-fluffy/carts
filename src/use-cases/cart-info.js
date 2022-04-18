export default class CartInfo {
	constructor(cart) {
		this.id = cart.id;
		this.userId = cart.userId;
		this.items = cart.items;
	}
}
