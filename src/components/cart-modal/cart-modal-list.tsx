import { Button } from '../ui/button';
import { CartItem } from './cart-modal-item';
import { useCartStore, useUIStore } from '@/store';

export const CartList = () => {
	const cart = useCartStore(s => s.cart);
	const setCartStatus = useUIStore(s => s.setCartStatus);

	return (
		<section className='p-8'>
			<ul className='flex flex-col gap-4 mb-8'>
				{cart.map(item => (
					<CartItem key={item.id} item={item} />
				))}
			</ul>
			<Button
				hasRipple
				href='/cart'
				fullWidth
				variant='secondary_orange'
				className='mb-4 text-2xl'
				onClick={() => setCartStatus(false)}>
				<span>checkout</span>
			</Button>
		</section>
	);
};
