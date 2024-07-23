import { FC, MouseEventHandler } from 'react';
import { cm } from '@/lib/class-merger';
import { LogoutIcon } from '../icons';
import { Button } from '../ui/button';

type AuthBtnProps = {
	state: boolean;
	type: 'login' | 'logout';
	onClick: MouseEventHandler;
};

export const AuthBtn: FC<AuthBtnProps> = ({ state, type, onClick }) => {
	return (
		<Button
			onClick={onClick}
			variant={'auth_btns'}
			disabled={state}
			className={cm(state && 'hover:bg-transparent')}>
			<span>{type === 'login' ? 'Login' : 'Logout'}</span>
			<LogoutIcon
				className={cm([
					'w-8 fill-Dark_grayish_blue',
					'group-hover:fill-Very_light_grayish_blue group-focus-visible:fill-Very_light_grayish_blue',
					type === 'logout' && 'rotate-180 -order-1'
				])}
			/>
		</Button>
	);
};
