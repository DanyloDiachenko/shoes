import { ProductColor } from "@/interfaces/product.interface";

export const getColors = async (): Promise<ProductColor[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/colors`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        console.log("Failed to fetch data", res);

        return [];
    }

    const data = await res.json();

    return data;
};
