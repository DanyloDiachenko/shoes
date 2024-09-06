"use client";

import { useEffect, useState } from "react";
import { Filters } from "./Filters";
import { ProductList } from "./ProductList";
import { ProductsPageContentProps } from "./productsPageContent.props";
import { GetProductsResponse } from "@/interfaces/responses";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import { getProducts } from "@/app/api/products";
import styles from "./styles.module.scss";

export const ProductsPageContent = ({
    productsResponse,
    categoriesResponse,
    sizesResponse,
    colorsResponse,
    brandsResponse,
}: ProductsPageContentProps) => {
    const [productsResponseClient, setProductsResponseClient] =
        useState<GetProductsResponse>(productsResponse);

    const currentPage = useSelector(
        (state: RootState) => state.products.pagination.currentPage
    );
    const sortBy = useSelector(
        (state: RootState) => state.products.filters.sortBy
    );
    const selectedCategories = useSelector(
        (state: RootState) => state.products.filters.categories
    );
    const selectedSizes = useSelector(
        (state: RootState) => state.products.filters.sizes
    );
    const selectedColor = useSelector(
        (state: RootState) => state.products.filters.color
    );
    const selectedBrands = useSelector(
        (state: RootState) => state.products.filters.brands
    );

    const fetchProducts = async () => {
        const productsResponse = await getProducts(
            currentPage,
            9,
            sortBy,
            selectedCategories.map((category) => category.slug),
            selectedSizes.map((size) => String(size.slug)),
            selectedColor?.slug,
            selectedBrands.map((brand) => brand.slug)
        );

        setProductsResponseClient(productsResponse);
    };

    useEffect(() => {
        fetchProducts();
    }, [
        currentPage,
        selectedCategories,
        selectedSizes,
        selectedColor,
        selectedBrands,
        sortBy
    ]);

    return (
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <Filters
                        categoriesResponse={categoriesResponse}
                        sizesResponse={sizesResponse}
                        colorsResponse={colorsResponse}
                        brandsResponse={brandsResponse}
                    />
                    {productsResponseClient.data.length ? (
                        <>
                            <ProductList
                                productsResponse={productsResponseClient}
                            />
                        </>
                    ) : (
                        <h2 className={styles.notFound}>No results found</h2>
                    )}
                </div>
            </div>
        </div>
    );
};
