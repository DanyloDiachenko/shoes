import { Payment } from "@/types/payment.type";

export interface PaymentI {
    title: string;
    value: Payment;
    description: string;
}

export const payments: PaymentI[] = [
    {
        title: "PayPal",
        value: "payPal",
        description: "Transfer money using PayPal",
    },
    {
        title: "Credit Card",
        value: "creditCard",
        description: "Make your payment directly into our bank account",
    },
    {
        title: "Apple Pay",
        value: "applePay",
        description: "Transfer money using Apple Pay",
    },
    {
        title: "Google Pay",
        value: "googlePay",
        description: "Transfer money using Google Pay",
    },
];
