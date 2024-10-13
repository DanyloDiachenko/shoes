import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MobileMenuState } from "./mobileMenuState.interface";

const initialState: MobileMenuState = {
    isOpened: false,
};

export const mobileMenuSlice = createSlice({
    name: "mobileMenu",
    initialState,
    reducers: {
        setMobileMenuState: (state, action: PayloadAction<boolean>) => {
            state.isOpened = action.payload;
        },
    },
});

export const { setMobileMenuState } = mobileMenuSlice.actions;
