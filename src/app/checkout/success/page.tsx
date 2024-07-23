import { CheckoutSuccess } from './checkout-success';

export const metadata = {
	title: 'Order placed successfully',
	description: 'Sneakers shop checkout success page.'
};

const CheckoutSuccessPage = async () => {
	return <CheckoutSuccess />;
};

export default CheckoutSuccessPage;
