import { cm } from '@/lib/class-merger';
import Link from 'next/link';
import { FC, HTMLAttributes } from 'react';

type ListItemProps = { href: string } & HTMLAttributes<HTMLAnchorElement>;

export const ListItem: FC<ListItemProps> = ({ children, className, href, ...props }) => {
	return (
		<li className='p-2'>
			<Link
				href={href}
				tabIndex={0}
				role={'button'}
				className={cm([
					'relative h-full flex items-center gap-4 p-4 rounded-md shadow-sm outline-none cursor-pointer bg-Very_light_grayish_blue',
					'text-xl text-Dark_grayish_blue capitalize',
					'hover:ring-1 hover:ring-Grayish_blue',
					'focus-visible:outline-2 focus-visible:outline-Dark_grayish_blue focus-visible:ring-1 focus-visible:ring-Grayish_blue',
					'transition-[shadow,colors] duration-300',
					className
				])}
				{...props}>
				{children}
			</Link>
		</li>
	);
};
