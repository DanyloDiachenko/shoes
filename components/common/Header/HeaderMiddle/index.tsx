import Link from "next/link";
import { HeaderLeft } from "./HeaderLeft";
import { HeaderRight } from "./HeaderRight";
import styles from "./styles.module.scss";

export const HeaderMiddle = () => {
    return (
        <div className={`${styles.headerMiddle} sticky-header`}>
            <div className={`container ${styles.container}`}>
                <HeaderLeft />
                <HeaderRight />
            </div>
        </div>
    );
};
