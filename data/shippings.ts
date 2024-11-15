import { Shipping } from "@/interfaces/shipping.interface";

export const shippings: Shipping[] = [
    {
        title: "Free",
        value: "free",
        priceUah: 0,
        priceEur: 0,
    },
    {
        title: "Standart",
        value: "standart",
        priceUah: 500,
        priceEur: 20,
    },
    {
        title: "Express",
        value: "express",
        priceUah: 1000,
        priceEur: 40,
    },
];
