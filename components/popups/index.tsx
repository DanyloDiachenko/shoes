"use client";

import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import { ChangeAddress } from "./ChangeAddress";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { closePopup as closePopupFunc } from "@/store/slices/openedPopup";

export const Popups = () => {
    const dispatch = useDispatch();

    const openedPopup = useSelector(
        (state: RootState) => state.openedPopup.openedPopup
    );

    const closePopup = () => {
        dispatch(closePopupFunc());
    };

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
                                onClick={closePopup}
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
