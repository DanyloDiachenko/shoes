'use client';
import { SpinnerIcon } from '@/components/icons';

const Loading = () => {
	return (
		<div className='flex items-center justify-center min-h-[100dvh] gap-16 '>
			<SpinnerIcon className='scale-110 lg:scale-125' />
			<h2 className='text-3xl text-Dark_grayish_blue'>Loading</h2>
		</div>
	);
};

export default Loading;
