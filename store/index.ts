import { configureStore } from "@reduxjs/toolkit";
import { openedPopupSlice } from "./slices/openedPopup";
import { productsSettingsSlice } from "./slices/productsSettings";
import { toogleLocalStorageSlice } from "./slices/toogleLocalStorage";
import { productToCartSlice } from "./slices/productToCart";

export const store = configureStore({
    reducer: {
        openedPopup: openedPopupSlice.reducer,
        productsSettings: productsSettingsSlice.reducer,
        toogleLocalStorage: toogleLocalStorageSlice.reducer,
        productToCart: productToCartSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
