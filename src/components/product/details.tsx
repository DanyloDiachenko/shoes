'use client';
import { useEffect, useState } from 'react';
import { useCartStore } from '@/store';
import { TCartItem } from '@/types/cart';
import { product } from '@/data/featured-product';

import { Button } from '../ui/button';
import { DiscountTag } from '../ui/discount-tag';
import { MinusIcon, PlusIcon, CartIcon } from '../icons';
import { Accordion } from '../ui/accordion';

export const ProductDetails = ({ id }: { id: number }) => {
	const [showMsg, setShowMsg] = useState(false);
	const cart = useCartStore(s => s.cart);
	const addCartItem = useCartStore(s => s.addCartItem);

	const itemInCart = cart.find(i => i.id === id);
	const qty = itemInCart ? itemInCart.qty : 0;
	const [itemQty, setItemQty] = useState(qty);

	useEffect(() => {
		if (!itemInCart) {
			setItemQty(0);
			setShowMsg(false);
		}
	}, [itemInCart]);

	const handleItemToCart = () => {
		if (itemQty === 0 || itemQty === itemInCart?.qty) {
			setShowMsg(false);
			return;
		}

		setShowMsg(true);
		const cartItem: TCartItem = {
			id,
			qty: itemQty,
			title: product.title,
			price: product.discountedPrice,
			image: { full: '', thumb: (product.image.thumb as string[])[0] },
			size: product.size,
			color: product.color,
			availableQty: product.availableQty,
			discountPercentage: product.discountPercentage
		};
		addCartItem(cartItem);
	};

	return (
		<section className='m-8 mb-40 justify-self-start lg:max-w-3xl lg:m-0'>
			<div className='grid gap-4 mb-8'>
				<h3 className='text-xl font-bold tracking-wider uppercase text-Orange/80'>
					sneaker company
				</h3>
				<h2 className='mb-4 text-5xl font-bold capitalize text-Very_dark_blue'>
					{product.title}
				</h2>

				<Accordion header='Product description'>
					<p className='px-8 py-12 text-2xl lg:text-[1.6rem]'>{product.description}</p>
				</Accordion>
			</div>

			<div className='grid gap-8'>
				<div className='flex items-center justify-between lg:flex-col lg:items-start lg:gap-8'>
					<div className='flex items-center gap-8'>
						<span className='text-4xl font-bold'>
							${product.discountedPrice.toFixed(2)}
						</span>

						<DiscountTag discount={product.discountPercentage} />
					</div>
					<span className='text-2xl font-bold line-through text-Grayish_blue'>
						${product.price.toFixed(2)}
					</span>
				</div>
			</div>

			<div className='lg:flex lg:items-center lg:gap-6'>
				<div className='relative flex items-center justify-between gap-4 px-4 py-6 my-16 bg-Very_light_grayish_blue rounded-xl lg:w-1/2'>
					<Button
						title='decrease quantity'
						onClick={() => {
							setItemQty(pv => (pv > 0 ? --pv : 0));
							setShowMsg(false);
						}}
						rounded={'full'}
						className='p-2 focus-visible:outline-dotted active:translate-y-px hover:bg-Very_light_grayish_blue'>
						<MinusIcon className='stroke-Orange w-7 h-7' />
					</Button>

					<span className='text-2xl font-bold lg:text-2xl'>
						{itemQty} / {product.availableQty - itemQty}
					</span>

					<Button
						title='increase quantity'
						onClick={() => {
							setItemQty(pv => (pv === 10 ? 10 : ++pv));
							setShowMsg(false);
						}}
						rounded={'full'}
						className='p-2 focus-visible:outline-dotted active:translate-y-px hover:bg-Very_light_grayish_blue'>
						<PlusIcon className='stroke-Orange w-7 h-7' />
					</Button>

					<p
						className={`absolute top-1/2 left-1/2 -translate-x-1/2 pt-4 text-2xl text-green-500 font-bold capitalize ${
							showMsg ? 'translate-y-10 opacity-100 visible' : 'opacity-0 invisible'
						} transition-[transform,opacity] duration-300`}>
						cart updated
					</p>
				</div>

				<Button
					hasRipple
					fullWidth
					title='add item to cart'
					variant={'secondary_orange'}
					onClick={handleItemToCart}
					className='flex items-center justify-center gap-8 shadow-xl shadow-Orange/30 lg:w-2/3'>
					<CartIcon className='w-8 h-8 lg:w-10 lg:h-10 fill-Very_light_grayish_blue' />
					<span>add to cart</span>
				</Button>
			</div>
		</section>
	);
};
