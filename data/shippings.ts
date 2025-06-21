import { Shipping } from "@/interfaces/shipping.interface";

export const shippings: Shipping[] = [
    {
        title: "Free (7-10 days)",
        value: "free",
        priceUah: 0,
        priceEur: 0,
    },
    {
        title: "Standart (5-7 days)",
        value: "standart",
        priceUah: 500,
        priceEur: 20,
    },
    {
        title: "Express (1-3 days)",
        value: "express",
        priceUah: 1000,
        priceEur: 40,
    },
];
