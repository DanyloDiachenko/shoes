import { create } from 'zustand';
import { TCartItem } from '@/types/cart';
import { cartItems } from '../data/cart-items';

export type CartDiscount = 'full_disc' | 'half_disc' | '';
export type PromoCodes = 'ImBroke_100' | 'ILoveYou_50' | '';
type CartState = {
	cart: TCartItem[];
	cartDiscount: CartDiscount;
	shippingLimit: number;
	showWarning: boolean;
};
type CartActions = {
	addCartItem: (item: TCartItem) => void;
	removeCartItem: (itemItemId: number) => void;
	incrementCartItem: (itemItemId: number) => void;
	decrementCartItem: (itemItemId: number) => void;
	setCartDiscount: (text: PromoCodes) => void;
	setCartWarning: (status: boolean) => void;
	getSubtotal: () => number;
	getTotalQty: () => number;
	getTotalDiscount: () => number;
	getDeliveryFees: () => number;
	clearCart: () => void;
};

type InitCartStore = CartState & CartActions;

export const useCartStore = create<InitCartStore>((set, get) => ({
	cart: cartItems,
	cartDiscount: '',
	shippingLimit: 300,
	showWarning: false,
	addCartItem: payload => {
		const exItem = get().cart.find(item => item.id === payload.id);
		if (exItem) {
			const newItem = { ...exItem, qty: payload.qty };
			set(state => ({
				cart: state.cart.map(item => (item.id !== exItem.id ? item : newItem))
			}));
		} else {
			set(state => ({ cart: [...state.cart, payload] }));
		}
	},
	removeCartItem: itemId => {
		const exItem = get().cart.find(item => item.id === itemId);
		if (exItem) {
			set(state => ({ cart: state.cart.filter(item => item.id !== exItem.id) }));
		}
	},
	incrementCartItem: itemId => {
		const exItem = get().cart.find(item => item.id === itemId);
		if (exItem) {
			const newQty = exItem.qty === exItem.availableQty ? exItem.qty : exItem.qty + 1;
			const newItem = { ...exItem, qty: newQty };
			set(state => ({
				cart: state.cart.map(item => (item.id !== exItem.id ? item : newItem))
			}));
		}
	},
	decrementCartItem: itemId => {
		const exItem = get().cart.find(item => item.id === itemId);
		if (exItem && exItem.qty > 1) {
			const newItem = { ...exItem, qty: exItem.qty - 1 };
			set(state => ({
				cart: state.cart.map(item => (item.id !== exItem.id ? item : newItem))
			}));
		} else if (exItem && exItem.qty === 1) {
			get().removeCartItem(exItem.id);
		}
	},
	setCartDiscount: code => {
		if (code === 'ImBroke_100') set({ cartDiscount: 'full_disc' });
		if (code === 'ILoveYou_50') set({ cartDiscount: 'half_disc' });
		if (code === '') set({ cartDiscount: '' });
	},
	setCartWarning: status => set({ showWarning: status }),
	getSubtotal: () => {
		return get().cart.reduce((acc, curItem) => {
			let total = 0;
			const originalPrice = curItem.price / (1 - curItem.discountPercentage);
			total += originalPrice * curItem.qty;
			return acc + total;
		}, 0);
	},
	getTotalDiscount: () => {
		return get().cart.reduce((acc, curItem) => {
			let discount = 0;
			const originalPrice = curItem.price / (1 - curItem.discountPercentage);
			discount += originalPrice * curItem.discountPercentage * curItem.qty;
			return acc + discount;
		}, 0);
	},
	getTotalQty: () => {
		return get().cart.reduce((acc, curItem) => acc + curItem.qty, 0);
	},
	getDeliveryFees: () => {
		let hasDeliveryFees = get().getSubtotal() < get().shippingLimit;
		let deliveryFees = 0;

		if (hasDeliveryFees) deliveryFees = 50;
		if (hasDeliveryFees && get().cartDiscount === 'half_disc') deliveryFees = 25;
		if (!hasDeliveryFees || get().cartDiscount === 'full_disc') deliveryFees = 0;

		return deliveryFees;
	},
	clearCart: () => set({ cart: [] })
}));
