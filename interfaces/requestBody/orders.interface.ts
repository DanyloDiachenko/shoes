import { ShippingType } from "@/types/shipping.type";

export interface CreateOrderBody {
    cart: { productId: string; quantity: number }[];
    deliveryAddressId: string;
    orderNotes?: string;
    shippingType: ShippingType;
}
