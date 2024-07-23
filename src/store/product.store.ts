import { TProduct, TProductCategory } from '@/types/product';
import { create } from 'zustand';
import { products } from '../data/products';

type ProductState = {
	products: TProduct[];
	curImageIdx: number;
	selectedCategory: TProductCategory;
};

type ProductActions = {
	curImageHandler: (payload: number | ((s: number) => number)) => void;
	setSelectedCategory: (payload: TProductCategory) => void;
};

type InitProductStore = ProductState & ProductActions;

export const useProductStore = create<InitProductStore>((set, get) => ({
	products: products,
	curImageIdx: 0,
	selectedCategory: 'sports',
	curImageHandler: payload =>
		set({
			curImageIdx: typeof payload === 'number' ? payload : payload(get().curImageIdx)
		}),
	setSelectedCategory: payload => set({ selectedCategory: payload })
}));
