import { Search } from "./Search";
import { CartDropdown } from "./CartDropdown";
import styles from "./styles.module.scss";
import { RightProps } from "./right.props";

export const Right = ({
    currency,
    cartProducts,
    cookieProducts,
}: RightProps) => {
    return (
        <div className={styles.headerRight}>
            <Search />
            <CartDropdown
                currency={currency}
                cartProducts={cartProducts}
                cookieProducts={cookieProducts}
            />
        </div>
    );
};
