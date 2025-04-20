import { Accordion } from "@/components/UI/Accordion";
import styles from "./styles.module.scss";
import { faqShippingInformation } from "@/data/faq";

export const FaqPageComponent = () => {
    return (
        <div className="page-content">
            <div className="container">
                <h2 className={styles.title}>Shipping Information</h2>
                <Accordion
                    items={faqShippingInformation}
                    isFirstItemOpened={true}
                />
            </div>
        </div>
    );
};
