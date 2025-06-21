import { User } from "@/interfaces/entities/user.inteface";
import { Currency } from "@/types/currency.type";
import { ShippingType } from "@/types/shipping.type";

export interface PaymentSuccessPageComponentProps {
    orderNotes: string | undefined;
    shippingType: ShippingType;
    boughtProducts: any;
    orderId: string;
}
