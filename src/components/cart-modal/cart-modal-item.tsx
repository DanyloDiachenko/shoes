import Image from 'next/image';

import { useCartStore } from '@/store';
import { TCartItem } from '@/types/cart';
import { DeleteIcon } from '../icons';
import { Button } from '../ui/button';

export const CartItem = ({ item }: { item: TCartItem }) => {
	const removeCartItem = useCartStore(s => s.removeCartItem);

	return (
		<li
			key={item.id}
			className='grid grid-cols-[5rem,1fr,2rem] lg:grid-cols-[6rem,1fr,2rem] gap-8 items-center border-b border-Grayish_blue/25 pb-4 last:border-b-0'>
			<figure className='shadow rounded-xl ring-1 ring-Grayish_blue bg-Very_light_grayish_blue'>
				<Image
					className='w-20 rounded-xl lg:w-full'
					src={item.image.thumb}
					alt={`${item.title}`}
				/>
				<figcaption className='sr-only'>product image in shopping cart</figcaption>
			</figure>

			<div className='flex flex-col gap-2 text-2xl cursor-default text-Dark_grayish_blue lg:text-2xl'>
				<h3 className='capitalize'>{item.title}</h3>
				<p className='flex items-center gap-4'>
					<span>
						${item.price.toFixed(2)} x {item.qty}
					</span>
					<span className='font-bold text-Very_dark_blue'>
						${(item.price * item.qty).toFixed(2)}
					</span>
				</p>
			</div>

			<Button
				title='remove item'
				className='p-1 rounded group focus-visible:outline-offset-2'
				onClick={() => removeCartItem(item.id)}>
				<DeleteIcon className='group-focus-visible:fill-Orange hover:fill-Orange lg:scale-125' />
			</Button>
		</li>
	);
};
