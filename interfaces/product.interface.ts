export interface IProductSize {
    id: string;
    key: string;
    label: string;
}

export interface IProductCategory {
    id: string;
    key: string;
    label: string;
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
    key: string;
    label: string;
}

export interface IProductColor {
    id: string;
    key: string;
    label: string;
}

export interface IProduct {
    id: string;
    mainImage: string;
    images: string[];
    title: string;
    rating: number;
    price: number;
    description: string;
    sizes: IProductSize[];
    quantityInStock: number;
    mainCategory: IProductCategory;
    categories: IProductCategory[];
    productInformtion: string;
    additionalInformation: string;
    reviews: IProductReview[];
    purchasedNumber: number;
    color: IProductColor;
}
