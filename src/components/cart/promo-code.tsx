import { FormEvent, useRef, useState } from 'react';
import { useEventListener } from '@/hooks/use-event-listener';
import { PromoCodes, useCartStore } from '@/store';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

type Promo = {
	status: 'valid' | 'invalid' | '';
	message: 'invalid promo codes' | 'promo code added successfully' | '';
};
const promo: Promo = { status: '', message: '' };

export const PromoCodeInput = () => {
	const status = useRef('');
	const [promoCode, setPromoCode] = useState(promo);
	const setCartDiscount = useCartStore(s => s.setCartDiscount);
	const { ref: promoRef } = useEventListener<HTMLInputElement>({
		outsideHandler: () => {
			if (status.current === 'valid' || promoRef.current?.value === '') {
			}
			setPromoCode({ status: '', message: '' });
		}
	});

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const promoText = promoRef?.current;
		const fullDisc: PromoCodes = 'ImBroke_100';
		const halfDisc: PromoCodes = 'ILoveYou_50';

		if (!promoText || promoText.value === '') {
			setPromoCode({ status: '', message: '' });
			return;
		}

		if (
			!promoText.value.match(`^${fullDisc}$`) &&
			!promoText.value.match(`^${halfDisc}$`)
		) {
			setPromoCode({ status: 'invalid', message: 'invalid promo codes' });
			return;
		}

		setCartDiscount(promoText.value as PromoCodes);
		setPromoCode({
			status: 'valid',
			message: 'promo code added successfully'
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='relative flex items-center justify-between max-w-xl gap-2 mx-auto my-8 lg:my-16'>
			<Input
				type='text'
				ref={promoRef}
				id='promo-code'
				autoComplete='off'
				placeholder='Enter promo code'
				wrapperStyle='flex-grow'
				variant={'promo'}
				rounded={'left'}
			/>
			<Button
				hasRipple
				type='submit'
				title='apply promo code'
				rounded={'right'}
				variant={'secondary_orange'}>
				Apply
			</Button>
			<p
				className={`absolute top-20 left-1/2 -translate-x-1/2 text-xl text-center w-full font-bold tracking-wide transition-all ${
					promoCode.status === 'valid' ? 'text-green-400' : 'text-Orange'
				} ${
					promoCode.message
						? 'translate-y-0 opacity-100 visible'
						: '-translate-y-5 opacity-0 invisible'
				}`}>
				{promoCode.message}
			</p>
		</form>
	);
};
