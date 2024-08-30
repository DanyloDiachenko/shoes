import { GetProductsResponse } from "@/interfaces/product.interface";

export const getProducts = async (): Promise<GetProductsResponse> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/products?page=1`,
        { cache: "no-cache" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
};
