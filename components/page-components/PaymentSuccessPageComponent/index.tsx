import styles from "./styles.module.scss";
import { SuccessHeader } from "./SuccessHeader";
import { OrderSummary } from "./OrderSummary";
import { ShippingInformation } from "./ShippingInformation";
import { WhatNext } from "./WhatNext";
import { ActionButtons } from "./ActionButtons";
import { SupportSection } from "./SupportSection";
import { getCurrency } from "@/helpers/getCurrency";
import { getProfile } from "@/api/auth";
import { redirect } from "next/navigation";
import { User } from "@/interfaces/entities/user.inteface";
import { Address } from "@/interfaces/entities/address.interface";
import { PaymentSuccessPageComponentProps } from "./PaymentSuccess.props";
import { CartProduct } from "@/interfaces/entities/product.interface";
import { getProduct } from "@/api/products";

export const PaymentSuccessPageComponent = async ({
    checkoutDataStringified,
}: PaymentSuccessPageComponentProps) => {
    const currency = await getCurrency();

    const userProfile = await getProfile();
    if ("statusCode" in userProfile && userProfile.statusCode) {
        redirect("/products");
    }

    const checkoutData = JSON.parse(
        decodeURIComponent(checkoutDataStringified as string)
    );

    const shippingType = checkoutData.shippingType;
    const orderNotes = checkoutData.orderNotes;
    const boughtProducts = checkoutData.boughtProducts;
    const orderId = checkoutData.orderId;
    if (!shippingType || !boughtProducts || !orderId) {
        redirect("/not-found");
    }

    let boughtProductsDetailed: CartProduct[] = [];

    for (let i = 0; i < boughtProducts.length; i++) {
        const productToCart = await getProduct(boughtProducts[i].productId);
        if (!productToCart) {
            return;
        }

        if ("id" in productToCart) {
            boughtProductsDetailed = [
                ...boughtProductsDetailed,
                {
                    ...productToCart,
                    quantity: boughtProducts[i].quantity,
                    size: boughtProducts[i].size,
                },
            ];
        }
    }

    return (
        <div className={`container ${styles.container}`}>
            <main className={`page-content`}>
                <SuccessHeader orderId={orderId} />
                <div className={styles.contentGrid}>
                    <OrderSummary
                        currency={currency}
                        shippingType={shippingType}
                        boughtProducts={boughtProductsDetailed}
                    />
                    <div className={styles.rightColumn}>
                        <ShippingInformation
                            shippingType={shippingType}
                            shippingAddress={
                                (userProfile as User).shippingAddress as Address
                            }
                            userFirstName={
                                (userProfile as User).firstName as string
                            }
                            userLastName={
                                (userProfile as User).lastName as string
                            }
                            orderNotes={orderNotes}
                        />
                        <WhatNext />
                    </div>
                </div>
                <ActionButtons />
                <SupportSection />
            </main>
        </div>
    );
};
