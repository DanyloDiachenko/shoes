import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsState } from "./productsState.interface";
import {
    IProductBrand,
    IProductCategoryWithProductsQuantity,
    IProductColor,
    IProductSize,
} from "@/interfaces/product.interface";
import { SortProductsByType } from "@/types/sortProductsBy.type";
import { Range } from "react-input-range";

const initialState: IProductsState = {
    pagination: {
        currentPage: 1,
        totalPages: 1,
    },
    filters: {
        categories: [],
        sizes: [],
        color: null,
        brands: [],
        priceUah: {
            min: 0,
            max: 10000,
        },
        priceEur: {
            min: 0,
            max: 1000,
        },
        sortBy: "mostPopular",
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
        setColor: (state, action: PayloadAction<IProductColor | null>) => {
            state.filters.color = action.payload;
        },
        setBrands: (state, action: PayloadAction<IProductBrand[]>) => {
            state.filters.brands = action.payload;
        },
        setPriceUah: (state, action: PayloadAction<Range>) => {
            state.filters.priceUah = action.payload;
        },
        setPriceEur: (state, action: PayloadAction<Range>) => {
            state.filters.priceUah = action.payload;
        },
        setSortBy: (state, action: PayloadAction<SortProductsByType>) => {
            state.filters.sortBy = action.payload;
        },
    },
});

export const {
    setCurrentPage,
    setTotalPages,
    setCategories,
    setSizes,
    setColor,
    setBrands,
    setPriceEur,
    setPriceUah,
    setSortBy,
} = productsSlice.actions;
