import { Payment } from "@/types/payment.type";

export interface AsideProps {
    paymentMethod: Payment | null;
    setPaymentMethod: (paymentMethod: Payment | null) => void;
}