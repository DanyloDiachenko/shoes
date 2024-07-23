'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useEffect, useState } from 'react';

import { useCartStore } from '@/store';
import { ChevronLeftIcon, DeleteIcon, CopyIcon } from '../icons';
import { CartTotalSummary } from './cart-total-summary';
import { PromoCodeInput } from './promo-code';
import { CartPageList } from './cart-page-list';
import { ActionModal } from '../ui/action-modal';
import { Button } from '../ui/button';
import { ToolTip } from '../ui/tooltip';

import sideImg from '../../../public/assets/images/chkout.jpg';
import emptyCartImg from '../../../public/assets/images/cart-empty.png';

export const Cart = () => {
	const router = useRouter();
	const [modal, setModal] = useState(false);
	const cart = useCartStore(s => s.cart);
	const clearCart = useCartStore(s => s.clearCart);
	const showWarning = useCartStore(s => s.showWarning);
	const setCartWarning = useCartStore(s => s.setCartWarning);

	useEffect(() => {
		if (showWarning) setModal(true);
	}, [showWarning]);

	const handleCopy: MouseEventHandler = async e => {
		e.preventDefault();
		const textToCopy = 'ILoveYou_50';
		if ('clipboard' in navigator) {
			navigator.clipboard.writeText(textToCopy);
		} else {
			alert(
				'Sorry, but the copy to clipboard feature is not supported with your browser! 😔'
			);
		}
	};

	if (cart.length === 0)
		return (
			<section className='my-16'>
				<h2 className='text-3xl font-bold text-center text-Dark_grayish_blue lg:text-5xl lg:pb-16'>
					Your cart is empty ! <br /> start shopping
				</h2>
				<figure className='flex items-center justify-center mx-auto my-20 rounded-full bg-Very_light_grayish_blue w-80 h-80 lg:w-96 lg:h-96'>
					<Image src={emptyCartImg} alt='cart is empty image' className='lg:w-full' />
				</figure>
			</section>
		);

	return (
		<>
			<ActionModal
				state={modal}
				variant={'clear_cart'}
				onConfirm={() => clearCart()}
				onCancel={() => {
					setModal(false);
					setCartWarning(false);
				}}
			/>

			<section className='mx-8 my-16'>
				{/* HEADER */}
				<div className='relative mb-40'>
					<Button
						title='previous page'
						onClick={() => router.back()}
						className='absolute left-0 flex items-center justify-center w-16 h-16 p-0 -translate-y-1/2 group bg-Light_grayish_blue top-1/2'>
						<ChevronLeftIcon className='group-hover:fill-Orange group-focus-visible:fill-Orange' />
					</Button>

					<h2 className='text-4xl font-bold text-center text-Very_dark_blue'>My Cart</h2>

					<div className='absolute w-full px-6 py-4 mt-4 text-center rounded-2xl top-16 bg-Very_light_grayish_blue'>
						<span className='text-xl font-semibold text-Dark_grayish_blue'>
							Up to <span className='mx-1 text-Orange'>50%</span> discount, enter promo
							code
							<ToolTip
								onClick={handleCopy}
								tip={'copied ✅'}
								title='copy promo code'
								className='inline-flex gap-2 mx-2 cursor-pointer text-Orange'>
								<span>ILoveYou_50</span>
								<CopyIcon />
							</ToolTip>
							on checkout!
						</span>
					</div>

					<Button
						title='clear cart'
						onClick={() => setModal(true)}
						className='absolute right-0 flex items-center justify-center w-16 h-16 -translate-y-1/2 rounded-lg group top-1/2 bg-Light_grayish_blue'>
						<DeleteIcon className='fill-Very_dark_blue group-hover:fill-Orange group-focus-visible:fill-Orange' />
					</Button>
				</div>

				{/* CONTENT */}
				<div className='lg:mt-36 lg:mx-20 lg:grid lg:grid-cols-[1fr,.75fr] lg:gap-16'>
					<div>
						<CartPageList />
						<PromoCodeInput />
						<CartTotalSummary />
					</div>

					<figure className='hidden lg:block min-h-[50rem]'>
						<Image src={sideImg} alt='cart side image' priority />
						<figcaption className='sr-only'>checkout side image</figcaption>
					</figure>
				</div>
			</section>
		</>
	);
};
