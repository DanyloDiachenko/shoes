"use client";

import { useEffect, useState } from "react";
import { Filters } from "./Filters";
import { ProductList } from "./ProductList";
import { ProductsPageContentProps } from "./productsPageContent.props";
import { GetProductsResponse } from "@/interfaces/responses";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { getProducts } from "@/app/api/products";

export const ProductsPageContent = ({
    productsResponse,
    categoriesResponse,
}: ProductsPageContentProps) => {
    const [productsResponseClient, setProductsResponseClient] =
        useState<GetProductsResponse>(productsResponse);

    const selectedCategories = useSelector(
        (state: RootState) => state.products.filters.categories
    );
    const currentPage = useSelector(
        (state: RootState) => state.products.pagination.currentPage
    );

    const fetchProducts = async () => {
        const productsResponse = await getProducts(
            currentPage,
            9,
            selectedCategories.map((category) => category.slug)
        );

        setProductsResponseClient(productsResponse);
        console.log(productsResponse);
    };

    useEffect(() => {
        fetchProducts();
    }, [selectedCategories, currentPage]);

    return (
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <ProductList productsResponse={productsResponseClient} />
                    <Filters categoriesResponse={categoriesResponse} />
                </div>
            </div>
        </div>
    );
};
