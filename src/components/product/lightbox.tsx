'use client';
import { useUIStore } from '@/store';
import { Overlay } from '../ui/overlay';
import { ProductCarousel } from './carousel';

export const Lightbox = () => {
	const lightboxIsOpen = useUIStore(s => s.lightboxStatus);
	const setLightboxStatus = useUIStore(s => s.setLightboxStatus);

	if (!lightboxIsOpen) return null;

	return (
		<>
			<Overlay onClick={() => setLightboxStatus(false)} />
			<div className='fixed z-[70] flex flex-col gap-4 -translate-y-1/2 top-1/2'>
				<ProductCarousel inLightbox={lightboxIsOpen} />
			</div>
		</>
	);
};
