import { Top } from "./Top";
import { Middle } from "./Middle";
import styles from "./styles.module.scss";
import { HeaderProps } from "./header.props";

export const Header = ({ cartProducts }: HeaderProps) => {
    return (
        <header className={styles.header}>
            <Top />
            <Middle
                cartProducts={cartProducts}
            />
        </header>
    );
};
