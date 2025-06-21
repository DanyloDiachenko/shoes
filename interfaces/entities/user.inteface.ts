import { Address } from "./address.interface";
import { Order } from "./order.interface";

export interface User {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    displayName: string | null;
    phone: string | null;
    shippingAddress: Address | null;
    billingAddress: Address | null;
    orders: Order[];
    /* favorites: [];
    reviews: []; */
}
