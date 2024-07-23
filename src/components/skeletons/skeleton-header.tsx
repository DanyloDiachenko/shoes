export const SkeletonHeader = () => {
	return (
		<div className='flex items-center justify-between px-8 h-36'>
			<div className='flex items-center w-full gap-16 h-36'>
				<div className='w-12 h-10 p-4 rounded lg:w-52 lg:h-16 lg:mr-12 lg:rounded-xl bg-Dark_grayish_blue/20 animate-pulse'>
					&nbsp;
				</div>
				<div className='p-4 h-14 rounded-xl w-44 bg-Dark_grayish_blue/20 animate-pulse lg:hidden'>
					&nbsp;
				</div>
				{[...Array(5).keys()].map(idx => (
					<div
						key={idx}
						className='hidden h-8 p-2 rounded lg:block bg-Dark_grayish_blue/20 w-36 animate-pulse'>
						&nbsp;
					</div>
				))}
			</div>
			<div className='flex items-center gap-16'>
				<div className='rounded-full w-14 h-14 bg-Dark_grayish_blue/20 animate-pulse'>
					&nbsp;
				</div>
				<div className='rounded-full w-14 h-14 bg-Dark_grayish_blue/20 animate-pulse'>
					&nbsp;
				</div>
			</div>
		</div>
	);
};
