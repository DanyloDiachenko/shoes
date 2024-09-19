"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { Bounce, ToastContainer } from "react-toastify";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </Provider>
    );
};
