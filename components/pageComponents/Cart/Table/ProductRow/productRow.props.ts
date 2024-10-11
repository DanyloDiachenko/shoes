import { Product } from "@/interfaces/product.interface";

export interface ProductRowProps {
    cartProduct: Product & {
        selectedSize: string;
        quantity: number;
        totalPrice: number;
    };
}
