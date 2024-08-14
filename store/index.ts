import { configureStore } from "@reduxjs/toolkit";
import { openedPopupSlice } from "./slices/openedPopup";

export const store = configureStore({
    reducer: {
        openedPopup: openedPopupSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
