interface Payment {
    title: string;
    value: string;
    description: string;
}

export const payments: Payment[] = [
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
