import './globals.css';
import { Kumbh_Sans } from 'next/font/google';
import { cm } from '@/lib/class-merger';
import { CheckLayout } from './check-layout';
import { NextAuthProvider } from './provider';

const kumbhSans = Kumbh_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html className='h-full' lang='en'>
			<link rel='icon' type='image/png' href='/favicon.png' />
			<body
				className={cm([
					kumbhSans.className,
					'flex flex-col justify-between min-h-[100dvh] mx-auto max-w-[43rem]',
					'lg:max-w-[144rem] xs:max-lg:hidden'
				])}>
				<NextAuthProvider>
					<CheckLayout>{children}</CheckLayout>
				</NextAuthProvider>
			</body>
		</html>
	);
}
