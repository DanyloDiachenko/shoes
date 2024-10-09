import { ProductSize } from "@/interfaces/product.interface";

export const getSizes = async (): Promise<ProductSize[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sizes`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
};
