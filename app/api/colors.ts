import { IProductColor } from "@/interfaces/product.interface";

export const getColors = async (): Promise<IProductColor[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/colors`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
};
