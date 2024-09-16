export interface IProductCategory {
    id: string;
    title: string;
    slug: string;
}
export interface IProductCategoryWithProductsQuantity extends IProductCategory {
    productsQuantity: number;
}

export interface IProductBrand {
    id: string;
    title: string;
    slug: string;
}

export interface IProductSize {
    id: string;
    title: number;
    slug: number;
}

export interface IProductColor {
    id: string;
    title: string;
    slug: string;
    hexCode: string;
}

export interface IProductReview {
    id: string;
    author: string;
    rating: number;
    createdAt: string;
    title: string;
    description: string;
    helpfulNumber: number;
    unhelpfulNumber: number;
}

export interface IProduct {
    id: string;
    title: string;
    description: string;
    quantityInStock: number;
    priceUah: number;
    priceEur: number;
    mainImage: string;
    productInformtion: string;
    additionalInformation: string;
    purchasedNumber: 10;
    images: string[];
    priceWithDiscountUah: number | null;
    priceWithDiscountEur: number | null;
    mainCategory: IProductCategory;
    brand: IProductBrand;
    reviews: IProductReview[];
    color: IProductColor;
    sizes: IProductSize[];
    categories: IProductCategory[];
    rating: number | null;
}
