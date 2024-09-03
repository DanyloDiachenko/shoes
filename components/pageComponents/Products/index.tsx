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
    sizesResponse,
    colorsResponse,
}: ProductsPageContentProps) => {
    const [productsResponseClient, setProductsResponseClient] =
        useState<GetProductsResponse>(productsResponse);

    const currentPage = useSelector(
        (state: RootState) => state.products.pagination.currentPage
    );

    const selectedCategories = useSelector(
        (state: RootState) => state.products.filters.categories
    );
    const selectedSizes = useSelector(
        (state: RootState) => state.products.filters.sizes
    );
    const selectedColour = useSelector(
        (state: RootState) => state.products.filters.colour
    );

    const fetchProducts = async () => {
        const productsResponse = await getProducts(
            currentPage,
            9,
            selectedCategories.map((category) => category.slug),
            selectedSizes.map((size) => String(size.slug)),
            selectedColour?.slug
        );

        setProductsResponseClient(productsResponse);
    };

    useEffect(() => {
        fetchProducts();
    }, [currentPage, selectedCategories, selectedSizes, selectedColour]);

    return (
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <ProductList productsResponse={productsResponseClient} />
                    <Filters
                        categoriesResponse={categoriesResponse}
                        sizesResponse={sizesResponse}
                        colorsResponse={colorsResponse}
                    />
                </div>
            </div>
        </div>
    );
};
