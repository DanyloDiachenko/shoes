import { Button } from "@/components/UI/Button";
import styles from "./styles.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

export const CartDiscount = () => {
    return (
        <div className={styles.cartDiscount}>
            <form action="#">
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        className={styles.formControl}
                        required
                        placeholder="coupon code"
                    />
                    <div className={styles.inputGroupAppend}>
                        <Button
                            colorType="btnOutlinePrimary2"
                            className={styles.button}
                        >
                            <FaArrowRightLong />
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};
