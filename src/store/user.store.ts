import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TFavoriteItem } from '@/types/favorite';
import { THistoryItem } from '@/types/history';
import { TOrder } from '@/types/order';

type UserState = {
	favoriteList: TFavoriteItem[];
	historyList: THistoryItem[];
	orderList: TOrder[];
};

type UserActions = {
	toggleItemFavorite: (payload: TFavoriteItem) => void;
	clearFavorites: () => void;
	addItemHistory: (item: THistoryItem) => void;
	removeItemHistory: (id: number) => void;
	clearHistory: () => void;
	addOrder: (order: TOrder) => void;
	deleteOrder: (orderId: string) => void;
	clearOrders: () => void;
};

type InitUserStore = UserState & UserActions;

const key = 'user_store';

export const useUserStore = create<InitUserStore>()(
	persist(
		(set, get) => ({
			favoriteList: [],
			historyList: [],
			orderList: [],
			toggleItemFavorite: payload => {
				const exItem = get().favoriteList.find(item => item.id === payload.id);
				if (exItem) {
					set(state => ({
						favoriteList: state.favoriteList.filter(item => item.id !== exItem.id)
					}));
				} else {
					set(state => ({ favoriteList: [...state.favoriteList, payload] }));
				}
			},
			clearFavorites: () => set({ favoriteList: [] }),

			addItemHistory: item => {
				const exItem = get().historyList.find(item => item.id === item.id);
				if (exItem) return;
				else set(state => ({ historyList: [...state.historyList, item] }));
			},
			removeItemHistory: itemId => {
				set(state => ({
					historyList: state.historyList.filter(item => item.id !== itemId)
				}));
			},
			clearHistory: () => set({ historyList: [] }),

			addOrder: payload => {
				set(state => ({ orderList: [...state.orderList, payload] }));
			},
			deleteOrder: orderId => {
				const exOrder = get().orderList.find(order => order.id === orderId);
				if (exOrder) {
					set(state => ({
						orderList: state.orderList.filter(order => order.id !== exOrder.id)
					}));
				}
			},
			clearOrders: () => set({ orderList: [] })
		}),
		{ name: key }
	)
);
