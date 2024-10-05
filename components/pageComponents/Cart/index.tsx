"use client";

import { useState } from "react";
import { CartPageContentProps } from "./cart.props";
import { CartTotal } from "./CartTotal";
import { Table } from "./Table";
import { IProduct } from "@/interfaces/product.interface";

export const CartPageContent = ({ cartProducts, currency }: CartPageContentProps) => {
    const [cartProductsClient, setCartProductsClient] =
        useState<IProduct[]>(cartProducts);

    return (
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <Table cartProducts={cartProducts} currency={currency} />
                    <CartTotal />
                </div>
            </div>
        </div>
    );
};
