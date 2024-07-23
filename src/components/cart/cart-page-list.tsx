import { useCartStore } from '@/store';
import { CartPageItem } from './cart-page-item';

export const CartPageList = () => {
	const cart = useCartStore(s => s.cart);

	return (
		<ul className='flex flex-col gap-8 my-16 lg:my-0'>
			{cart.map(item => (
				<CartPageItem key={item.id} cartItem={item} />
			))}
		</ul>
	);
};
