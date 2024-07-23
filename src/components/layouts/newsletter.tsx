import Image from 'next/image';

import { Button } from '../ui/button';
import side from '../../../public/assets/images/side.png';
import wide from '../../../public/assets/images/h2-1440.png';
import small from '../../../public/assets/images/h1-1000.png';
import { Input } from '../ui/input';

export const NewsletterSection = () => {
	return (
		<section className='bg-Very_dark_blue '>
			<figure>
				<Image
					src={small}
					alt='newsletter image'
					className='lg:hidden'
					loading={'lazy'}
				/>
				<Image
					src={wide}
					alt='newsletter image'
					className='hidden lg:block'
					loading={'lazy'}
				/>
				<figcaption className='sr-only'>main image for the newsletter section</figcaption>
			</figure>

			<div className='grid lg:grid-cols-[50rem,1fr] items-center justify-items-center'>
				<figure className='hidden lg:block'>
					<Image src={side} alt='newsletter image' />
					<figcaption className='sr-only'>
						side image for the newsletter section
					</figcaption>
				</figure>

				<div className='py-40 mx-8 text-Very_light_grayish_blue'>
					<h2 className='text-3xl text-center capitalize'>signup for our newsletter</h2>

					<div className='flex items-center justify-between gap-2 mt-16'>
						<Input
							type='text'
							id='newsletter'
							rounded={'left'}
							variant={'newsletter'}
							placeholder='Enter your email'
						/>
						<Button
							hasRipple
							rounded={'right'}
							variant={'secondary_orange'}
							className='focus-visible:outline-offset-1 focus-visible:outline-white'>
							Signup
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
