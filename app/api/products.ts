import { GetProductsResponse } from "@/interfaces/responses";

export const getProducts = async (
    page: number | undefined = 1,
    limit: number | undefined = 9,
    categorySlugs?: string[],
    sizeSlugs?: string[]
): Promise<GetProductsResponse> => {
    const categoriesQuery = categorySlugs ? categorySlugs.join(",") : "";
    const sizesQuery = sizeSlugs ? sizeSlugs.join(",") : "";

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?page=${page}&limit=${limit}&categories=${categoriesQuery}&sizes=${sizesQuery}`,
        { cache: "no-cache" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
};
