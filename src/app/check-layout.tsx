'use client';
import { usePathname } from 'next/navigation';

import { Header } from '../components/layouts/header';
import { CartModal } from '@/components/cart-modal/cart-modal';
import { UserModal } from '@/components/user-modal/user-modal';
import { Footer } from '@/components/layouts/footer';

export const CheckLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	if (pathname === '/auth/register' || pathname === '/auth/login') {
		return <>{children}</>;
	}

	return (
		<>
			<Header>
				<CartModal />
				<UserModal />
			</Header>
			{children}
			<Footer />
		</>
	);
};
