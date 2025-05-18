import { Product } from "@/interfaces/entities/product.interface";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { Currency } from "@/types/currency.type";
import { Order } from "@/interfaces/entities/order.interface";

export interface TableProps {
    orders: Order[];
    currency: Currency;
}
