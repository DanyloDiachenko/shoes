import { StaticImageData } from 'next/image';

export type TImage = string | string[] | StaticImageData | StaticImageData[];
export type TProductImage = {
	full: TImage;
	thumb: TImage;
};
export type TProductCategory = 'sports' | 'fashion' | 'gym' | 'running' | 'training';
export type TProduct = {
	id: number;
	title: string;
	image: TProductImage;
	size: string;
	color: string;
	price: number;
	description: string;
	availableQty: number;
	discountedPrice: number;
	discountPercentage: number;
	category: TProductCategory;
};
