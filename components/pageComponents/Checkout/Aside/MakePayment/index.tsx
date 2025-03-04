import { Button } from "@/components/UI/Button";
import styles from "./styles.module.scss";
import { MakePaymentProps } from "./makePayment.props";

export const MakePayment = ({ onPaymentClick }: MakePaymentProps) => {
    return (
        <Button
            type="submit"
            colorType="btnOutlinePrimary2"
            className={styles.buttonSubmit}
            onClick={onPaymentClick}
        >
            <span>Payment</span>
        </Button>
    );
};
