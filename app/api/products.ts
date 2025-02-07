import { getCurrency } from "@/helpers/getCurrency";
import { Product } from "@/interfaces/product.interface";
import { GetProductsResponse } from "@/interfaces/responses/products.interface";
import { SortProductsBy } from "@/types/sortProductsBy.type";

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
    search?: string;
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
    search = "",
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
        }&currency=${currency}&priceFrom=${priceFrom}&priceTo=${priceTo}&search=${search}`
    );

    if (!res.ok) {
        console.log("Failed to fetch data", res);

        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
};

export const getProduct = async (
    productId: string
): Promise<Product | null> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
    );

    if (!res.ok) {
        return null;
    }

    const data = await res.json();

    return data;
};
