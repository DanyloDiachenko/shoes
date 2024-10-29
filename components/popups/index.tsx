import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { RootState } from "@/store";

export const Popups = () => {
    const openedPopup = useSelector(
        (state: RootState) => state.openedPopup.openedPopup
    );

    return (
        <>
            <div className={styles.modalWrapper}></div>
            <div
                className={`${openedPopup ? styles.active : ""} ${
                    styles.modalBackdrop
                }`}
            ></div>
        </>
    );
};
