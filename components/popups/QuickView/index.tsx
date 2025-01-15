"use client";

import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

export const QuickView = () => {
    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => state.product.product);

    if (!product) return null;

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.content}>
                <span className={styles.tag}>Sale!</span>
                <div className={styles.leftColumn}></div>
                <div className={styles.rightColumn}></div>
            </div>
        </div>
    );
};
