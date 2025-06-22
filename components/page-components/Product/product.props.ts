import { Product } from "@/interfaces/entities/product.interface";

export interface ProductPageContentProps {
    product: Product;
    userFullName: string | null;
}
