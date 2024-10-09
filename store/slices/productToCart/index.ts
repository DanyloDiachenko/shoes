import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductToCartState } from "./productToCart.interface";

const initialState: ProductToCartState = {
    quantity: 1,
    size: null,
};

export const productToCartSlice = createSlice({
    name: "productToCart",
    initialState,
    reducers: {
        setProductToCart: (
            state,
            action: PayloadAction<ProductToCartState>
        ) => {
            state.quantity = action.payload.quantity;
            state.size = action.payload.size;
        },
    },
});

export const { setProductToCart } = productToCartSlice.actions;
