import { TProduct } from '@/types/product';

import img1_full from '../../public/assets/images/p1-1000.jpg';
import img2_full from '../../public/assets/images/p2-1000.jpg';
import img3_full from '../../public/assets/images/p3-1000.jpg';
import img4_full from '../../public/assets/images/p4-1000.jpg';

import img1_thumb from '../../public/assets/images/p1-176.jpg';
import img2_thumb from '../../public/assets/images/p2-176.jpg';
import img3_thumb from '../../public/assets/images/p3-176.jpg';
import img4_thumb from '../../public/assets/images/p4-176.jpg';

const fullImgs = [img1_full, img2_full, img3_full, img4_full];
const ThumbImgs = [img1_thumb, img2_thumb, img3_thumb, img4_thumb];

export const product: TProduct = {
	id: 3,
	title: 'fall limited edition sneakers',
	image: { full: fullImgs, thumb: ThumbImgs },
	availableQty: 10,
	color: 'white',
	size: 'US-10',
	category: 'sports',
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable ruber outer sole, they'll withstand everything the weather can offer.",
	price: 250,
	discountedPrice: 125,
	discountPercentage: 0.5
};
