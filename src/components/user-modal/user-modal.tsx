import { useState } from 'react';
import { useUIStore } from '@/store';
import { cm } from '@/lib/class-merger';
import { useEventListener } from '@/hooks/use-event-listener';

import { FavoriteList } from './favorite-list';
import { HistoryList } from './history-list';
import { OrderList } from './order-list';
import { ModalFooter } from './footer';
import { ModalHeader } from './header';
import { Card } from '../ui/card';

export const tabs = ['favorites', 'orders', 'history'] as const;
export type TabLitralValues = (typeof tabs)[number];

export const UserModal = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [selectedTab, setSelectedTab] = useState<TabLitralValues>('favorites');
	const userModalState = useUIStore(s => s.userModalStatus);
	const setProfileStatus = useUIStore(s => s.setProfileStatus);

	const cartObj = {
		insideHandler: () => setProfileStatus(true),
		outsideHandler: () => setProfileStatus(false)
	};

	const { ref: modalRef } = useEventListener<HTMLDivElement>(cartObj);

	return (
		<Card
			aria-modal
			ref={modalRef}
			state={userModalState}
			variant={'header_modal'}
			className='max-w-4xl'>
			<ModalHeader setSelectedTab={setSelectedTab} selectedTab={selectedTab} />

			<section
				className={cm([
					'grid text-2xl text-Grayish_blue p-8 min-h-[20rem] max-h-[42rem] overflow-y-auto',
					// scrollbar styles
					'sb-track-gray sb-thumb-orange sb-w-2'
				])}>
				{selectedTab === 'favorites' && <FavoriteList />}
				{selectedTab === 'history' && <HistoryList />}
				{selectedTab === 'orders' && <OrderList />}
			</section>

			<ModalFooter isLoading={isLoading} setIsLoading={setIsLoading} />
		</Card>
	);
};
