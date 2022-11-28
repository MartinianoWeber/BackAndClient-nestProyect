import { Schema } from 'mongoose';
// Esquema de la base de datos

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  imageURL: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
