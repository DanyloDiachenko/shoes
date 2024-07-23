import Link from 'next/link';
import Image from 'next/image';

import { Button } from '../ui/button';
import { footer_links } from '@/data/links';
import logo from '../../../public/assets/icons/logo.svg';

export const Footer = () => {
	return (
		<footer className='px-8 py-16 min-h-[5rem] border-t-2 border-Very_light_grayish_blue'>
			<div className='flex justify-center'>
				<Button
					href='/'
					modifier={'plain'}
					title='sneakers home'
					className='row-start-1 p-2 mb-16 col-span-full'>
					<Image src={logo} alt='company logo' aria-hidden />
				</Button>
			</div>

			<section className='grid grid-cols-3 gap-y-16 justify-items-center'>
				<nav className='flex flex-col items-center gap-4'>
					<p className='mb-8 text-2xl font-bold capitalize text-Very_dark_blue'>
						product
					</p>
					{footer_links.products.map(link => (
						<Button key={link.id} href={'/'} variant={'link'} modifier={'footerLink'}>
							{link.href}
						</Button>
					))}
				</nav>

				<nav className='flex flex-col items-center gap-4'>
					<p className='mb-8 text-2xl font-bold capitalize text-Very_dark_blue'>
						category
					</p>
					{footer_links.category.map(link => (
						<Button key={link.id} variant={'link'} modifier={'footerLink'} href={'/'}>
							{link.href}
						</Button>
					))}
				</nav>

				<nav className='flex flex-col items-center gap-4'>
					<p className='mb-8 text-2xl font-bold capitalize text-Very_dark_blue'>
						company
					</p>
					{footer_links.company.map(link => (
						<Button key={link.id} variant={'link'} modifier={'footerLink'} href={'/'}>
							{link.href}
						</Button>
					))}
				</nav>

				<nav className='flex items-center gap-4 col-span-full'>
					<p className='row-start-1 mr-4 text-2xl font-bold capitalize col-span-fnavl text-Very_dark_blue'>
						social
					</p>
					{footer_links.social.map(link => (
						<Button
							key={link.id}
							title={link.name}
							variant={'default'}
							modifier={'socialLink'}
							href='/'>
							<span>{link.icon}</span>
							<span className='sr-only'>{link.name} link</span>
						</Button>
					))}
				</nav>
			</section>

			<p className='mt-16 text-xl font-medium text-center text-Grayish_blue'>
				© {new Date().getFullYear()} Sneakers, Inc. All rights reserved
			</p>
		</footer>
	);
};
