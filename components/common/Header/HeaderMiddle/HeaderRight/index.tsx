import { Search } from "./Search";
import { CartDropdown } from "./CartDropdown";
import styles from "./styles.module.scss";

export const HeaderRight = () => {
    return (
        <div className={styles.headerRight}>
            <Search />
            <CartDropdown />
        </div>
    );
};
