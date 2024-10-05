import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { setCookie } from "@/helpers/setCookie";
import { RxUpdate } from "react-icons/rx";
import { toast } from "react-toastify";

export const ClearCartButton = () => {
    const onClearCartButtonClick = () => {
        setCookie("cart", "");

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
