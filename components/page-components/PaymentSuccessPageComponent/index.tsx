import { LuCheck, LuMail, LuPackage, LuTruck } from "react-icons/lu";
import Image from "next/image";
import styles from "./styles.module.scss";
import { SuccessHeader } from "./SuccessHeader";
import { OrderSummary } from "./OrderSummary";
import { ShippingInformation } from "./ShippingInformation";
import { WhatNext } from "./WhatNext";
import { ActionButtons } from "./ActionButtons";
import { SupportSection } from "./SupportSection";

export const PaymentSuccessPageComponent = () => {
    return (
        <div className={`container ${styles.container}`}>
            <main className={`page-content`}>
                <SuccessHeader />
                <div className={styles.contentGrid}>
                    <OrderSummary />
                    <div className={styles.rightColumn}>
                        <ShippingInformation />
                        <WhatNext />
                    </div>
                </div>
                <ActionButtons />
                <SupportSection />
            </main>
        </div>
    );
};
