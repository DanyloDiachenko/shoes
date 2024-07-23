export const ChevronLeftIcon = ({ className = '' }) => {
	return (
		<svg
			width='30'
			height='30'
			className={className}
			viewBox='0 96 960 960'
			aria-label='navigate left icon'
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M560 816 320 576l240-240 56 56-184 184 184 184-56 56Z' />
		</svg>
	);
};

export const ChevronRightIcon = ({ className = '' }) => {
	return (
		<svg
			width='30'
			height='30'
			className={className}
			aria-label='navigate right icon'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 96 960 960'>
			<path d='M348 788q-11-11-11-28t11-28l156-156-156-156q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404 788q-11 11-28 11t-28-11Z' />
		</svg>
	);
};
