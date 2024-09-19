import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductToCartState } from "./productToCart.interface";

const initialState: IProductToCartState = {
    id: null,
    quantity: 0,
    colorId: null,
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
            state.id = action.payload.id;
            state.quantity = action.payload.quantity;
            state.colorId = action.payload.colorId;
            state.sizeId = action.payload.sizeId;
        },
    },
});

export const { setProductToCart } = productToCartSlice.actions;
