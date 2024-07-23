import { TProduct } from '@/types/product';

import p5 from '../../public/assets/images/p5-176.png';
import p6 from '../../public/assets/images/p6-176.png';
import p7 from '../../public/assets/images/p7-176.png';
import p8 from '../../public/assets/images/p8-176.png';
import p9 from '../../public/assets/images/p9-176.png';
import p10 from '../../public/assets/images/p10-176.png';
import p11 from '../../public/assets/images/p11-176.png';
import p13 from '../../public/assets/images/p13-176.png';
import p14 from '../../public/assets/images/p14-176.png';
import p15 from '../../public/assets/images/p15-176.png';
import p16 from '../../public/assets/images/p16-176.png';
import p17 from '../../public/assets/images/p17-176.png';
import p18 from '../../public/assets/images/p18-176.png';
import p19 from '../../public/assets/images/p19-176.png';
import p20 from '../../public/assets/images/p20-176.png';
import p21 from '../../public/assets/images/p21-176.png';
import p22 from '../../public/assets/images/p22-176.png';
import p23 from '../../public/assets/images/p23-176.png';
import p24 from '../../public/assets/images/p24-176.png';

export const products: TProduct[] = [
	{
		id: 1,
		title: 'Nike Air Max 90',
		image: { full: '', thumb: p20 },
		size: '10',
		color: 'White',
		price: 120,
		description:
			'The Nike Air Max 90 is a classic sneaker with modern updates that provide comfort and style.',
		availableQty: 8,
		discountPercentage: 17,
		category: 'sports',
		discountedPrice: 99.6
	},
	{
		id: 2,
		title: 'Adidas Ultraboost 21',
		image: { full: '', thumb: p6 },
		size: '9.5',
		color: 'Black',
		price: 180,
		description:
			'The Adidas Ultraboost 21 is a high-performance running shoe with a responsive Boost midsole.',
		availableQty: 5,
		discountPercentage: 11,
		category: 'running',
		discountedPrice: 160.2
	},
	{
		id: 3,
		title: 'Puma Calibrate Runner',
		image: { full: '', thumb: p24 },
		size: '11',
		color: 'Blue',
		price: 90,
		description:
			'The Puma Calibrate Runner is a comfortable and stylish sneaker that is perfect for casual wear.',
		availableQty: 10,
		discountPercentage: 25,
		category: 'running',
		discountedPrice: 67.5
	},
	{
		id: 4,
		title: 'New Balance 990v5',
		image: { full: '', thumb: p23 },
		size: '12',
		color: 'Grey',
		price: 175,
		description:
			'The New Balance 990v5 is a comfortable and versatile sneaker that can be worn for running or everyday activities.',
		availableQty: 3,
		discountPercentage: 15,
		category: 'sports',
		discountedPrice: 148.75
	},
	{
		id: 5,
		title: 'Reebok Nano X1',
		image: { full: '', thumb: p13 },
		size: '9',
		color: 'Red',
		price: 130,
		description:
			'The Reebok Nano X1 is a high-performance training shoe designed for crossfit and other intense workouts.',
		availableQty: 7,
		discountPercentage: 20,
		category: 'training',
		discountedPrice: 104
	},
	{
		id: 6,
		title: 'Adidas Superstar',
		image: { full: '', thumb: p6 },
		size: '8.5',
		color: 'White',
		price: 80,
		description:
			'The Adidas Superstar is an iconic sneaker that has been popular since its release in the 1970s.',
		availableQty: 12,
		discountPercentage: 0,
		category: 'fashion',
		discountedPrice: 80
	},
	{
		id: 7,
		title: 'Nike Metcon 6',
		image: { full: '', thumb: p7 },
		size: '10.5',
		color: 'Black',
		price: 130,
		description:
			'The Nike Metcon 6 is a high-performance training shoe designed for crossfit and other intense workouts.',
		availableQty: 6,
		discountPercentage: 10,
		category: 'training',
		discountedPrice: 117
	},
	{
		id: 8,
		title: 'Under Armour Charged Assert 8',
		image: { full: '', thumb: p8 },
		size: '9',
		color: 'Grey',
		price: 70,
		description:
			'The Under Armour Charged Assert 8 is a comfortable and affordable running shoe that provides good support.',
		availableQty: 9,
		discountPercentage: 5,
		category: 'running',
		discountedPrice: 66.5
	},
	{
		id: 9,
		title: 'Asics Gel-Kayano 28',
		image: { full: '', thumb: p9 },
		size: '11.5',
		color: 'Blue',
		price: 160,
		description:
			'The Asics Gel-Kayano 28 is a high-performance running shoe designed for long-distance runs.',
		availableQty: 4,
		discountPercentage: 12,
		category: 'running',
		discountedPrice: 140.8
	},
	{
		id: 10,
		title: 'New Balance Fresh Foam Roav Trail',
		image: { full: '', thumb: p21 },
		size: '10',
		color: 'Green',
		price: 100,
		description:
			'The New Balance Fresh Foam Roav Trail is a comfortable and durable trail running shoe with good traction.',
		availableQty: 11,
		discountPercentage: 8,
		category: 'sports',
		discountedPrice: 92
	},
	{
		id: 11,
		title: 'Jordan Delta',
		image: { full: '', thumb: p11 },
		size: '9.5',
		color: 'Black',
		price: 130,
		description:
			'The Jordan Delta is a comfortable and stylish sneaker that is perfect for everyday wear.',
		availableQty: 7,
		discountPercentage: 10,
		category: 'fashion',
		discountedPrice: 130
	},
	{
		id: 12,
		title: 'Nike Revolution 5',
		image: { full: '', thumb: p21 },
		size: '10',
		color: 'White',
		price: 65,
		description:
			'The Nike Revolution 5 is a versatile running shoe that is comfortable and affordable.',
		availableQty: 3,
		discountPercentage: 15,
		category: 'gym',
		discountedPrice: 55.25
	},
	{
		id: 13,
		title: 'Adidas Ultraboost 21',
		image: { full: '', thumb: p10 },
		size: '11',
		color: 'Black',
		price: 180,
		description:
			'The Adidas Ultraboost 21 is a high-performance running shoe that provides excellent comfort and support.',
		availableQty: 2,
		discountPercentage: 20,
		category: 'running',
		discountedPrice: 144
	},
	{
		id: 14,
		title: 'Reebok Nano 9',
		image: { full: '', thumb: p14 },
		size: '9.5',
		color: 'Red',
		price: 130,
		description:
			'The Reebok Nano 9 is a high-performance training shoe designed for crossfit and other intense workouts.',
		availableQty: 8,
		discountPercentage: 0,
		category: 'training',
		discountedPrice: 130
	},
	{
		id: 15,
		title: 'Casual running shoes',
		image: { full: '', thumb: p15 },
		size: '10.5',
		color: 'Blue',
		price: 150,
		description:
			'This Casual running shoes is a high-tech running shoe that provides excellent cushioning and support.',
		availableQty: 5,
		discountPercentage: 0,
		category: 'sports',
		discountedPrice: 150
	},
	{
		id: 16,
		title: 'Nike Air Max 270 React',
		image: { full: '', thumb: p16 },
		size: '11',
		color: 'Black',
		price: 160,
		description:
			'The Nike Air Max 270 React is a comfortable and stylish sneaker that is perfect for everyday wear.',
		availableQty: 9,
		discountPercentage: 5,
		category: 'sports',
		discountedPrice: 152
	},
	{
		id: 17,
		title: 'Adidas Ultraboost DNA CC',
		image: { full: '', thumb: p17 },
		size: '10.5',
		color: 'White',
		price: 180,
		description:
			'The Adidas Ultraboost DNA CC is a high-performance running shoe that provides excellent breathability and comfort.',
		availableQty: 6,
		discountPercentage: 8,
		category: 'gym',
		discountedPrice: 165.6
	},
	{
		id: 18,
		title: 'Nike Free Metcon 4',
		image: { full: '', thumb: p18 },
		size: '10.5',
		color: 'Grey',
		price: 120,
		description:
			'The Nike Free Metcon 4 is a versatile training shoe that provides excellent support and flexibility.',
		availableQty: 4,
		discountPercentage: 10,
		category: 'training',
		discountedPrice: 108
	},
	{
		id: 19,
		title: 'Reebok Classic Leather',
		image: { full: '', thumb: p19 },
		size: '11.5',
		color: 'White',
		price: 75,
		description:
			'The Reebok Classic Leather is a timeless sneaker that is both comfortable and stylish.',
		availableQty: 7,
		discountPercentage: 20,
		category: 'fashion',
		discountedPrice: 75
	},
	{
		id: 20,
		title: 'Under Armour Charged Assert 8',
		image: { full: '', thumb: p23 },
		size: '10',
		color: 'Grey',
		price: 65,
		description:
			'The Under Armour Charged Assert 8 is a comfortable and lightweight running shoe that is perfect for everyday use.',
		availableQty: 10,
		discountPercentage: 15,
		category: 'fashion',
		discountedPrice: 55.25
	},
	{
		id: 21,
		title: 'under armour Charged Assert',
		image: { full: '', thumb: p18 },
		size: '9.5',
		color: 'White',
		price: 80,
		description:
			'The Adidas Superstar is a classic sneaker that is both comfortable and stylish.',
		availableQty: 5,
		discountPercentage: 0,
		category: 'fashion',
		discountedPrice: 80
	},
	{
		id: 22,
		title: 'Puma RS-X³ Puzzle',
		image: { full: '', thumb: p20 },
		size: '10',
		color: 'Black',
		price: 110,
		description:
			'The Puma RS-X³ Puzzle is a modern and stylish sneaker that is perfect for casual wear.',
		availableQty: 3,
		discountPercentage: 0,
		category: 'gym',
		discountedPrice: 110
	},
	{
		id: 23,
		title: 'New Balance Fresh Foam 1080v11',
		image: { full: '', thumb: p23 },
		size: '10.5',
		color: 'Black',
		price: 150,
		description:
			'The New Balance Fresh Foam 1080v11 is a premium running shoe that provides excellent cushioning and support.',
		availableQty: 6,
		discountPercentage: 10,
		category: 'gym',
		discountedPrice: 135
	},
	{
		id: 24,
		title: 'Adidas Ultraboost 21',
		image: { full: '', thumb: p5 },
		size: '9',
		color: 'Blue',
		price: 180,
		description:
			'The Adidas Ultraboost 21 is a premium running shoe that provides excellent comfort and support.',
		availableQty: 9,
		discountPercentage: 5,
		category: 'gym',
		discountedPrice: 171
	},
	{
		id: 25,
		title: 'under armour X1',
		image: { full: '', thumb: p22 },
		size: '11',
		color: 'Red',
		price: 130,
		description:
			'The Under Armour X1 is a versatile training shoe that provides excellent support and flexibility.',
		availableQty: 11,
		discountPercentage: 0,
		category: 'training',
		discountedPrice: 130
	}
];
