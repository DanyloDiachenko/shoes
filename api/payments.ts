import { fetchApi } from "@/helpers/fetchApi";
import { Currency } from "@/types/currency.type";
import { ShippingType } from "@/types/shipping.type";

interface CreatePaymentBody {
    amount: number;
    currency: Currency;
    cart: { productId: string; quantity: number; size: string }[];
    orderNotes?: string;
    shippingType: ShippingType;
}
interface CreatePaymentResponse {
    id: string;
}

export const createPayment = async (
    body: CreatePaymentBody
): Promise<CreatePaymentResponse> => {
    return await fetchApi({
        endpoint: "/payments/create-checkout-session",
        method: "POST",
        body: body,
        isAuthRequired: true
    });
};
