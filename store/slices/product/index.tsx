import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "./productState.interface";
import { Product } from "@/interfaces/product.interface";

const initialState: ProductState = {
    product: null,
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProduct: (state, action: PayloadAction<Product>) => {
            state.product = action.payload;
        },
    },
});

export const { setProduct } = productSlice.actions;
