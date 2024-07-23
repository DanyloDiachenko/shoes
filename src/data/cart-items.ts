import { TCartItem } from '@/types/cart';
import p1_thumb from '../../public/assets/images/p20-176.png';
import p2_thumb from '../../public/assets/images/p6-176.png';

export const cartItems: TCartItem[] = [
	{
		id: 1,
		title: 'Nike Air Max 270',
		image: { full: '', thumb: p1_thumb },
		size: 'US-9',
		color: 'White',
		qty: 2,
		price: 89.99,
		availableQty: 10,
		discountPercentage: 0.3
	},
	{
		id: 2,
		title: 'Adidas UltraBoost 21',
		image: { full: '', thumb: p2_thumb },
		size: 'US-8',
		color: 'Black',
		qty: 3,
		price: 79.99,
		availableQty: 10,
		discountPercentage: 0.2
	}
];
