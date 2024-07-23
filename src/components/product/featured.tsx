'use client';
import Image from 'next/image';
import { useUserStore } from '@/store';
import { THistoryItem } from '@/types/history';
import { product } from '@/data/featured-product';

import { Button } from '../ui/button';
import { getMonth } from '@/lib/get-month';

const [productImg] = product.image.thumb as string[];

export const FeaturedProduct = () => {
	const addItemHistory = useUserStore(s => s.addItemHistory);

	const addToHistoryHandler = () => {
		const item: THistoryItem = {
			id: product.id,
			title: product.title,
			image: { full: '', thumb: productImg }
		};
		addItemHistory(item);
	};

	return (
		<section className='mx-8 my-20'>
			<h2 className='mb-16 text-3xl font-bold capitalize'>season deals</h2>

			{/* SMALL SCREEN */}
			<div className='flex-1 grid gap-y-4 grid-cols-[1fr,minmax(8rem,12rem)] items-center bg-Pale_orange rounded-3xl p-8 lg:hidden'>
				<h3 className='text-2xl font-semibold capitalize text-Dark_grayish_blue col-span-full'>
					{product.title}
				</h3>
				<div className='flex flex-col col-start-1 gap-4'>
					<p className='text-xl text-Dark_grayish_blue'>
						Up to
						<strong className='mx-2 text-Orange'>
							{product.discountPercentage * 100}%
						</strong>
						Discount <br />
						<span>valid till 15th {getMonth(1)}</span>
					</p>
					<Button
						hasRipple
						href={`/product/${product.id}`}
						variant={'secondary_black'}
						modifier={'gradient'}
						className='self-start px-6'
						onClick={addToHistoryHandler}>
						shop now
					</Button>
				</div>

				<figure className='col-start-2'>
					<Image src={productImg} alt={product.title} className='rounded-full' />
				</figure>
			</div>

			{/* LARGE SCREEN */}
			<div className='items-center justify-around hidden gap-8 lg:flex'>
				{[...Array(3).keys()].map(i => {
					return (
						<div
							key={i}
							className='flex-1 grid gap-y-4 grid-cols-[1fr,minmax(8rem,12rem)] items-center bg-Pale_orange rounded-3xl p-8'>
							<h3 className='text-2xl font-semibold capitalize text-Dark_grayish_blue col-span-full'>
								{product.title}
							</h3>
							<div className='flex flex-col col-start-1 gap-4'>
								<p className='text-xl text-Dark_grayish_blue'>
									Up to
									<strong className='mx-2 text-Orange'>
										{product.discountPercentage * 100}%
									</strong>
									Discount <br />
									<span>valid till 15th {getMonth(1)}</span>
								</p>
								<Button
									hasRipple
									href={`/product/${product.id}`}
									variant={'secondary_black'}
									modifier={'gradient'}
									className='self-start'
									onClick={addToHistoryHandler}>
									shop now
								</Button>
							</div>

							<figure className='col-start-2'>
								<Image src={productImg} alt={product.title} className='rounded-full' />
							</figure>
						</div>
					);
				})}
			</div>
		</section>
	);
};
