'use client';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useProductStore, useUIStore } from '@/store';
import { useCarousel } from '@/hooks/use-carousel';
import { product } from '@/data/featured-product';
import { cm } from '@/lib/class-merger';

import { ToolTip } from '../ui/tooltip';
import { Button } from '../ui/button';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from '../icons';

export const ProductCarousel = ({ inLightbox = false }) => {
	const mainCarouselRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);
	const curImageIdx = useProductStore(s => s.curImageIdx);
	const curImageHandler = useProductStore(s => s.curImageHandler);
	const setLightboxStatus = useUIStore(s => s.setLightboxStatus);
	const { carouselRef, carouselImagesRef, closeButtonRef, prevBtnRef, nextBtnRef } =
		useCarousel(inLightbox);

	const { full: prodFullImgs, thumb: prodThumbImgs } = product.image;

	const displayPrevImage = useCallback(() => {
		curImageHandler(pv => {
			return pv === 0 ? 3 : --pv;
		});
	}, [curImageHandler]);

	const displayNextImage = useCallback(() => {
		curImageHandler(pv => {
			return pv === 3 ? 0 : ++pv;
		});
	}, [curImageHandler]);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft' && !e.altKey) {
				if (nextBtnRef.current && prevBtnRef.current) {
					nextBtnRef.current.blur();
					prevBtnRef.current.focus();
				}
				if (inLightbox) return;
				displayPrevImage();
			}

			if (e.key === 'ArrowRight' && !e.altKey) {
				if (nextBtnRef.current && prevBtnRef.current) {
					prevBtnRef.current.blur();
					nextBtnRef.current.focus();
				}
				if (inLightbox) return;
				displayNextImage();
			}
		};

		document.addEventListener('keydown', handler);
		return () => {
			document.removeEventListener('keydown', handler);
		};
	}, [displayNextImage, displayPrevImage, inLightbox, nextBtnRef, prevBtnRef]);

	useEffect(() => {
		if (mainCarouselRef.current && inLightbox) {
			mainCarouselRef.current.focus();
			mainCarouselRef.current.style.outline = 'none';
		}
	}, [inLightbox]);

	return (
		<>
			<div ref={carouselRef} className='lg:max-w-3xl'>
				{inLightbox && (
					<Button
						ref={closeButtonRef}
						onClick={() => setLightboxStatus(false)}
						className={cm([
							'group p-1 rounded -translate-y-3',
							'focus-visible:outline-offset-4 focus-visible:outline-Light_grayish_blue'
						])}>
						<ToolTip
							tip={'Close lightbox or press Esc key'}
							className='place-self-start after:-top-4'
							renderOnHover>
							<CloseIcon className='group-hover:fill-Orange fill-white' />
						</ToolTip>
					</Button>
				)}

				{/* FULL IMAGE */}
				<div
					ref={mainCarouselRef}
					tabIndex={0}
					className={cm([
						'relative outline-none group rounded-3xl',
						'lg:focus-visible:outline-Orange lg:focus-visible:outline-1'
					])}>
					<figure className='relative flex items-center overflow-hidden lg:rounded-3xl'>
						{(prodFullImgs as string[]).map((image, idx) => (
							<Image
								priority
								src={image}
								key={`slide_${idx}`}
								alt='sneakers image'
								className='transition-transform duration-500 ease-in-out'
								style={{ transform: `translateX(-${curImageIdx * 100}%)` }}
							/>
						))}
						<figcaption className='sr-only'>showcasing the sneaker images</figcaption>
					</figure>

					{/* ARROWS */}
					<div>
						<ToolTip
							tip={'previous image'}
							className={cm([
								'after:-top-12 after:duration-400',
								'absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2'
							])}
							renderTime={1000}
							renderCenter
							renderOnHover>
							<Button
								ref={prevBtnRef} 
								variant={'carousel'}
								onClick={displayPrevImage}
								className={cm([
									'group/prev-btn lg:hidden',
									'absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2',
									'group-hover:block group-focus-within:block',
									inLightbox && 'lg:block -translate-x-1/2'
								])}>
								<ChevronLeftIcon className='group-hover/prev-btn:fill-Orange' />
							</Button>
						</ToolTip>

						<ToolTip
							tip={'next image'}
							className={cm([
								'after:-top-12 after:duration-400',
								'absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2'
							])}
							renderTime={1000}
							renderCenter
							renderOnHover>
							<Button
								ref={nextBtnRef}
								variant={'carousel'}
								onClick={displayNextImage}
								className={cm([
									'group/next-btn lg:hidden',
									'absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2 z-30',
									'group-hover:block group-focus-within:block',
									inLightbox && 'lg:block translate-x-1/2'
								])}>
								<ChevronRightIcon className='group-hover/next-btn:fill-Orange' />
							</Button>
						</ToolTip>
					</div>

					{/* SHOWCASE BUTTON */}
					<div
						className={cm([
							'hidden w-full px-4',
							'lg:flex items-center justify-between',
							'absolute bottom-4 translate-y-5 opacity-0 transition-all duration-300',
							'tracking-wider text-Very_light_grayish_blue',
							'group-hover:translate-y-0 group-hover:opacity-100',
							'group-focus-within:opacity-100 group-focus-within:translate-y-0',
							inLightbox && 'lg:hidden'
						])}>
						<p className='p-4 text-xl rounded-md bg-Very_dark_blue/50 ring-1 ring-Very_light_grayish_blue'>
							Slide with <span>⬅</span> and <span>➡</span>
						</p>

						<Button
							hasRipple
							onClick={() => setLightboxStatus(true)}
							className={`overflow-hidden text-xl bg-Very_dark_blue/50 rounded-md p-4 ring-1 ring-Very_light_grayish_blue`}>
							Showcase
						</Button>
					</div>
				</div>

				{/* THUMBNAIL IMAGES */}
				<div className='hidden mt-16 lg:items-center lg:justify-between lg:flex'>
					{(prodThumbImgs as string[]).map((imgThumb, idx) => (
						<Button
							ref={btn => {
								if (btn) carouselImagesRef[idx] = btn;
							}}
							key={`thumb_${idx}`}
							aria-current={idx === curImageIdx}
							onClick={() => curImageHandler(idx)}
							className={cm([
								'overflow-hidden rounded-2xl border-Orange shadow shadow-Grayish_blue',
								'[&[aria-current="true"]]:border-2 [&[aria-current="true"]]:after:bg-Pale_orange',
								'after:absolute after:inset-0  after:opacity-50',
								'focus-visible:outline-offset-2',
								inLightbox && 'shadow-none focus-visible:outline-Light_grayish_blue'
							])}>
							<Image src={imgThumb} alt='sneakers thumbnail image' className='w-40' />
						</Button>
					))}
				</div>
			</div>
		</>
	);
};
