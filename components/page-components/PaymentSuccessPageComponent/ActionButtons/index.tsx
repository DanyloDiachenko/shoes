import { Button } from "@/components/UI/Button";
import styles from "./styles.module.scss";

export const ActionButtons = () => {
    return (
        <div className={styles.actionButtons}>
            <Button colorType="btnPrimary">Continue Shopping</Button>
            <Button colorType="btnOutlineDark2">
                Track Order
            </Button>
        </div>
    );
};
