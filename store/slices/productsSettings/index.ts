import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsSettingsState } from "./productsSettingsState.interface";
import { ProductCategoryWithProductsQuantity } from "@/interfaces/entities/product.interface";
import { SortProductsBy } from "@/types/sortProductsBy.type";
import { Range } from "react-input-range";
import { Size } from "@/interfaces/entities/size.interface";
import { Color } from "@/interfaces/entities/color.interface";
import { Brand } from "@/interfaces/entities/brand.interface";

const initialState: ProductsSettingsState = {
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

export const productsSettingsSlice = createSlice({
    name: "productsSettings",
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
            action: PayloadAction<ProductCategoryWithProductsQuantity[]>
        ) => {
            state.filters.categories = action.payload;
        },
        setSizes: (state, action: PayloadAction<Size[]>) => {
            state.filters.sizes = action.payload;
        },
        setColor: (state, action: PayloadAction<Color | null>) => {
            state.filters.color = action.payload;
        },
        setBrands: (state, action: PayloadAction<Brand[]>) => {
            state.filters.brands = action.payload;
        },
        setPriceUah: (state, action: PayloadAction<Range>) => {
            state.filters.priceUah = action.payload;
        },
        setPriceEur: (state, action: PayloadAction<Range>) => {
            state.filters.priceEur = action.payload;
        },
        setSortBy: (state, action: PayloadAction<SortProductsBy>) => {
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
} = productsSettingsSlice.actions;
