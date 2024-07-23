import Image from 'next/image';
import { useCartStore } from '@/store';
import { TCartItem } from '@/types/cart';

import { Button } from '../ui/button';
import { DiscountTag } from '../ui/discount-tag';
import { MinusIcon, PlusIcon } from '../icons';

export const CartPageItem = ({ cartItem }: { cartItem: TCartItem }) => {
	const getTotalQty = useCartStore(s => s.getTotalQty);
	const setCartWarning = useCartStore(s => s.setCartWarning);
	const incrementCartItem = useCartStore(s => s.incrementCartItem);
	const decrementCartItem = useCartStore(s => s.decrementCartItem);

	return (
		<li
			key={cartItem.id}
			className='flex items-center gap-4 px-6 py-4 shadow-sm bg-Very_light_grayish_blue rounded-3xl lg:gap-12'>
			<figure className='rounded-2xl bg-Grayish_blue w-28 lg:w-36'>
				<Image alt={cartItem.title} src={cartItem.image.thumb} className='rounded-2xl' />
				<figcaption className='sr-only'>product image</figcaption>
			</figure>

			<div className='flex flex-col text-2xl gap-y-2 lg:text-3xl'>
				<h3 className='capitalize text-Very_dark_blue'>{cartItem.title}</h3>
				<p className='flex items-center gap-2 text-lg capitalize text-Dark_grayish_blue lg:text-xl'>
					<span>size: {cartItem.size}</span>
					<span className='text-slate-300'>|</span>
					<span>color: {cartItem.color}</span>
				</p>
				<p className='flex items-center justify-between'>
					<span>${cartItem.price.toFixed(2)}</span>

					<DiscountTag discount={cartItem.discountPercentage} className='text-xl' />
				</p>
			</div>

			<div className='flex flex-col items-center gap-4 px-2 py-3 ml-auto bg-white rounded-3xl'>
				<Button
					title='decrement item quantity'
					onClick={() => {
						if (getTotalQty() === 1) {
							setCartWarning(true);
							return;
						}
						decrementCartItem(cartItem.id);
					}}
					className='p-3 rounded-full text-Dark_grayish_blue hover:text-Orange focus-visible:text-Orange focus-visible:outline-dotted active:translate-y-px hover:bg-Very_light_grayish_blue'>
					<MinusIcon />
				</Button>

				<span className='text-xl font-bold lg:text-2xl'>{cartItem.qty}</span>

				<Button
					title='increment item quantity'
					onClick={() => incrementCartItem(cartItem.id)}
					className='p-3 rounded-full text-Dark_grayish_blue hover:text-Orange focus-visible:text-Orange active:translate-y-px focus-visible:outline-dotted hover:bg-Very_light_grayish_blue'>
					<PlusIcon />
				</Button>
			</div>
		</li>
	);
};
