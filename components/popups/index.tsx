"use client";

import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import { ChangeAddress } from "./ChangeAddress";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const Popups = () => {
    const openedPopup = useSelector(
        (state: RootState) => state.openedPopup.openedPopup
    );

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
                            <ChangeAddress />
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
