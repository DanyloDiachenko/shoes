"use client";

import { useState } from "react";
import { Filters } from "./Filters";
import { ProductList } from "./ProductList";
import { ProductsPageContentProps } from "./productsPageContent.props";
import { GetProductsResponse } from "@/interfaces/product.interface";

export const ProductsPageContent = ({
    productsResponse,
}: ProductsPageContentProps) => {
    const [productsResponseClient, setProductsResponseClient] =
        useState<GetProductsResponse>(productsResponse);

    return (
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <ProductList productsResponse={productsResponse} />
                    <Filters />
                </div>
            </div>
        </div>
    );
};
