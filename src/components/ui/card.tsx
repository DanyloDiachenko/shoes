import { forwardRef, HTMLAttributes, RefObject, useEffect } from 'react';
import { cva, VariantProps } from 'cva';
import { cm } from '@/lib/class-merger';

type CardProps = {
	state?: boolean;
} & HTMLAttributes<HTMLDivElement> &
	VariantProps<typeof classes>;

const classes = cva('outline-none z-[100] bg-white rounded-3xl shadow-md', {
	variants: {
		variant: {
			header_modal: [
				'w-11/12 min-h-[25rem]',
				'absolute top-20 left-1/2 -translate-x-1/2 translate-y-0 opacity-0 invisible',
				'lg:left-full lg:-translate-x-[102%]',
				'aria-expanded:translate-y-20 aria-expanded:opacity-100 aria-expanded:visible',
				'transition-[transform,opacity] duration-300 ease-in-out'
			],
			action_modal: [
				'flex flex-col p-8 gap-16 min-h-[20rem] min-w-[32rem] w-11/12 max-w-4xl',
				'fixed top-1/2 left-1/2 -translate-y-2/3 -translate-x-1/2 opacity-0 invisible',
				'aria-expanded:-translate-y-1/2 aria-expanded:opacity-100 aria-expanded:visible',
				'transition-[transform,opacity] duration-300 delay-100'
			]
		}
	}
});

export const Card = forwardRef<HTMLDivElement, CardProps>(
	({ children, className = '', state, variant, ...props }, ref) => {
		useEffect(() => {
			const cardRef = (ref as RefObject<HTMLDivElement>).current;
			cardRef?.focus();
		}, [state, ref]);

		return (
			<div
				ref={ref}
				tabIndex={-1}
				aria-expanded={state}
				aria-hidden={state === false}
				className={cm(classes({ className, variant }))}
				{...props}>
				{children}
			</div>
		);
	}
);

Card.displayName = 'Card';
