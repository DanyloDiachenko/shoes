import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { setCookie } from "@/helpers/setCookie";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import { RxUpdate } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

export const ClearCartButton = () => {
    const dispatch = useDispatch();

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };

    const onClearCartButtonClick = () => {
        setCookie("cart", "");
        toogleLocalStorageHandler();

        toast.success("All products successfully removed from cart");
    };

    return (
        <Button
            colorType="btnOutlineDark2"
            className={styles.updateCart}
            onClick={onClearCartButtonClick}
        >
            <span>CLEAR CART</span>
            <RxUpdate />
        </Button>
    );
};
