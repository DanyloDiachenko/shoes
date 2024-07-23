import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

import { Button } from '../ui/button';
import googleIcon from '../../../public/assets/icons/google.png';
import { SpinnerIcon } from '../icons';
import { cm } from '@/lib/class-merger';
import { useState } from 'react';

export const GoogleButton = () => {
	const [isLoading, setIsLoading] = useState(false);
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get('callbackUrl') ?? '';
	const handleLogin = () => {
		setIsLoading(true);
		signIn('google', { redirect: false, callbackUrl }).finally(() => setIsLoading(false));
	};

	return (
		<Button
			onClick={handleLogin}
			disabled={isLoading}
			rippleColor='bg-Dark_grayish_blue'
			className={cm([
				'relative flex items-center justify-center gap-4 py-5 font-bold shadow ring-1 ring-Grayish_blue text-Dark_grayish_blue focus-visible:outline-offset-4 lg:text-xl'
			])}>
			<Image src={googleIcon} alt='google icon' className='w-8 h-8' />
			<span>continue with google</span>
			{isLoading && (
				<SpinnerIcon
					className={cm([
						'absolute right-10 p-1 after:p-3',
						'after:border-t-red-500',
						'after:border-l-amber-500',
						'after:border-b-green-500',
						'after:border-r-blue-500',
						'animate-[spin_1s_linear_infinite]'
					])}
				/>
			)}
		</Button>
	);
};
