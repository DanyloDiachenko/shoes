// 'use client';
import { useCartStore, useUIStore } from '@/store';
import { useEventListener } from '@/hooks/use-event-listener';
import { CartList } from './cart-modal-list';
import { Card } from '../ui/card';

export const CartModal = () => {
	const cart = useCartStore(s => s.cart);
	const cartModalState = useUIStore(s => s.cartModalStatus);
	const setCartStatus = useUIStore(s => s.setCartStatus);

	const subtotal = cart.reduce((acc, curItem) => acc + curItem.price * curItem.qty, 0);

	const cartObj = {
		insideHandler: () => setCartStatus(true),
		outsideHandler: () => setCartStatus(false)
	};

	const { ref: modalRef } = useEventListener<HTMLDivElement>(cartObj);

	return (
		<Card
			aria-modal
			ref={modalRef}
			state={cartModalState}
			variant={'header_modal'}
			className={'flex flex-col max-w-3xl'}>
			<div className='flex items-center justify-between p-8 tracking-wide capitalize border-b border-Grayish_blue/25'>
				<h2 className='text-3xl font-bold lg:text-4xl'>cart</h2>

				{cart.length > 0 && (
					<div className='text-xl font-semibold lg:text-2xl'>
						<span className='px-4 py-2 text-white rounded-md shadow bg-Orange'>
							$ {subtotal.toFixed(2)}
						</span>
					</div>
				)}
			</div>

			{cart.length > 0 ? (
				<CartList />
			) : (
				<p className='grid items-center flex-grow text-2xl font-bold text-center capitalize text-Grayish_blue'>
					<span>your cart is empty !</span>
				</p>
			)}
		</Card>
	);
};
