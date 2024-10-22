import Link from "next/link";
import styles from "./styles.module.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/UI/Button";

export const OrdersPageContent = () => {
    return (
        <div className={styles.content}>
            <p>No order has been made yet.</p>
            <Link href="/products">
                <Button colorType="btnOutlinePrimary2">
                    <span>Go Shop</span>
                    <IoIosArrowRoundForward />
                </Button>
            </Link>
        </div>
    );
};
