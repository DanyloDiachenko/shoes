'use client';
import { cm } from '@/lib/class-merger';
import { useProductStore } from '@/store';
import { TProductCategory } from '@/types/product';

import { Button } from '../ui/button';
import { CategoryList } from './category-list';

const categories: TProductCategory[] = [
	'sports',
	'fashion',
	'gym',
	'running',
	'training'
];

export const CategorySection = () => {
	const selectedCategory = useProductStore(s => s.selectedCategory);
	const setSelectedCategory = useProductStore(s => s.setSelectedCategory);

	return (
		<section className='flex flex-col gap-4 mx-8 mt-20 mb-28'>
			<h2 className='text-3xl font-bold text-Very_dark_blue'>Categories</h2>

			<div className='flex items-center gap-8 px-2 py-12 overflow-auto scrollbar-hide whitespace-nowrap'>
				{categories.map(category => (
					<Button
						key={category}
						rounded={'full'}
						className={cm([
							'p-4 font-medium text-Grayish_blue border border-Grayish_blue lg:text-xl',
							'hover:text-Dark_grayish_blue',
							'[&[aria-current="true"]]:text-Dark_grayish_blue [&[aria-current="true"]]:border-Dark_grayish_blue',
							'focus-visible:outline-offset-2 focus-visible:outline-1 focus-visible:outline-dashed'
						])}
						aria-current={selectedCategory === category}
						onClick={() => setSelectedCategory(category)}>
						<span>{category}</span>
					</Button>
				))}
			</div>

			<CategoryList />
		</section>
	);
};
