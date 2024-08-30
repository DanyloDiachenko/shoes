import { GetProductsResponse } from "@/interfaces/responses";

export const getProducts = async (
    page: number
): Promise<GetProductsResponse> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?page=${page}`,
        { cache: "no-cache" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
};
