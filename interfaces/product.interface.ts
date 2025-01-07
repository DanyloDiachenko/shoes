export interface ProductCategory {
    id: string;
    title: string;
    slug: string;
}
export interface ProductCategoryWithProductsQuantity extends ProductCategory {
    productsQuantity: number;
}

export interface ProductBrand {
    id: string;
    title: string;
    slug: string;
}

export interface ProductSize {
    id: string;
    title: number;
    slug: number;
}

export interface ProductColor {
    id: string;
    title: string;
    slug: string;
    hexCode: string;
}

export interface ProductReview {
    id: string;
    author: string;
    rating: number;
    createdAt: string;
    title: string;
    description: string;
    helpfulNumber: number;
    unhelpfulNumber: number;
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
    purchasedNumber: 10;
    images: string[];
    priceWithDiscountUah: number;
    priceWithDiscountEur: number;
    mainCategory: ProductCategory;
    brand: ProductBrand;
    reviews: ProductReview[];
    color: ProductColor;
    sizes: ProductSize[];
    categories: ProductCategory[];
    rating: number | null;
}
