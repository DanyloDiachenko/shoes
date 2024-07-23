import { cm } from '@/lib/class-merger';
import { useProductStore } from '@/store';
import { CategoryItem } from './category-item';

export const CategoryList = () => {
	const products = useProductStore(s => s.products);
	const selectedCategory = useProductStore(s => s.selectedCategory);
	const filteredProducts = products.filter(p => p.category === selectedCategory);

	return (
		<ul
			className={cm([
				'grid grid-flow-col gap-8 px-2 my-8 min-h-[20rem]',
				'lg:justify-center lg:grid-flow-row lg:grid-cols-[repeat(auto-fit,24rem)]',
				'max-xs:overflow-auto max-xs:whitespace-pre-line max-xs:scrollbar-hide'
			])}>
			{filteredProducts.map(item => (
				<CategoryItem key={item.id} item={item} />
			))}
		</ul>
	);
};
