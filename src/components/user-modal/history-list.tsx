import Image from 'next/image';
import { useUserStore } from '@/store';

import { Button } from '../ui/button';
import { CloseIcon } from '../icons';
import { ListItem } from './list-item';
import { useHydratedState } from '@/hooks/use-hydrate';

export const HistoryList = () => {
	const historyList = useUserStore(s => s.historyList);
	const removeItemHistory = useUserStore(s => s.removeItemHistory);
	const historyListLength = useHydratedState(historyList.length, 0);

	if (historyListLength === 0)
		return (
			<h2 className='text-center place-self-center'>
				You have no history, you can start with our awesome collections
			</h2>
		);

	return (
		<div className='flex flex-col'>
			<h2 className='self-center mb-8 text-2xl'>Most Recent</h2>
			<ul className='grid grid-cols-1 gap-4 mx-8 justify-items-center'>
				{historyList.map(item => (
					<ListItem key={item.id} title={item.title} href={'/product/3'}>
						<Button
							modifier={'plain'}
							variant={'default'}
							title='delete history item'
							onClick={() => removeItemHistory(item.id)}
							className='p-1 rounded group ring-1 ring-Grayish_blue focus-visible:outline-offset-2'>
							<CloseIcon className='scale-75 group-hover:fill-Orange' />
						</Button>

						<Image
							alt={item.title}
							src={item.image.thumb as string}
							className='object-contain w-16 rounded-xl lg:w-20 bg-Grayish_blue aspect-square'
						/>
						<p className='text-xl text-Dark_grayish_blue'>{item.title}</p>
					</ListItem>
				))}
			</ul>
		</div>
	);
};
