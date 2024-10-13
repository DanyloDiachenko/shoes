import { ShippingType } from "@/types/shipping.type";

export interface Shipping {
    title: string;
    value: ShippingType;
    priceUah: number;
    priceEur: number;
}
