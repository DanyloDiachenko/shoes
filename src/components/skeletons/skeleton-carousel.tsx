export const SkeletonCarousel = () => {
	return (
		<div className='lg:w-[47rem] animate-pulse'>
			<div className='relative flex items-center bg-Grayish_blue min-w-[40rem] min-h-[40rem] lg:rounded-3xl overflow-hidden'>
				&nbsp;
			</div>

			<div className='items-center justify-between hidden mt-16 lg:flex'>
				{[...Array(4).keys()].map(idx => (
					<div key={idx} className={`rounded-2xl bg-Grayish_blue`}>
						<div className='w-40 h-40'>&nbsp;</div>
					</div>
				))}
			</div>
		</div>
	);
};
