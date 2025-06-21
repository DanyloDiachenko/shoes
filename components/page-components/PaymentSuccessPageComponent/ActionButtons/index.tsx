import { Button } from "@/components/UI/Button";
import styles from "./styles.module.scss";
import Link from "next/link";

export const ActionButtons = () => {
    return (
        <div className={styles.actionButtons}>
            <Link href="/products">
                <Button colorType="btnPrimary">Continue Shopping</Button>
            </Link>
            <Link href="/dashboard/orders">
                <Button colorType="btnOutlineDark2">
                    My Orders
                </Button>
            </Link>
        </div>
    );
};
