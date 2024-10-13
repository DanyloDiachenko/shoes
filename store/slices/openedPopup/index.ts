import { Popup } from "@/types/popup.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OpenedPopupState } from "./openedPopupState.interface";

const initialState: OpenedPopupState = {
    openedPopup: "",
};

export const openedPopupSlice = createSlice({
    name: "openedPopup",
    initialState,
    reducers: {
        setOpenedPopup: (state, action: PayloadAction<Popup>) => {
            state.openedPopup = action.payload;
        },
    },
});

export const { setOpenedPopup } = openedPopupSlice.actions;
