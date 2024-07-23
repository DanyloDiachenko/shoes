export const SkeletonItem = () => {
	return (
		<li
			className='w-96 min-h-[33rem] grid items-start gap-16 bg-Very_light_grayish_blue p-8 rounded-3xl shadow-sm animate-pulse'
			aria-hidden>
			<figure className='rounded-full w-52 h-52 justify-self-center bg-Grayish_blue'></figure>

			<div className='space-y-4'>
				<h3 className='p-4 rounded-full bg-Grayish_blue'></h3>
				<p className='w-2/3 p-4 mx-auto rounded-full bg-Grayish_blue'></p>
				<p className='flex items-center justify-between'>
					<span className='w-1/2 p-4 rounded-full bg-Grayish_blue'></span>
					<button className='p-4 rounded-full bg-Grayish_blue'></button>
				</p>
			</div>
		</li>
	);
};
