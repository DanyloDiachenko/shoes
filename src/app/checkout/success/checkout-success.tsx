'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useCartStore } from '@/store';
import { SuccessIcon } from '@/components/icons';
import { cm } from '@/lib/class-merger';

export const CheckoutSuccess = () => {
	const router = useRouter();
	const cart = useCartStore(s => s.cart);

	useEffect(() => {
		if (cart.length > 0) router.replace('/cart');
	}, [router, cart.length]);

	return (
		<section className='mx-8 my-40 lg:my-60'>
			<div className='grid items-center gap-8 text-center justify-items-center'>
				<h2
					className={cm([
						'text-5xl font-bold leading-snug text-transparent capitalize',
						'bg-gradient-to-br from-Very_dark_blue via-green-400 to-Very_dark_blue bg-clip-text'
					])}>
					thank you for your purchase
				</h2>
				<SuccessIcon className='w-96 h-96 stroke-indigo-400' />

				<p className='space-x-2 text-xl text-Grayish_blue lg:text-2xl lg:max-w-2xl'>
					<span>
						For any queries about your order please contact our customer support at
					</span>
					<a
						className='text-blue-400 opacity-75 hover:opacity-100'
						href='mailto:support@sneakers.com'>
						support@sneakers.com
					</a>
				</p>
			</div>
		</section>
	);
};
