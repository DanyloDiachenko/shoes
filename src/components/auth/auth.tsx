import Image from 'next/image';
import authImg from '../../../public/assets/images/auth-wallpaper.jpg';
import { cm } from '@/lib/class-merger';

export const AuthComponent = ({ children }: { children: React.ReactNode }) => {
	return (
		<main
			className={cm([
				'grid gap-8 items-center overflow-hidden max-w-screen-xl h-max',
				'lg:fixed lg:inset-0 lg:m-auto lg:w-11/12',
				'lg:shadow-lg lg:rounded-3xl',
				'lg:grid-cols-2'
			])}>
			{children}
			<figure className='hidden lg:flex h-full w-full'>
				<Image src={authImg} alt='side picture' priority />
			</figure>
		</main>
	);
};
