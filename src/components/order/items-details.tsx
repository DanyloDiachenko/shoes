import Image from 'next/image';
import { TCartItem } from '@/types/cart';
import { SectionWrapper } from './section-wrapper';

export const ItemsDetails = ({ currentOrderCart }: { currentOrderCart: TCartItem[] }) => {
	return (
		<SectionWrapper className='row-start-2 xl:col-span-2'>
			<h3 className='text-3xl font-bold xl:text-4xl text-Very_dark_blue/80'>
				Items details
			</h3>

			<ul className='flex flex-col gap-8 xl:gap-16'>
				{currentOrderCart.map(item => {
					const originalPrice = item.price / (1 - item.discountPercentage);
					return (
						<li
							key={item.id}
							className='group grid grid-cols-[minmax(auto,12rem),minmax(18rem,1fr)] gap-6 items-center xl:gap-12'>
							<figure className='rounded-3xl bg-Grayish_blue'>
								<Image
									alt={item.title}
									src={item.image.thumb}
									className='w-full rounded-3xl'
								/>
								<figcaption className='sr-only'>product image</figcaption>
							</figure>

							<div className='grid pb-8 border-b-2 border-Light_grayish_blue group-last:border-0 text-xl capitalize text-Dark_grayish_blue gap-2 xl:pb-16 xl:grid-cols-[.75fr,1fr] xl:text-2xl'>
								<h4 className='mb-4 text-2xl font-bold text-Dark_grayish_blue xl:text-3xl'>
									{item.title}
								</h4>

								<p className='flex items-center gap-8 mb-4 xl:justify-between xl:row-start-1 xl:col-start-2'>
									<span className='space-x-4'>
										<b className='text-2xl xl:text-3xl'>${item.price.toFixed(2)}</b>
										<span className='text-xl font-bold line-through text-Dark_grayish_blue/50 xl:text-2xl'>
											${originalPrice.toFixed(2)}
										</span>
									</span>

									<b className='text-2xl xl:text-3xl'>{item.qty}</b>

									<span className='flex items-center gap-4'>
										<span className='px-2 py-1 text-xl font-bold rounded-md bg-Pale_orange text-Orange xl:text-2xl'>
											{item.discountPercentage * 100}%
										</span>
									</span>
								</p>

								<div className='space-y-2 xl:space-y-4'>
									<p>
										color : <b className='text-2xl'>{item.color}</b>
									</p>

									<p>
										size : <b className='text-2xl'>{item.size}</b>
									</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</SectionWrapper>
	);
};
