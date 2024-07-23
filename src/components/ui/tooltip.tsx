import { FC, HTMLAttributes, useRef, useState } from 'react';
import { useEventListener } from '@/hooks/use-event-listener';
import { cm } from '@/lib/class-merger';

type ToolTipProps = {
	tip: string | JSX.Element;
	shouldRender?: boolean;
	renderOnHover?: boolean;
	renderLeft?: boolean;
	renderRight?: boolean;
	renderCenter?: boolean;
	renderTime?: number;
} & HTMLAttributes<HTMLSpanElement>;

export const ToolTip: FC<ToolTipProps> = ({
	tip,
	children,
	className,
	renderRight,
	renderCenter,
	renderLeft = true,
	renderTime = 3000,
	shouldRender = true,
	renderOnHover = false,
	...props
}) => {
	const timeoutRef = useRef<NodeJS.Timeout>();
	const [showTip, setShowTip] = useState(false);

	const handleShowTip = () => {
		setShowTip(pv => !pv);
		clearTimeout(timeoutRef.current);
		timeoutRef.current = setTimeout(() => {
			setShowTip(false);
		}, renderTime);
	};

	const { ref: policyRef } = useEventListener({
		insideHandler: () => handleShowTip(),
		outsideHandler: () => setShowTip(false)
	});

	return (
		<span
			ref={policyRef}
			data-tip={tip}
			className={cm([
				'relative flex cursor-pointer after:bg-Very_dark_blue',
				// position & dimensions
				'after:absolute after:z-30 after:-top-2 after:px-6 after:py-3 after:rounded-md after:w-max',
				renderLeft && 'after:left-0',
				renderRight && 'after:right-0',
				renderCenter && 'after:left-1/2 after:-translate-x-1/2',
				// typography
				'after:text-xl after:font-semibold after:tracking-wide after:normal-case after:text-Very_light_grayish_blue after:content-[attr(data-tip)]',
				// animation
				'after:opacity-0 after:invisible after:transition-[transform,opacity] after:duration-300',
				showTip &&
					shouldRender &&
					'after:-translate-y-11 after:opacity-100 after:visible',
				renderOnHover &&
					'after:hover:-translate-y-11 after:hover:opacity-100 after:hover:visible',
				className
			])}
			{...props}>
			{children}
		</span>
	);
};
