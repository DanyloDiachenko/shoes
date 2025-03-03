import { fetchApi } from "@/helpers/fetchApi";
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
}: GetProductsParams): Promise<GetProductsResponse | ResponseError> => {
    const currency = await getCurrency();
    const categoriesQuery = categorySlugs.join(",");
    const sizesQuery = sizeSlugs.join(",");
    const brandsQuery = brandSlugs.join(",");

    const queryParams = new URLSearchParams();
    queryParams.set("page", pageNumber.toString());
    queryParams.set("limit", limit.toString());
    queryParams.set("sortBy", sortBy);
    queryParams.set("categories", categoriesQuery || "");
    queryParams.set("sizes", sizesQuery || "");
    queryParams.set("color", colorSlug || "");
    queryParams.set("brands", brandsQuery || "");
    queryParams.set("currency", currency);
    queryParams.set("priceFrom", priceFrom.toString());
    queryParams.set("priceTo", priceTo.toString());
    queryParams.set("search", search);

    return await fetchApi({
        endpoint: `/products?${queryParams.toString()}`,
        method: "GET",
    });
};

export const getProduct = async (
    productId: string
): Promise<Product | ResponseError> => {
    return await fetchApi({
        endpoint: `/products/${productId}`,
        method: "GET",
    });
};
