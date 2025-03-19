"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PayPalProviderProps } from "./PayPalProvider.props";

export const PayPalProvider = ({ children }: PayPalProviderProps) => {
    return (
        <PayPalScriptProvider
            options={{
                clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIEND_ID || "",
                currency: "EUR",
                locale: "en_US",
            }}
        >
            {children}
        </PayPalScriptProvider>
    );
};
