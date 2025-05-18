import { ShippingType } from "@/types/shipping.type";
import { CartProduct, Product } from "./product.interface";

export interface Order {
    id: string;
    shippingType: ShippingType;
    orderNotes: string;
    createdAt: Date;
    cart: CartProduct[];
}
