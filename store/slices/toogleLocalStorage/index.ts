import { createSlice } from "@reduxjs/toolkit";
import { ToogleLocalStorageState } from "./tootleLocalStorage.interface";

const initialState: ToogleLocalStorageState = {
    value: false,
};

export const toogleLocalStorageSlice = createSlice({
    name: "toogleLocalStorage",
    initialState,
    reducers: {
        toogleLocalStorage: (state) => {
            state.value = !state.value;
        },
    },
});

export const { toogleLocalStorage } = toogleLocalStorageSlice.actions;