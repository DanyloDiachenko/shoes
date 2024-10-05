"use client";

import { useEffect, useState } from "react";
import { CartPageContentProps } from "./cart.props";
import { CartTotal } from "./CartTotal";
import { Table } from "./Table";
import { getCookieProductsClient } from "@/helpers/getCookieProductsClient";
import { IProductCookie } from "@/interfaces/productCookie.interface";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export const CartPageContent = ({
    cartProducts,
    currency,
    cookieProducts,
}: CartPageContentProps) => {
    const localStorageToogler = useSelector(
        (state: RootState) => state.toogleLocalStorage.value
    );

    const [cookieProductsClient, setCookieProductsClient] =
        useState<IProductCookie[]>(cookieProducts);

    useEffect(() => {
        const cookieProductsUpdated = getCookieProductsClient();

        setCookieProductsClient(cookieProductsUpdated);
    }, [localStorageToogler]);


    return (
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <Table
                        cartProducts={cartProducts}
                        currency={currency}
                        cookieProducts={cookieProductsClient}
                    />
                    <CartTotal />
                </div>
            </div>
        </div>
    );
};
