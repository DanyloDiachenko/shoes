"use client";

import { useEffect, useState } from "react";
import { CartPageContentProps } from "./cart.props";
import { CartTotal } from "./CartTotal";
import { Table } from "./Table";
import { getCookieProductsClient } from "@/helpers/getCookieProductsClient";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const CartPageContent = ({
    cartProducts,
    currency,
    cookieProducts,
    user,
}: CartPageContentProps) => {
    const localStorageToogler = useSelector(
        (state: RootState) => state.toogleLocalStorage.value
    );

    const [cookieProductsClient, setCookieProductsClient] =
        useState<CookieProduct[]>(cookieProducts);

    const setCookieProductsClientHandler = async () => {
        const cookieProductsUpdated = await getCookieProductsClient();
        setCookieProductsClient(cookieProductsUpdated);
    };

    useEffect(() => {
        setCookieProductsClientHandler();
    }, [localStorageToogler]);

    return (
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <Table
                        cartProducts={cartProducts}
                        cookieProducts={cookieProductsClient}
                        currency={currency}
                    />
                    <CartTotal
                        currency={currency}
                        cartProducts={cartProducts}
                        cookieProducts={cookieProductsClient}
                        user={user}
                    />
                </div>
            </div>
        </div>
    );
};
