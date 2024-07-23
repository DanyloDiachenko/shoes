import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { PromoCodes, useCartStore, useUserStore } from '@/store';
import { cm } from '@/lib/class-merger';
import { TOrder } from '@/types/order';
import { wait } from '@/lib/wait';

import { ToolTip } from '../ui/tooltip';
import { Button } from '../ui/button';
import { Accordion } from '../ui/accordion';
import { CloseIcon, InfoIcon, SpinnerIcon } from '../icons';

export const CartTotalSummary = () => {
	const router = useRouter();
	const { data: session } = useSession();
	const [isExpanded, setIsExpanded] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);

	const state = useCartStore(s => s);
	const addOrder = useUserStore(s => s.addOrder);

	const promoCode: PromoCodes =
		state.cartDiscount === 'full_disc'
			? 'ImBroke_100'
			: state.cartDiscount === 'half_disc'
			? 'ILoveYou_50'
			: '';

	const subtotal = state.getSubtotal();
	const totalDiscount = state.getTotalDiscount();
	const deliveryFees = state.getDeliveryFees();
	const totalCart = subtotal - totalDiscount + deliveryFees;

	const handleCheckout = () => {
		setIsProcessing(true);

		if (!session?.user.email) {
			signIn().then(() => setIsProcessing(false));
			return;
		}

		const newOrder: TOrder = {
			id: Math.random().toString(36).substring(6),
			cart: state.cart,
			cartDiscount: state.cartDiscount,
			subtotal,
			totalDiscount,
			deliveryFees,
			totalDue: totalCart,
			date: new Date().toLocaleString().replace(',', ' at ')
		};

		addOrder(newOrder);
		wait(2000).then(() => {
			setIsProcessing(false);
			state.setCartDiscount('');
			state.clearCart();
			router.push('/checkout/success');
		});
	};

	return (
		<div className='flex flex-col gap-8 my-16 text-xl capitalize lg:text-2xl'>
			<Accordion
				initState={false}
				header='Cart summary'
				setState={setIsExpanded}
				bodyStyle='bg-transparent shadow-sm'>
				{/* Wrapper */}
				<div className='relative p-8'>
					<div className='flex flex-col gap-4 mb-8 font-medium lg:font-normal'>
						{/* SUBTOTAL */}
						<p className='flex items-center justify-between text-Dark_grayish_blue'>
							<span>subtotal</span>
							<span>${subtotal.toFixed(2)}</span>
						</p>

						{/* PROMO */}
						<div className='flex items-center justify-between text-Orange'>
							<span>promo code</span>
							<div className={`group normal-case flex items-center gap-4`}>
								<Button
									tabIndex={isExpanded ? 0 : -1}
									title='remove promo code'
									className={cm([
										!promoCode ? 'hidden' : 'block',
										'rounded-full lg:p-1 bg-Pale_orange',
										'focus-visible:outline-dotted'
									])}
									onClick={() => state.setCartDiscount('')}>
									<CloseIcon className='scale-[.6] fill-Dark_grayish_blue hover:fill-Orange lg:scale-75' />
								</Button>
								<span>{promoCode ? promoCode : 'no code'}</span>
							</div>
						</div>

						{/* DISCOUNT */}
						<div className='flex items-center justify-between text-green-500'>
							<span>you just saved</span>
							<span>${totalDiscount.toFixed(2)}</span>
						</div>

						{/* DELIVERY */}
						<div className='flex items-center justify-between text-indigo-500'>
							<ToolTip
								renderOnHover
								className='flex items-center gap-2'
								tip={`Eligible free shipping on purchases over $${state.shippingLimit}`}>
								delivery fee
								<InfoIcon className='fill-current' />
							</ToolTip>

							<span className='normal-case'>
								{deliveryFees ? `$${deliveryFees.toFixed(2)}` : 'free shipping'}
							</span>
						</div>
					</div>
					{/* Promo Message */}
					<span
						className={cm([
							'absolute -bottom-3 left-0 text-xl px-8 py-2 text-Dark_grayish_blue normal-case',
							'transition-[transform,opacity] duration-200 -translate-y-5 opacity-100 visible',
							!promoCode && '-translate-y-12 opacity-0 invisible'
						])}>
						applied
						<b className='text-2xl tracking-wide text-Orange'>
							{state.cartDiscount === 'full_disc' ? ' 100% ' : ' 50% '}
						</b>
						discount on total
					</span>
				</div>
			</Accordion>

			{/* TOTAL */}
			<div className='relative flex items-center justify-between overflow-hidden text-2xl font-bold lg:text-3xl'>
				<span className='uppercase'>total bag</span>
				<span
					className={cm([
						'text-Very_dark_blue',
						'transition-all duration-500 ease-in-out',
						promoCode && 'line-through text-Grayish_blue -translate-x-36'
					])}>
					${totalCart.toFixed(2)}
				</span>
				<span
					className={cm([
						'absolute right-0 opacity-0 invisible',
						'transition-all duration-500 translate-x-32 ease-in-out',
						promoCode && 'translate-x-0 opacity-100 visible'
					])}>
					{promoCode === 'ILoveYou_50' ? `$${(totalCart / 2).toFixed(2)}` : `$0.00`}
				</span>
			</div>

			<Button
				hasRipple
				variant={'secondary_orange'}
				onClick={handleCheckout}
				className='py-6 mt-8 text-2xl lg:self-center lg:w-1/2'>
				<span>Place your order</span>
				{isProcessing && (
					<SpinnerIcon className='absolute right-0 -translate-x-10 -translate-y-1/2 top-1/2' />
				)}
			</Button>
		</div>
	);
};
