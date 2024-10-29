import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
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
                <div></div>
            </div>
            <div
                className={` ${styles.modalBackdrop} ${
                    openedPopup ? styles.active : ""
                }`}
            ></div>
        </>
    );
};
