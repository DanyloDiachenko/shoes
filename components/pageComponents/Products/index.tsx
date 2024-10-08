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
    getProductsResponseServer,
    getCategoriesResponseServer,
    getSizesResponseServer,
    getColorsResponseServer,
    getBrandsResponseServer,
    currency,
}: ProductsPageContentProps) => {
    const [getProductsResponseClient, setGetProductsResponseClient] =
        useState<GetProductsResponse>(getProductsResponseServer);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const currentPage = useSelector(
        (state: RootState) => state.productsSettings.pagination.currentPage
    );
    const sortBy = useSelector(
        (state: RootState) => state.productsSettings.filters.sortBy
    );
    const selectedCategories = useSelector(
        (state: RootState) => state.productsSettings.filters.categories
    );
    const selectedSizes = useSelector(
        (state: RootState) => state.productsSettings.filters.sizes
    );
    const selectedColor = useSelector(
        (state: RootState) => state.productsSettings.filters.color
    );
    const selectedBrands = useSelector(
        (state: RootState) => state.productsSettings.filters.brands
    );
    const priceRange = useSelector((state: RootState) =>
        currency === "uah"
            ? state.productsSettings.filters.priceUah
            : state.productsSettings.filters.priceEur
    );

    const fetchProducts = async () => {
        const productsResponse = await getProducts({
            pageNumber: currentPage,
            limit: 9,
            sortBy: sortBy,
            categorySlugs: selectedCategories.map((category) => category.slug),
            sizeSlugs: selectedSizes.map((size) => String(size.slug)),
            colorSlug: selectedColor?.slug,
            brandSlugs: selectedBrands.map((brand) => brand.slug),
            currency: currency,
            priceFrom: priceRange.min,
            priceTo: priceRange.max,
        });

        setGetProductsResponseClient(productsResponse);
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
        priceRange.min,
        priceRange.max,
    ]);

    const renderProductsOrNoResults = () => {
        if (getProductsResponseClient.data.length) {
            return (
                <ProductList
                    getProductsResponseServer={getProductsResponseClient}
                    currency={currency}
                />
            );
        } else {
            return <h2 className={styles.notFound}>No results found</h2>;
        }
    };

    return (
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <Filters
                        getCategoriesResponseServer={
                            getCategoriesResponseServer
                        }
                        getSizesResponseServer={getSizesResponseServer}
                        getColorsResponseServer={getColorsResponseServer}
                        getBrandsResponseServer={getBrandsResponseServer}
                        currency={currency}
                    />
                    {renderProductsOrNoResults()}
                </div>
            </div>
        </div>
    );
};
