import { FC, Dispatch, SetStateAction } from 'react';
import { cm } from '@/lib/class-merger';
import { useUserStore } from '@/store';
import { useHydratedState } from '@/hooks/use-hydrate';

import { Button } from '../ui/button';
import { TabLitralValues, tabs } from './user-modal';

type ModalHeaderProps = {
	selectedTab: TabLitralValues;
	setSelectedTab: Dispatch<SetStateAction<TabLitralValues>>;
};

export const ModalHeader: FC<ModalHeaderProps> = ({ setSelectedTab, selectedTab }) => {
	const { favoriteList, historyList, orderList } = useUserStore(state => state);
	const favoriteListLength = useHydratedState(favoriteList.length, 0);
	const historyListLength = useHydratedState(historyList.length, 0);
	const orderListLength = useHydratedState(orderList.length, 0);

	return (
		<header className='flex items-center justify-between gap-2 p-8 tracking-wide capitalize border-b border-Grayish_blue/25'>
			{tabs.map(tab => (
				<Button
					key={tab}
					aria-current={selectedTab === tab}
					onClick={() => setSelectedTab(tab)}
					className={cm([
						'rounded-none p-1 flex-grow text-Grayish_blue last:border-0 ',
						'hover:text-Dark_grayish_blue',
						'focus-visible:outline-offset-2',
						'lg:p-2 lg:border-r-2 lg:border-Grayish_blue',
						'[&[aria-current="true"]]:text-Dark_grayish_blue'
					])}>
					<span>{tab}</span>
					{/* prettier-ignore */}
					<span className='ml-4 px-2 py-1 min-w-[2rem] rounded-md ring-1 ring-Grayish_blue text-xl'>
							{tab === 'favorites' ? favoriteListLength > 99 ? '99+': favoriteListLength : ''}
							{tab === 'history' ? historyListLength > 99 ? '99+' : historyListLength : ''}
							{tab === 'orders' ? orderListLength > 99 ? '99+' : orderListLength : ''}
						</span>
				</Button>
			))}
		</header>
	);
};
