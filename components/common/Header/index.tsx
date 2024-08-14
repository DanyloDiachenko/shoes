import { HeaderTop } from "./HeaderTop";
import { HeaderMiddle } from "./HeaderMiddle";
import styles from "./styles.module.scss";

export const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderTop />
            <HeaderMiddle />
        </header>
    );
};
