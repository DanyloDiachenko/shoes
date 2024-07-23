import { header_links } from '../../data/links';
import { Button } from '../ui/button';

export const TopNavigation = () => {
	return (
		<nav className='items-center hidden gap-6 lg:flex h-[inherit]'>
			{header_links.map(link => (
				<Button key={link.id} href={'/'} variant={'link'} modifier={'headerLink'}>
					{link.href}
				</Button>
			))}
		</nav>
	);
};
