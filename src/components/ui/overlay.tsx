import { HTMLAttributes } from 'react';

export const Overlay = ({
	children,
	className = '',
	...props
}: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className={`fixed inset-0 min-h-screen z-[60] bg-black/75 flex flex-col items-center justify-center ${className}`}
			{...props}>
			{children}
		</div>
	);
};
