import { ProductSize } from "@/interfaces/product.interface";

export const getSizes = async (): Promise<ProductSize[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sizes`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        console.log("Failed to fetch data", res);

        return [];
    }

    const data = await res.json();

    return data;
};
