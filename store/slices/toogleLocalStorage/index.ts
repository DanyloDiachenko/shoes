import { createSlice } from "@reduxjs/toolkit";
import { IToogleLocalStorageState } from "./tootleLocalStorage.interface";

const initialState: IToogleLocalStorageState = {
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