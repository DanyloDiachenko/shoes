import { Order } from "@/interfaces/entities/order.interface";
import { Currency } from "@/types/currency.type";

export interface OrderRowProps {
    order: Order;
    currency: Currency;
    number: number;
}
