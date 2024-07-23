import { useUserStore } from '@/store';
import { ListItem } from './list-item';
import { useHydratedState } from '@/hooks/use-hydrate';

export const OrderList = () => {
	const orderList = useUserStore(s => s.orderList);
	const orderListLength = useHydratedState(orderList.length, 0);

	if (orderListLength === 0)
		return (
			<h2 className='text-center place-self-center'>
				Looks like you haven't purchased any sneaker lately !
			</h2>
		);

	const sortedOrders = [...orderList];
	sortedOrders.sort((a, b) => b.date.localeCompare(a.date));

	return (
		<div className='flex flex-col'>
			<h2 className='self-center mb-8 text-2xl'>Most Recent</h2>
			<ul className='grid grid-cols-1 gap-8'>
				{sortedOrders.map((item, idx) => (
					<ListItem
						key={item.id}
						href={`/orders/${item.id}`}
						className='grid grid-cols-2 lg:flex lg:justify-between'>
						<span className='p-1 text-center place-self-start min-w-[3rem] font-bold rounded-md ring-1 ring-Grayish_blue col-start-1 row-start-1'>
							{idx < 9 ? `0${idx + 1}` : idx + 1}
						</span>
						<p className='row-start-2 px-1 text-center col-span-full'>
							<span>
								Order with id <b className='mx-1'>"{item.id}"</b> was recieved
								successfully
							</span>
						</p>
						<span className='font-bold tracking-wider text-center place-self-end'>
							{item.date.split('at')[0]}
						</span>
					</ListItem>
				))}
			</ul>
		</div>
	);
};
