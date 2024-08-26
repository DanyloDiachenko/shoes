export interface IProductCategory {
    id: string;
    slug: string;
    title: string;
    productsQuantity: number;
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

export interface IProductBrand {
    id: string;
    slug: string;
    title: string;
}

export interface IProductColor {
    id: string;
    slug: string;
    title: string;
}

export interface IProduct {
    id: string;
    mainImage: string;
    images: string[];
    title: string;
    rating: number;
    price: number;
    description: string;
    sizes: number[];
    quantityInStock: number;
    mainCategory: IProductCategory;
    categories: IProductCategory[];
    productInformtion: string;
    additionalInformation: string;
    reviews: IProductReview[];
    purchasedNumber: number;
    color: IProductColor;
}
