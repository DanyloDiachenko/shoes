import { Dispatch, SetStateAction } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';
import { SpinnerIcon } from '../icons';
import { AuthBtn } from './auth-btn';
import { wait } from '@/lib/wait';

type Props = {
	isLoading: boolean;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
};
export const ModalFooter = ({ isLoading, setIsLoading }: Props) => {
	const { data: session } = useSession();

	const handleLogin = () => {
		setIsLoading(true);
		signIn().finally(() => wait(2000).then(() => setIsLoading(false)));
	};

	const handleLogout = () => {
		setIsLoading(true);
		signOut().finally(() => wait(2000).then(() => setIsLoading(false)));
	};

	let content = (
		<>
			{isLoading ? (
				<SpinnerIcon className='px-4 py-3 m-4' />
			) : (
				<AuthBtn onClick={handleLogin} state={isLoading} type='login' />
			)}
		</>
	);

	if (session?.user.email) {
		content = (
			<>
				{isLoading ? (
					<SpinnerIcon className='self-start px-4 py-3 after:-right-12'>
						<span className='z-10 text-xl font-semibold tracking-wide text-Orange'>
							Signing out
						</span>
					</SpinnerIcon>
				) : (
					<AuthBtn onClick={handleLogout} state={isLoading} type='logout' />
				)}
			</>
		);
	}

	return (
		<footer className='flex px-8 py-6 border-t-2 border-Very_light_grayish_blue'>
			{content}
		</footer>
	);
};
