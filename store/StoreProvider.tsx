"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { ToastContainer } from "@/components/providers/Toast";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
            <ToastContainer />
        </Provider>
    );
};
