import { Order } from '@/components/order/order';

export const generateMetadata = ({ params }: { params: { id: string } }) => {
	return {
		title: `Order summary | ${params.id}`,
		description: 'Sneakers shop order summary page.'
	};
};

const SingleOrderPage = ({ params }: { params: { id: string } }) => {
	return <Order id={params.id} />;
};

export default SingleOrderPage;
