"use client";

import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

export const QuickView = () => {
    const dispatch = useDispatch();
    const openedPopup = useSelector(
        (state: RootState) => state.openedPopup.openedPopup
    );

    if (!fields) return null;

    return <div className={styles.formBox}></div>;
};
