import { IProduct } from "@/interfaces/product.interface";
import { GetProductsResponse } from "@/interfaces/responses";
import { CurrencyType } from "@/types/currency.type";
import { SortProductsByType } from "@/types/sortProductsBy.type";

interface GetProductsParams {
    page?: number;
    limit?: number;
    sortBy?: SortProductsByType;
    categorySlugs?: string[];
    sizeSlugs?: string[];
    colorSlug?: string;
    brandSlugs?: string[];
    currency: CurrencyType;
    priceFrom?: number;
    priceTo?: number;
}

export const getProducts = async ({
    page = 1,
    limit = 9,
    sortBy = "mostPopular",
    categorySlugs = [],
    sizeSlugs = [],
    colorSlug = "",
    brandSlugs = [],
    currency,
    priceFrom = 0,
    priceTo = 100000,
}: GetProductsParams): Promise<GetProductsResponse> => {
    const categoriesQuery = categorySlugs.join(",");
    const sizesQuery = sizeSlugs.join(",");
    const brandsQuery = brandSlugs.join(",");

    const res = await fetch(
        `${
            process.env.NEXT_PUBLIC_API_URL
        }/products?page=${page}&limit=${limit}&sortBy=${sortBy}&categories=${
            categoriesQuery || ""
        }&sizes=${sizesQuery || ""}&color=${colorSlug}&brands=${
            brandsQuery || ""
        }&currency=${currency}&priceFrom=${priceFrom}&priceTo=${priceTo}`,
        { cache: "no-cache" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
};

export const getProduct = async (productId: string): Promise<IProduct> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
};
