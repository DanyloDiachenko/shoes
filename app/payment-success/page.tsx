import { HomePageComponent } from "@/components/page-components/Home";
import { PaymentSuccessPageComponent } from "@/components/page-components/PaymentSuccessPageComponent";
import { ShippingType } from "@/types/shipping.type";
import { redirect } from "next/navigation";
import { Props } from "next/script";

interface PaymentSuccessPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PaymentSuccess = async ({ searchParams }: PaymentSuccessPageProps) => {
    const checkoutDataStringified = (await searchParams).data;
    if(!checkoutDataStringified) {
        //redirect
    }
    const checkoutData = JSON.parse(decodeURIComponent(checkoutDataStringified as string));

    const shippingType = checkoutData.shippingType;
    const orderNotes = checkoutData.orderNotes;
    const boughtProducts = checkoutData.cart;
    const orderId = checkoutData.orderId;
    if (!shippingType || !boughtProducts || !orderId) {
        /* redirect('/404') */
    }

    return (
        <PaymentSuccessPageComponent
            boughtProducts={boughtProducts}
            shippingType={shippingType as ShippingType}
            orderNotes={orderNotes as string | undefined}
            orderId={orderId}
        />
    );
};

export default PaymentSuccess;
