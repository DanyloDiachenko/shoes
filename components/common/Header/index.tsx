import { Top } from "./Top";
import { Middle } from "./Middle";
import styles from "./styles.module.scss";
import { HeaderProps } from "./header.props";

export const Header = ({
    currency,
    cartProducts,
    cookieProducts,
}: HeaderProps) => {
    return (
        <header className={styles.header}>
            <Top />
            <Middle
                currency={currency}
                cartProducts={cartProducts}
                cookieProducts={cookieProducts}
            />
        </header>
    );
};
