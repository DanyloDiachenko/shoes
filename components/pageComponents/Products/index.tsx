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
    serverCurrency,
}: ProductsPageContentProps) => {
    const [productsResponseClient, setProductsResponseClient] =
        useState<GetProductsResponse>(productsResponse);
    const [isFirstRender, setIsFirstRender] = useState(true);

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
    const price = useSelector((state: RootState) =>
        serverCurrency === "uah"
            ? state.products.filters.priceUah
            : state.products.filters.priceEur
    );
    console.log(price);

    const fetchProducts = async () => {
        console.log("QUERY");
        const productsResponse = await getProducts(
            currentPage,
            9,
            sortBy,
            selectedCategories.map((category) => category.slug),
            selectedSizes.map((size) => String(size.slug)),
            selectedColor?.slug,
            selectedBrands.map((brand) => brand.slug),
            serverCurrency,
            price.min,
            price.max
        );

        setProductsResponseClient(productsResponse);
    };

    useEffect(() => {
        if (!isFirstRender) {
            fetchProducts();
        } else {
            setIsFirstRender(false);
        }
    }, [
        currentPage,
        selectedCategories,
        selectedSizes,
        selectedColor,
        selectedBrands,
        sortBy,
        price.min,
        price.max,
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
                        serverCurrency={serverCurrency}
                    />
                    {productsResponseClient.data.length ? (
                        <>
                            <ProductList
                                productsResponse={productsResponseClient}
                                serverCurrency={serverCurrency}
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
