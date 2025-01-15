"use client";

import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import { ChangeAddress } from "./ChangeAddress";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { closePopup as closePopupFunc } from "@/store/slices/openedPopup";
import { useRef } from "react";
import { onOutsideClick } from "@/helpers/onOutsideClick";
import { QuickView } from "./QuickView";

export const Popups = () => {
    const dispatch = useDispatch();
    const popupRef = useRef<HTMLDivElement | null>(null);
    const openedPopup = useSelector(
        (state: RootState) => state.openedPopup.openedPopup
    );

    const closePopup = () => {
        dispatch(closePopupFunc());
    };

    onOutsideClick(popupRef, closePopup);

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
                    ref={popupRef}
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
                            {(openedPopup === "createBillingAddress" ||
                                openedPopup === "createShippingAddress" ||
                                openedPopup === "updateBillingAddress" ||
                                openedPopup === "updateShippingAddress") && (
                                <ChangeAddress />
                            )}
                            {openedPopup === "quickView" && <QuickView />}
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
