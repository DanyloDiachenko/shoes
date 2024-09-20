import Link from "next/link";
import { Left } from "./Left";
import { Right } from "./Right";
import styles from "./styles.module.scss";
import { MiddleProps } from "./middle.props";

export const Middle = ({
    currency,
    cartProducts,
    cookieProducts,
}: MiddleProps) => {
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
