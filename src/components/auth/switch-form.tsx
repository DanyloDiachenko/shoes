import { FC } from 'react';
import { Button } from '../ui/button';

type SwitchFormProps = {
	href: '/auth/login' | '/auth/register';
	message: string;
};

export const SwitchForm: FC<SwitchFormProps> = ({ message, href }) => {
	return (
		<p className='flex items-center gap-2 text-xl text-Dark_grayish_blue text-center'>
			<span className='px-4 font-semibold'>{message}</span>
			<span className='text-4xl'>|</span>
			<Button href={href} variant={'auth_btns'} className='text-Orange lg:text-xl'>
				{href === '/auth/login' ? 'sign in' : 'sign up'}
			</Button>
		</p>
	);
};
