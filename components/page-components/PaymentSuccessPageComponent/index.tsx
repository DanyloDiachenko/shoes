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

export const PaymentSuccessPageComponent = async ({
    orderNotes,
    shippingType,
    boughtProducts,
    orderId,
}: PaymentSuccessPageComponentProps) => {
    const currency = await getCurrency();

    const userProfile = await getProfile();
    if ("statusCode" in userProfile && userProfile.statusCode) {
        redirect("/products");
    }
    userProfile as User;

    return (
        <div className={`container ${styles.container}`}>
            <main className={`page-content`}>
                <SuccessHeader orderId={orderId} />
                <div className={styles.contentGrid}>
                    <OrderSummary
                        currency={currency}
                        shippingType={shippingType}
                        boughtProducts={boughtProducts}
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
