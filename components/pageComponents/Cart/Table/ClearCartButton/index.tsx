import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { RxUpdate } from "react-icons/rx";

export const ClearCartButton = () => {
    return (
        <Button colorType="btnOutlineDark2" className={styles.updateCart}>
            <span>CLEAR CART</span>
            <RxUpdate />
        </Button>
    );
};
