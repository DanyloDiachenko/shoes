import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductToCartState } from "./productToCart.interface";

const initialState: IProductToCartState = {
    quantity: 1,
    sizeId: null,
};

export const productToCartSlice = createSlice({
    name: "productToCart",
    initialState,
    reducers: {
        setProductToCart: (
            state,
            action: PayloadAction<IProductToCartState>
        ) => {
            state.quantity = action.payload.quantity;
            state.sizeId = action.payload.sizeId;
        },
    },
});

export const { setProductToCart } = productToCartSlice.actions;
