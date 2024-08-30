import { PopupType } from "@/types/popup.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsState } from "./productsState.interface";
import {
    IProductBrand,
    IProductCategoryWithProductsQuantity,
    IProductColor,
    IProductSize,
} from "@/interfaces/product.interface";

const initialState: IProductsState = {
    pagination: {
        currentPage: 1,
        totalPages: 1,
    },
    filters: {
        categories: [],
        sizes: [],
        colour: null,
        brands: [],
        priceFrom: 0,
        priceTo: 1000,
    },
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.pagination.currentPage = action.payload;
        },
        setTotalPages: (state, action: PayloadAction<number>) => {
            state.pagination.totalPages = action.payload;
        },
        setCategories: (
            state,
            action: PayloadAction<IProductCategoryWithProductsQuantity[]>
        ) => {
            state.filters.categories = action.payload;
        },
        setSizes: (state, action: PayloadAction<IProductSize[]>) => {
            state.filters.sizes = action.payload;
        },
        setColour: (state, action: PayloadAction<IProductColor | null>) => {
            state.filters.colour = action.payload;
        },
        setBrands: (state, action: PayloadAction<IProductBrand[]>) => {
            state.filters.brands = action.payload;
        },
        setPriceFrom: (state, action: PayloadAction<number>) => {
            state.filters.priceFrom = action.payload;
        },
        setPriceTo: (state, action: PayloadAction<number>) => {
            state.filters.priceTo = action.payload;
        },
    },
});

export const {
    setCurrentPage,
    setTotalPages,
    setCategories,
    setSizes,
    setColour,
    setBrands,
    setPriceFrom,
    setPriceTo,
} = productsSlice.actions;
