import { HeroSection } from '@/components/layouts/hero-section';
import { FeaturedProduct } from '@/components/product/featured';
import { SearchSection } from '@/components/layouts/search-section';
import { NewsletterSection } from '@/components/layouts/newsletter';
import { CategorySection } from '@/components/categories/category-section';

export const metadata = {
	title: 'Sneakers Shop',
	description: 'The best sneaker shop in the world.'
};

export default async function HomePage() {
	return (
		<main>
			<h1 className='sr-only'>Sneakers Shop</h1>
			<HeroSection />
			<SearchSection />
			<FeaturedProduct />
			<CategorySection />
			<NewsletterSection />
		</main>
	);
}
