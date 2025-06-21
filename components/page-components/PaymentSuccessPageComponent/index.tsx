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

export const PaymentSuccessPageComponent = async () => {
    const currency = await getCurrency();

    const userProfile = await getProfile();
    if ("statusCode" in userProfile && userProfile.statusCode) {
        redirect("/products");
    }
    userProfile as User;

    return (
        <div className={`container ${styles.container}`}>
            <main className={`page-content`}>
                <SuccessHeader />
                <div className={styles.contentGrid}>
                    <OrderSummary />
                    <div className={styles.rightColumn}>
                        <ShippingInformation
                            shippingType=""
                            shippingAddress={
                                (userProfile as User).shippingAddress as Address
                            }
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
