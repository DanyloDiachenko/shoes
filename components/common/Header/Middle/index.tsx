import { Left } from "./Left";
import { Right } from "./Right";
import styles from "./styles.module.scss";
import { MiddleProps } from "./middle.props";
import { getServerCookie } from "@/helpers/getServerCookie";
import { getCurrency } from "@/helpers/getCurrency";

export const Middle = ({ cartProducts, cookieProducts }: MiddleProps) => {
    const currency = getCurrency();
    console.log(currency);

    return (
        <div className={`${styles.headerMiddle} sticky-header`}>
            <div className={`container ${styles.container}`}>
                <Left />
                <Right
                    currency={currency}
                    cartProducts={cartProducts}
                    cookieProducts={cookieProducts}
                />
            </div>
        </div>
    );
};
