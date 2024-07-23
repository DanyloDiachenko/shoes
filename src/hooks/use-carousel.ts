import { useUIStore } from '@/store';
import { useEffect, useRef } from 'react';

export const useCarousel = (inLightbox: boolean) => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const carouselImagesRef = useRef<HTMLButtonElement[]>([]);
	const closeBtnRef = useRef<HTMLButtonElement>(null);
	const prevBtnRef = useRef<HTMLButtonElement>(null);
	const nextBtnRef = useRef<HTMLButtonElement>(null);
	const setLightboxStatus = useUIStore(s => s.setLightboxStatus);

	useEffect(() => {
		if (inLightbox === false) return;
		if (!carouselRef.current) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Tab') {
				e.preventDefault();

				const currentIndex = carouselImagesRef.current.findIndex(
					item => item === document.activeElement
				);
				const nextIndex =
					currentIndex === carouselImagesRef.current.length - 1 ? 0 : currentIndex + 1;
				carouselImagesRef.current?.[nextIndex]?.focus();
			}
			if (e.key === 'Escape') setLightboxStatus(false);
		};

		carouselImagesRef.current.forEach((item, index) => {
			item.tabIndex = index === 0 ? 0 : -1;
		});

		const carousel = carouselRef.current;
		carousel.addEventListener('keydown', handleKeyDown);

		return () => {
			carousel.removeEventListener('keydown', handleKeyDown);
		};
	}, [inLightbox, setLightboxStatus]);

	useEffect(() => {
		if (inLightbox === false) return;

		if (!closeBtnRef.current) return;
		closeBtnRef.current.tabIndex = -1;
		carouselImagesRef.current.push(closeBtnRef.current);

		if (!prevBtnRef.current) return;
		prevBtnRef.current.tabIndex = -1;
		carouselImagesRef.current.push(prevBtnRef.current);

		if (!nextBtnRef.current) return;
		nextBtnRef.current.tabIndex = -1;
		carouselImagesRef.current.push(nextBtnRef.current);
	}, [inLightbox]);

	return {
		carouselRef,
		carouselImagesRef: carouselImagesRef.current,
		closeButtonRef: closeBtnRef,
		prevBtnRef,
		nextBtnRef
	};
};
