import { Document } from 'mongoose';
// indiciamos el tipado de la interfaz
export interface Product extends Document {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly imageURL: string;
  readonly createdAt: Date;
}
