import { configureStore } from "@reduxjs/toolkit";
import { openedPopupSlice } from "./slices/openedPopup";
import { productsSlice } from "./slices/products";
import { toogleLocalStorageSlice } from "./slices/toogleLocalStorage";
import { productToCartSlice } from "./slices/productToCart/productToCart.slice";

export const store = configureStore({
    reducer: {
        openedPopup: openedPopupSlice.reducer,
        products: productsSlice.reducer,
        toogleLocalStorage: toogleLocalStorageSlice.reducer,
        productToCart: productToCartSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
