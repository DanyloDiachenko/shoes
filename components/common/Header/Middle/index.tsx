import Link from "next/link";
import { Left } from "./Left";
import { Right } from "./Right";
import styles from "./styles.module.scss";

export const Middle = () => {
    return (
        <div className={`${styles.headerMiddle} sticky-header`}>
            <div className={`container ${styles.container}`}>
                <Left />
                <Right />
            </div>
        </div>
    );
};
