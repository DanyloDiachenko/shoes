import { product } from '@/data/featured-product';
import { Lightbox } from '@/components/product/lightbox';
import { ProductDetails } from '@/components/product/details';
import { ProductCarousel } from '@/components/product/carousel';

export const metadata = {
	title: product.title + ' | Sneaker - shop',
	description: product.description
};

const ProductPage = ({ params }: { params: { id: number } }) => {
	return (
		<section className='grid-cols-2 lg:grid justify-items-center lg:my-40'>
			<ProductCarousel />
			<ProductDetails id={params.id} />
			<Lightbox />
		</section>
	);
};

export default ProductPage;
