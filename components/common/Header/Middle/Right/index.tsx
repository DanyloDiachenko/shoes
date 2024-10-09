import { Search } from "./Search";
import { CartDropdown } from "./CartDropdown";
import styles from "./styles.module.scss";
import { RightProps } from "./right.props";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { getCurrency } from "@/helpers/getCurrency";

export const Right = ({ cartProducts }: RightProps) => {
    const currency = getCurrency();
    const cookieProducts = getCookieProductsServer() || [];

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
