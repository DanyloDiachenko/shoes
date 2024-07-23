'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store';
import Loading from '@/app/loading';

import { DeleteIcon } from '../icons';
import { Button } from '../ui/button';
import { OrderStatus } from './order-status';
import { ItemsDetails } from './items-details';
import { OrderSummary } from './order-summary';
import { PersonalInfo } from './personal-info';
import { ActionModal } from '../ui/action-modal';

export const Order = ({ id }: { id: string }) => {
	const router = useRouter();
	const { status } = useSession();
	const [modal, setModal] = useState(false);

	const deleteOrder = useUserStore(s => s.deleteOrder);
	const curOrder = useUserStore(s => s.orderList.find(order => order.id === id));

	if (status === 'loading') return <Loading />;

	if (!curOrder)
		return (
			<div className='flex-1 grid items-center'>
				<p className='text-2xl font-semibold tracking-widest text-center uppercase lg:text-3xl text-Grayish_blue'>
					order not found
				</p>
			</div>
		);

	const handleDeleteOrder = () => {
		deleteOrder(curOrder.id);
		router.replace('/');
	};

	return (
		<>
			<ActionModal
				state={modal}
				variant={'delete_order'}
				onConfirm={handleDeleteOrder}
				onCancel={() => setModal(false)}
			/>
			<section className='grid gap-8 mx-8 my-16 lg:grid-cols-3 lg:my-32'>
				<section className='flex flex-col row-start-1 gap-4 mb-8 text-4xl font-bold capitalize col-span-full lg:text-5xl'>
					<div className='flex items-end gap-6 text-center'>
						<h2 className='text-Very_dark_blue'>order confirmed</h2>
						<p className='text-Dark_grayish_blue'>#{id}</p>
					</div>

					<div className='flex items-center justify-between text-xl tracking-wide normal-case text-Dark_grayish_blue'>
						<div>Placed on : {curOrder.date}</div>
						<Button
							title='delete order'
							onClick={() => setModal(true)}
							className='flex items-center justify-center w-16 h-16 rounded-lg group bg-Light_grayish_blue'>
							<DeleteIcon className='fill-Very_dark_blue group-hover:fill-Orange group-focus-visible:fill-Orange' />
						</Button>
					</div>
				</section>

				<ItemsDetails currentOrderCart={curOrder.cart} />
				<OrderSummary currentOrder={curOrder} />
				<PersonalInfo />
				<OrderStatus />
			</section>
		</>
	);
};
