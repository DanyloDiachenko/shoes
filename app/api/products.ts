import { GetProductsResponse } from "@/interfaces/responses";
import { CurrencyType } from "@/types/currency.type";
import { SortProductsByType } from "@/types/sortProductsBy.type";

export const getProducts = async (
    page: number | undefined = 1,
    limit: number | undefined = 9,
    sortBy: SortProductsByType | undefined,
    categorySlugs: string[],
    sizeSlugs: string[],
    colorSlug: string = "",
    brandSlugs: string[],
    currency: CurrencyType,
    priceFrom: number,
    priceTo: number
): Promise<GetProductsResponse> => {
    const categoriesQuery = categorySlugs ? categorySlugs.join(",") : "";
    const sizesQuery = sizeSlugs ? sizeSlugs.join(",") : "";
    const brandsQuery = brandSlugs ? brandSlugs.join(",") : "";

    const res = await fetch(
        `${
            process.env.NEXT_PUBLIC_API_URL
        }/products?page=${page}&limit=${limit}&sortBy=${
            sortBy || "mostPopular"
        }&categories=${categoriesQuery}&sizes=${sizesQuery}&color=${colorSlug}&brands=${brandsQuery}&currency=${currency}&priceFrom=${priceFrom || 0}&priceTo=${priceTo || 100000}`,
        { cache: "no-cache" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
};
