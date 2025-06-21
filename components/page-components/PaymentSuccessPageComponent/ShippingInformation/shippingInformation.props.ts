import { Address } from "@/interfaces/entities/address.interface";
import { ShippingType } from "@/types/shipping.type";

export interface ShippingInformationProps {
    shippingAddress: Address;
    userFirstName: string;
    userLastName: string;
    shippingType: ShippingType;
    orderNotes: string | undefined;
}
