import Image from 'next/image';
import heroImg from '../../../public/assets/images/h2-400.png';
import heroImgWide from '../../../public/assets/images/main-h.png';
import { Button } from '../ui/button';

export const HeroSection = () => {
	return (
		<>
			<div className='hidden lg:grid grid-cols-[.80fr,1fr] bg-gradient-to-br from-Very_dark_blue via-neutral-900 to-Very_dark_blue/95'>
				<figure className='col-start-2 row-span-full'>
					<Image
						src={heroImgWide}
						alt='hero image'
						className='hidden lg:block'
						priority
					/>
					<figcaption className='sr-only'>main hero image</figcaption>
				</figure>

				<div className='flex flex-col row-start-1 pl-20 text-Very_light_grayish_blue col-span-full gap-60'>
					<h2 className='font-orbitron pt-40 translate-y-16 font-bold text-[15rem] italic text-transparent uppercase bg-gradient-to-br from-Very_dark_blue/5 via-Orange to-Very_dark_blue/5 bg-clip-text'>
						sneakers
					</h2>

					<div className='max-w-5xl px-4 pb-20 space-y-16'>
						<p className='text-3xl leading-normal first-letter:text-Orange first-letter:text-5xl first-letter:pr-1'>
							<span className='text-5xl font-bold text-Orange'>Step up</span> your sneaker
							game with our latest
							<span className='px-2 text-5xl font-bold text-Orange'>Premium</span>
							selection of coveted, rare, and must-have sneakers.
							<span className='pl-2 text-5xl font-bold text-Orange'>Shop now</span> and
							stay ahead of the curve with our ultimate style upgrade!
						</p>

						<Button hasRipple variant={'primary'} modifier={'outline'}>
							start shopping
						</Button>
					</div>
				</div>
			</div>

			<figure className='bg-Very_dark_blue'>
				<Image
					className='min-h-[40rem] max-h-[80rem] w-full object-cover lg:hidden'
					src={heroImg}
					alt='hero image'
					priority
				/>
				<figcaption className='sr-only'>main hero image for mobile</figcaption>
			</figure>
		</>
	);
};
