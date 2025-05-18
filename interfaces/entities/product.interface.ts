import { Brand } from "./brand.interface";
import { Category } from "./category.interface";
import { Color } from "./color.interface";
import { Review } from "./review.interface";
import { Size } from "./size.interface";

export interface ProductCategoryWithProductsQuantity extends Category {
    productsQuantity: number;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    quantityInStock: number;
    priceUah: number;
    priceEur: number;
    mainImage: string;
    productInformation: string;
    additionalInformation: string;
    purchasedNumber: number;
    images: string[];
    priceWithDiscountUah: number;
    priceWithDiscountEur: number;
    mainCategory: Category;
    brand: Brand;
    reviews: Review[];
    color: Color;
    sizes: Size[];
    categories: Category[];
    rating: number;
}

export interface CartProduct extends Product {
    quantity: number;
    size: number;
}