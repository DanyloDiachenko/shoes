import { Accordion } from "@/components/UI/Accordion";
import styles from "./styles.module.scss";
import {
    faqShippingInformation,
    faqOrdersAndReturns,
    faqPayments,
} from "@/data/faq";

export const FaqPageComponent = () => {
    return (
        <div className="page-content">
            <div className="container">
                <h2 className={styles.title}>Shipping Information</h2>
                <Accordion
                    items={faqShippingInformation}
                    isFirstItemOpened={true}
                />
                <h2 className={styles.title}>Orders and Returns</h2>
                <Accordion items={faqOrdersAndReturns} />
                <h2 className={styles.title}>Payments</h2>
                <Accordion items={faqPayments} />
            </div>
        </div>
    );
};
