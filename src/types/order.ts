import { CartDiscount } from '../store';
import { TCartItem } from './cart';

export type TOrder = {
	id: string;
	cart: TCartItem[];
	subtotal: number;
	totalDiscount: number;
	cartDiscount: CartDiscount;
	deliveryFees: number;
	totalDue: number;
	date: string;
};
