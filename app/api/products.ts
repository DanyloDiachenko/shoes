import { getCurrency } from "@/helpers/getCurrency";
import { Product } from "@/interfaces/product.interface";
import { GetProductsResponse } from "@/interfaces/responses/products.interface";
import { Currency } from "@/types/currency.type";
import { SortProductsBy } from "@/types/sortProductsBy.type";
import { notFound } from "next/navigation";

interface GetProductsParams {
    pageNumber?: number;
    limit?: number;
    sortBy?: SortProductsBy;
    categorySlugs?: string[];
    sizeSlugs?: string[];
    colorSlug?: string;
    brandSlugs?: string[];
    priceFrom?: number;
    priceTo?: number;
}

export const getProducts = async ({
    pageNumber = 1,
    limit = 9,
    sortBy = "mostPopular",
    categorySlugs = [],
    sizeSlugs = [],
    colorSlug = "",
    brandSlugs = [],
    priceFrom = 0,
    priceTo = 100000,
}: GetProductsParams): Promise<GetProductsResponse> => {
    const currency = await getCurrency();
    const categoriesQuery = categorySlugs.join(",");
    const sizesQuery = sizeSlugs.join(",");
    const brandsQuery = brandSlugs.join(",");

    const res = await fetch(
        `${
            process.env.NEXT_PUBLIC_API_URL
        }/products?page=${pageNumber}&limit=${limit}&sortBy=${sortBy}&categories=${
            categoriesQuery || ""
        }&sizes=${sizesQuery || ""}&color=${colorSlug}&brands=${
            brandsQuery || ""
        }&currency=${currency}&priceFrom=${priceFrom}&priceTo=${priceTo}`
    );

    if (!res.ok) {
        console.log("Failed to fetch data", res);

        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
};

export const getProduct = async (productId: string): Promise<Product> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
    );

    if (!res.ok) {
        return notFound();
    }

    const data = await res.json();

    return data;
};
