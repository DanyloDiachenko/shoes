import { useState } from 'react';
import { useUIStore } from '@/store';
import { header_links } from '@/data/links';

import { Button } from '../ui/button';
import { Overlay } from '../ui/overlay';
import { MenuIcon, CloseIcon } from '../icons';
import { cm } from '@/lib/class-merger';

export const SideNavigation = () => {
	const [isSelected, setIsSelected] = useState(0);
	const menuIsOpen = useUIStore(s => s.sideMenuStatus);
	const setMenuStatus = useUIStore(s => s.setMenuStatus);

	return (
		<>
			<Overlay
				onClick={() => setMenuStatus(false)}
				className={`${
					menuIsOpen ? 'translate-x-0' : '-translate-x-full'
				} isolate transition-transform duration-500 backdrop-blur-[2px] xs:hidden`}
			/>

			<Button
				className='p-1 rounded xs:hidden'
				aria-expanded={menuIsOpen}
				onClick={() => setMenuStatus(true)}>
				<span className='sr-only'>side menu button</span>
				<MenuIcon aria-hidden />
			</Button>

			<nav
				aria-labelledby='side navigation'
				aria-hidden={!menuIsOpen}
				className={cm([
					'fixed z-[70] top-0 left-0 w-full -translate-x-full',
					'transition-transform duration-500 delay-0',
					menuIsOpen && 'translate-x-0 delay-150',
					'xs:hidden'
				])}>
				<div
					aria-expanded={menuIsOpen}
					className='absolute inset-0 flex flex-col w-2/3 min-h-screen gap-8 px-8 py-12 -z-10 bg-Very_light_grayish_blue'>
					<Button
						onClick={() => setMenuStatus(false)}
						className='p-1 mb-8 rounded group w-fit'>
						<span className='sr-only'>close menu</span>
						<CloseIcon className='hover:fill-Orange group-focus-visible:fill-Orange' />
					</Button>

					{header_links.map((link, idx) => (
						<Button
							href={'/'}
							key={link.id}
							aria-current={isSelected === link.id}
							variant={'link'}
							modifier={'sideLink'}
							className='[&[aria-current="true"]]:border-Orange'
							onClick={() => setIsSelected(link.id)}>
							{link.href}
						</Button>
					))}
				</div>
			</nav>
		</>
	);
};
