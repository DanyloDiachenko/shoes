import { ShippingType } from "@/types/shipping.type";

export interface ShippingProps {
    shippingType: ShippingType;
    onShippingTypeChange: (shipping: ShippingType) => void;
}
