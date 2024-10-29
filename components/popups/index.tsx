"use client";

import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { RootState } from "@/store";
import { IoMdClose } from "react-icons/io";

export const Popups = () => {
    const openedPopup = "changeAddress"; /* useSelector(
        (state: RootState) => state.openedPopup.openedPopup
    ); */

    return (
        <>
            <div
                className={`${styles.modalWrapper} ${
                    openedPopup ? styles.active : ""
                }`}
                aria-hidden={openedPopup ? "false" : "true"}
                aria-modal={openedPopup ? "true" : "false"}
                tabIndex={-1}
                role="dialog"
            >
                <div
                    className={`${styles.modalDialog} ${
                        openedPopup ? styles.active : ""
                    }`}
                >
                    <div className={styles.modalContent}>
                        <div className={styles.modalBody}>
                            <button
                                className={styles.buttonClose}
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <IoMdClose />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={` ${styles.modalBackdrop} ${
                    openedPopup ? styles.active : ""
                }`}
            ></div>
        </>
    );
};
