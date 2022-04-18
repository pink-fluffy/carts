import mongoose from 'mongoose';
import enums from '../enums';
import types from './cart-types';

const schema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true
		},
		items: [types.CartItem],
		created_at: { type: Date, default: Date.now() },
		updated_at: { type: Date, default: Date.now() }
	},
	{ toJSON: { getters: true } }
);

export default schema;
