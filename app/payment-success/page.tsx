import { getProduct } from "@/api/products";
import { HomePageComponent } from "@/components/page-components/Home";
import { PaymentSuccessPageComponent } from "@/components/page-components/PaymentSuccessPageComponent";
import { CartProduct, Product } from "@/interfaces/entities/product.interface";
import { ShippingType } from "@/types/shipping.type";

interface PaymentSuccessPageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PaymentSuccess = async ({ searchParams }: PaymentSuccessPageProps) => {
    const checkoutDataStringified = (await searchParams).data;
    if (!checkoutDataStringified) {
        //redirect
    }
    const checkoutData = JSON.parse(
        decodeURIComponent(checkoutDataStringified as string)
    );

    const shippingType = checkoutData.shippingType;
    const orderNotes = checkoutData.orderNotes;
    const boughtProducts = checkoutData.boughtProducts;
    const orderId = checkoutData.orderId;
    if (!shippingType || !boughtProducts || !orderId) {
        /* redirect('/404') */
    }

    let boughtProductsDetailed: CartProduct[] = [];

    for (let i = 0; i < boughtProducts.length; i++) {
        const productToCart = await getProduct(boughtProducts[i].productId);
        if (!productToCart) {
            return;
        }

        if ("id" in productToCart) {
            boughtProductsDetailed = [...boughtProductsDetailed, {
                ...productToCart,
                quantity: boughtProducts[i].quantity,
                size: boughtProducts[i].size,
            }];
        }
    }

    return (
        <PaymentSuccessPageComponent
            boughtProducts={boughtProductsDetailed}
            shippingType={shippingType as ShippingType}
            orderNotes={orderNotes as string | undefined}
            orderId={orderId}
        />
    );
};

export default PaymentSuccess;
