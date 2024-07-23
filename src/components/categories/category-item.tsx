'use client';
import Image from 'next/image';
import { useUserStore } from '@/store';
import { cm } from '@/lib/class-merger';
import { TProduct } from '@/types/product';
import { useHydratedState } from '@/hooks/use-hydrate';

import { Button } from '../ui/button';
import { FavorIcon } from '../icons/favorite';
import { DiscountTag } from '../ui/discount-tag';

export const CategoryItem = ({ item }: { item: TProduct }) => {
	const favoriteList = useUserStore(s => s.favoriteList);
	const toggleItemFavorite = useUserStore(s => s.toggleItemFavorite);

	const productImage = item.image.thumb as string;
	const favoredItem = favoriteList.find(i => i.id === item.id);
	const isFavored = useHydratedState(favoredItem && true, false);

	const handleFavoriteBtn = () => toggleItemFavorite(item);

	return (
		<li
			className={cm([
				'relative flex flex-col justify-between gap-4 rounded-3xl shadow',
				'min-w-[22rem] min-h-[33rem] p-8 m-4',
				'bg-Very_light_grayish_blue'
			])}>
			{item.discountPercentage > 0 && (
				<DiscountTag
					discount={item.discountPercentage}
					className='absolute left-0 min-w-[4rem] text-center'
				/>
			)}

			<figure
				className={cm([
					'relative flex items-center self-center justify-center w-56 h-56 isolate',
					'before:absolute before:-z-10 before:h-56 before:w-56',
					'before:-translate-x-1/2 before:top-1/2 before:left-1/2 before:-translate-y-1/2',
					'before:bg-gradient-to-br before:from-Orange/40 before:to-Orange/80',
					'before:rounded-full before:shadow-md'
				])}>
				<Image src={productImage} alt={item.title} loading={'lazy'} />
				<figcaption className='sr-only'>product image</figcaption>
			</figure>

			<div className='space-y-4 text-center capitalize'>
				<h3 className='text-2xl text-Dark_grayish_blue'>{item.title}</h3>
				<p className='text-xl text-Grayish_blue'>{item.category} sneaker</p>
				<div className='flex items-center justify-between'>
					<span className='text-2xl font-semibold text-Dark_grayish_blue'>
						${item.discountedPrice}
					</span>
					<Button hasRipple onClick={handleFavoriteBtn}>
						<span className='sr-only'>add sneaker to favorites</span>
						<FavorIcon fill={isFavored} />
					</Button>
				</div>
			</div>
		</li>
	);
};
