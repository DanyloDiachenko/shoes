import { Search } from "./Search";
import { CompareDropdown } from "./CompareDropdown";
import { CartDropdown } from "./CartDropdown";
import styles from "./styles.module.scss";

export const HeaderRight = () => {
    return (
        <div className={styles.headerRight}>
            <Search />
            <CompareDropdown />
            <CartDropdown />
        </div>
    );
};
