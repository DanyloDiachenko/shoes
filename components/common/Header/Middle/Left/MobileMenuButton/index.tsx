"use client";

import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { setMobileMenuState } from "@/store/slices/mobileMenu";

export const MobileMenuButton = () => {
    const dispatch = useDispatch();

    const onMobileMenuClick = () => {
        dispatch(setMobileMenuState(true));
    };

    return (
        <button
            className={styles.mobileMenuToggler}
            onClick={onMobileMenuClick}
        >
            <span className="sr-only">Toggle mobile menu</span>
            <RxHamburgerMenu />
        </button>
    );
};
