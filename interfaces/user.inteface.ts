import { Address } from "./address.interface";

export interface User {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    displayName: string | null;
    phone: string | null;
    shippingAddress: Address | null;
    billingAddress: Address | null;
    /* favorites: [];
    orders: [];
    reviews: []; */
}
