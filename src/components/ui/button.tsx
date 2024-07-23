'use client';
import {
	useRef,
	useState,
	forwardRef,
	ForwardedRef,
	PointerEventHandler,
	ComponentPropsWithRef
} from 'react';
import Link from 'next/link';
import { VariantProps, cva } from 'cva';
import { cm } from '@/lib/class-merger';
import { Ripple } from './ripple';

export type RippleDimension = { size: number; x: number; y: number };

// prettier-ignore
type ButtonProps = {
	href?: string;
	hasRipple?: boolean;
	rippleColor?: string;
	exact?: boolean;
} & ComponentPropsWithRef<'button'> & ComponentPropsWithRef<'a'> & VariantProps<typeof buttonClasses>;

const buttonClasses = cva(
	[
		'relative block rounded-lg outline-none',
		'font-semibold tracking-wider text-center text-Very_light_grayish_blue text-xl lg:text-2xl capitalize',
		'focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-Dark_grayish_blue'
	],
	{
		variants: {
			variant: {
				default: [
					'py-4 px-6 bg-transparent text-Grayish_blue',
					'hover:ring-0 hover:bg-Grayish_blue hover:text-white',
					'focus-visible:text-current'
				],
				primary: [
					'py-4 px-6 bg-Orange',
					'origin-bottom duration-100',
					'active:scale-[.98]'
				],
				secondary_orange: [
					'px-4 py-5 bg-Orange font-bold',
					'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-Orange'
				],
				secondary_black: [
					'p-4 lg:p-6 bg-Very_dark_blue origin-bottom',
					'focus-visible:outline-2 focus-visible:outline-white',
					'active:scale-[.98]'
				],
				featured: [
					'py-3 px-4 shadow-lg ',
					'origin-bottom duration-100',
					'active:scale-[.98]'
				],
				link: [
					'flex items-center h-[inherit] rounded-none border-b-2 border-transparent ',
					'focus-visible:rounded-sm focus-visible:outline-1 focus-visible:outline-Orange focus-visible:text-current',
					'hover:border-Orange'
				],
				danger: 'py-3 px-6 text-red-500 hover:text-white hover:bg-red-500 hover:ring-0',
				carousel: [
					'flex items-center justify-center p-2 bg-white rounded-full text-Very_dark_blue',
					'focus-visible:bg-transparent focus-visible:outline-white focus-visible:text-Orange',
					'hover:text-Orange'
				],
				auth_btns: [
					'group flex items-center gap-4 px-4 py-3 text-Dark_grayish_blue',
					'focus-visible:bg-Dark_grayish_blue focus-visible:text-Very_light_grayish_blue focus-visible:outline-Orange',
					'hover:bg-Dark_grayish_blue hover:text-Very_light_grayish_blue'
				]
			},
			modifier: {
				plain: 'bg-transparent hover:bg-transparent',
				outline:
					'bg-transparent ring-1 shadow ring-current hover:ring-Orange focus-visible:outline-offset-2',
				gradient: 'bg-gradient-to-br from-Very_dark_blue to-Dark_grayish_blue',
				sideLink: 'justify-start text-Very_dark_blue hover:text-Dark_grayish_blue',
				headerLink: 'text-Dark_grayish_blue hover:text-Grayish_blue',
				footerLink: 'py-3 px-4 text-Grayish_blue hover:text-Dark_grayish_blue',
				socialLink:
					'py-2 px-3 focus-visible:outline-1 focus-visible:outline-offset-0 focus-visible:outline-Orange'
			},
			rounded: {
				full: 'rounded-full',
				right: 'rounded-tl-none rounded-bl-none',
				left: 'rounded-tr-none rounded-br-none'
			},
			selected: { true: '' },
			fullWidth: { true: 'w-full' },
			disabled: { true: 'bg-Grayish_blue text-white cursor-not-allowed' }
		},
		compoundVariants: [
			{
				variant: 'primary',
				modifier: 'outline',
				className: 'p-8 ring-2 focus-visible:outline-offset-4 focus-visible:ring-current'
			},
			{
				variant: 'default',
				modifier: 'outline',
				className: 'text-Very_dark_grayish_blue'
			},
			{
				variant: 'secondary_black',
				modifier: 'gradient',
				className: 'focus-visible:outline-Orange lg:text-xl'
			},
			{
				variant: 'secondary_orange',
				rounded: 'right',
				className: 'focus-visible:outline-2'
			},
			{
				variant: 'link',
				modifier: 'sideLink',
				className: 'py-4 px-8 focus-visible:shadow focus-visible:outline-offset-0'
			},
			{
				variant: 'link',
				selected: true,
				className: 'border-Orange border-b-2'
			},
			{
				variant: 'link',
				modifier: 'headerLink',
				className: 'text-xl px-4 font-normal'
			},
			{
				variant: 'link',
				modifier: 'footerLink',
				className: 'text-lg text-center px-0 font-normal lg:text-xl'
			}
		]
	}
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			hasRipple,
			rippleColor,

			variant,
			modifier,
			className,
			fullWidth,
			rounded,
			selected,
			exact,
			...props
		},
		ref
	) => {
		const [rippleList, setRippleList] = useState<RippleDimension[]>([]);
		const timeoutRef = useRef<NodeJS.Timeout>();

		const onPointerDown: PointerEventHandler<
			HTMLButtonElement | HTMLAnchorElement
		> = e => {
			if (!hasRipple) return;

			const button = e.currentTarget;
			const rippleSize = Math.max(button.offsetWidth, button.offsetHeight);
			const rect = button.getBoundingClientRect();
			const x = e.clientX - rect.left - rippleSize / 2;
			const y = e.clientY - rect.top - rippleSize / 2;
			const ripple: RippleDimension = { size: rippleSize, x, y };
			setRippleList(pv => [...pv, ripple]);

			clearTimeout(timeoutRef.current);
			timeoutRef.current = setTimeout(() => {
				setRippleList([]);
			}, 1000);
		};

		const ripples = rippleList.map((ripple, idx) => (
			<Ripple key={idx} rippleDimension={ripple} rippleColor={rippleColor} />
		));

		const classes = {
			variant,
			modifier,
			fullWidth,
			rounded,
			selected,
			className
		};

		if (props.href) {
			return (
				<Link
					href={props.href}
					onPointerDown={onPointerDown}
					ref={ref as ForwardedRef<HTMLAnchorElement>}
					className={cm(hasRipple && 'overflow-hidden', buttonClasses(classes))}
					{...props}>
					{props.children}
					{ripples}
				</Link>
			);
		}

		return (
			<button
				type='button'
				onPointerDown={onPointerDown}
				ref={ref as ForwardedRef<HTMLButtonElement>}
				className={cm(hasRipple && 'overflow-hidden', buttonClasses(classes))}
				{...props}>
				{props.children}
				{ripples}
			</button>
		);
	}
);

Button.displayName = 'Button';
