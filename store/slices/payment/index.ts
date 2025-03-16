import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaymentState } from "./paymentState.interface";

const initialState: PaymentState = {
    payment: null,
};

export const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        setPayment: (state, action: PayloadAction<PaymentState["payment"]>) => {
            state.payment = action.payload;
        },
    },
});

export const { setPayment } = paymentSlice.actions;
