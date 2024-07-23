import {
	FC,
	Dispatch,
	ComponentProps,
	MouseEventHandler,
	SetStateAction,
	useState
} from 'react';
import { cm } from '@/lib/class-merger';
import { ChevronLeftIcon } from '../icons';
import { Button } from './button';

type AccordionProps = {
	header: string;
	icon?: JSX.Element;
	headerColor?: string;
	bodyStyle?: string;
	initState?: boolean;
	setState?: Dispatch<SetStateAction<boolean>>;
} & ComponentProps<'section'>;

export const Accordion: FC<AccordionProps> = ({
	header,
	bodyStyle,
	headerColor,
	initState = true,
	setState,
	...props
}) => {
	const [isExpanded, setIsExpanded] = useState(initState);

	const handleClick: MouseEventHandler = e => {
		e.stopPropagation();
		if (setState) setState(pv => !pv);
		setIsExpanded(pv => !pv);
	};

	return (
		<section
			className={cm([
				'my-4 overflow-hidden text-white lg:my-8 rounded-2xl shadow-md',
				props.className
			])}>
			<header
				onClick={handleClick}
				className={cm([
					'flex items-center justify-between px-8 py-4 bg-Orange',
					headerColor
				])}>
				<h4 className='text-2xl font-semibold'>{header}</h4>
				<Button
					onClick={handleClick}
					aria-expanded={isExpanded}
					className='bg-white rounded-full focus-visible:outline-Very_dark_blue focus-visible:outline-dotted'>
					<ChevronLeftIcon
						className={cm([
							'transition-transform duration-300 rotate-90',
							'hover:fill-Orange',
							isExpanded && '-rotate-90'
						])}
					/>
				</Button>
			</header>

			<div
				className={cm([
					'relative grid grid-rows-[0fr] bg-Dark_grayish_blue',
					'transition-[grid-template-rows] duration-500',
					isExpanded && 'grid-rows-[1fr]',
					bodyStyle
				])}>
				<div className='absolute inset-0 border-t border-Very_light_grayish_blue'>
					&nbsp;
				</div>
				<div className='overflow-hidden'>{props.children}</div>
			</div>
		</section>
	);
};
